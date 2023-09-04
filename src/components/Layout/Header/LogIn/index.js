import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
	IconButton,
	InputAdornment,
	Checkbox,
	FormControlLabel,
	Typography,
	FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as Styled from "./style";
import GradientButton from "../../../Buttons/MainButton";
import { ReactComponent as Logo } from "../../../../media/logo/Logo.svg";
import instance from "../../../../api/instance";
import useAuth from "../../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

// Validation Schema
const schema = yup.object().shape({
	username: yup.string().required("Username is required"),
	password: yup.string().required("Password is required"),
	twoFactorCode: yup.string().required("Two-Factor Code is required"),
});

const LoginForm = ({ setIsModalOpen, onLoginSuccess, className }) => {
	const {
		control,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const [showPassword, setShowPassword] = useState(false);
	const [keepLoggedIn, setKeepLoggedIn] = useState(false);
	const setUser = useAuth((state) => state.setUser);
	const navigate = useNavigate();

	const handlePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const onSubmit = (data) => {
		instance
			.post("auth/login", {
				userName: data.username,
				password: data.password,
			})
			.then((res) => {
				setUser(res.data);
				if (onLoginSuccess && setIsModalOpen) {
					onLoginSuccess();
					setIsModalOpen((prev) => !prev);
				}
				return navigate("/admin");
			})
			.catch((err) => {
				// Assuming your server returns a 400 or 401 status code for incorrect login
				if (err.response.status === 400 || err.response.status === 401) {
					const errorMessage = err.response.data.message || "Login failed";

					// Assuming the server returns specific error keys
					if (errorMessage === "Incorrect username") {
						setError("username", { message: "Incorrect username" });
					} else if (errorMessage === "Incorrect password") {
						setError("password", { message: "Incorrect password" });
					} else if (errorMessage === "Incorrect two-factor code") {
						setError("twoFactorCode", { message: "Incorrect two-factor code" });
					} else {
						setError("username", { message: "Login failed" });
						setError("password", { message: "Login failed" });
						setError("twoFactorCode", { message: "Login failed" });
					}
				}
			});
	};
	return (
		<Styled.Form
			className={className}
			sx={{ p: { md: "60px 40px", xs: "35px 25px" } }}
		>
			<Styled.LogoContainer>
				<Logo width={"100%"} height={"100%"} />
			</Styled.LogoContainer>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="username"
					control={control}
					defaultValue=""
					render={({ field }) => (
						<Styled.Input
							{...field}
							label="Username"
							variant="outlined"
							error={!!errors.username}
							helperText={errors.username?.message}
						/>
					)}
				/>
				<Controller
					name="password"
					control={control}
					defaultValue=""
					render={({ field }) => (
						<Styled.Input
							{...field}
							label="Password"
							type={showPassword ? "text" : "password"}
							variant="outlined"
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											sx={{ color: "#FFF" }}
											onClick={handlePasswordVisibility}
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								),
							}}
							error={!!errors.password}
							helperText={errors.password?.message}
						/>
					)}
				/>
				<Controller
					name="twoFactorCode"
					control={control}
					defaultValue=""
					render={({ field }) => (
						<Styled.Input
							{...field}
							label="Two-Factor Code"
							variant="outlined"
							error={!!errors.twoFactorCode}
							helperText={errors.twoFactorCode?.message}
						/>
					)}
				/>
				<FormControlLabel
					control={
						<Checkbox
							sx={{
								color: "#D42530",
								"&.Mui-checked, &.MuiCheckbox-indeterminate": {
									color: "#FFF",
								},
							}}
							checked={keepLoggedIn}
							onChange={(e) => setKeepLoggedIn(e.target.checked)}
							color="primary"
						/>
					}
					label="Keep me logged in"
				/>
				<GradientButton
					sx={{
						alignSelf: "end",
						width: "100%",
						marginTop: "20px",
						background: "transparent",
					}}
					variant="contained"
					color="primary"
					type="submit"
				>
					<Typography variant="ButtonNew">Log in</Typography>
				</GradientButton>
			</form>
		</Styled.Form>
	);
};

export default LoginForm;
