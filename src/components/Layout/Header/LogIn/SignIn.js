import React, { useState } from "react";
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
import GradientButton from "../../../buttons/MainButton";
import { ReactComponent as Logo } from "../../../../media/logo/Logo.svg";
import instance from "../../../../api/instance";
import useAuth from "../../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setIsModalOpen, onLoginSuccess, className }) => {
	const setUser = useAuth((state) => state.setUser);
	const [showPassword, setShowPassword] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [usernameError, setUsernameError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [keepLoggedIn, setKeepLoggedIn] = useState(false);
	const [loginError, setLoginError] = useState(false);

	const navigate = useNavigate();

	const handlePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleLogin = (event) => {
		event.preventDefault();
		setUsernameError(false);
		setPasswordError(false);
		setLoginError(false);

		if (username === "") {
			setUsernameError(true);
		}

		if (password === "") {
			setPasswordError(true);
		}

		if (username && password) {
			instance
				.post("auth/login", {
					userName: username,
					password,
				})
				.then((res) => {
					setUser(res.data);
					setUsername("");
					setPassword("");
					setShowPassword(false);
					if (onLoginSuccess && setIsModalOpen) {
						onLoginSuccess();
						setIsModalOpen((prev) => !prev);
					}
					return navigate("/admin");
				})
				.catch((err) => {
					setLoginError(true);
				});
		}
	};

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
		if (usernameError) setUsernameError(false);
		if (loginError) setLoginError(false);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
		if (passwordError) setPasswordError(false);
		if (loginError) setLoginError(false);
	};

	const handleKeepLoggedIn = (event) => {
		setKeepLoggedIn(event.target.checked);
	};

	return (
		<Styled.Form
			className={className}
			sx={{ p: { md: "60px 40px", xs: "35px 25px" } }}
		>
			<Styled.LogoContainer>
				<Logo width={"100%"} height={"100%"} />
			</Styled.LogoContainer>
			{/* <Typography m={0} variant="CardHead" component={"h5"}>
				Welcome Back
			</Typography>
			<Typography component={"p"}>
				Please enter your details to sign in.
			</Typography> */}
			{/* <Divider
				sx={{ width: "100%", background: "rgba(255, 255, 255, 0.1)" }}
				variant="middle"
			/> */}
			<form onSubmit={handleLogin}>
				<Styled.Input
					label="Username"
					variant="outlined"
					value={username}
					onChange={handleUsernameChange}
					error={usernameError || loginError}
					helperText={usernameError ? "Username cannot be empty" : ""}
				/>

				<Styled.Input
					label="Password"
					type={showPassword ? "text" : "password"}
					variant="outlined"
					value={password}
					onChange={handlePasswordChange}
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
					error={passwordError || loginError}
					helperText={passwordError ? "Password cannot be empty" : ""}
				/>
				{loginError && (
					<FormHelperText error>
						Username or password is incorrect
					</FormHelperText>
				)}

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
							onChange={handleKeepLoggedIn}
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
						p: { xs: "14px 30px", xl: "14px 30px", xxl: "16px 30px" },
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
