import React, { useState } from "react";
import {
	Box,
	TextField,
	Divider,
	IconButton,
	InputAdornment,
	Stack,
	Checkbox,
	FormControlLabel,
	Typography,
	FormHelperText,
	FormControl,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as Styled from "./style";
import GradientButton from "../../../Buttons/MainButton";
import { ReactComponent as Logo } from "../../../../media/logo/Logo.svg";

const LoginForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [usernameError, setUsernameError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [keepLoggedIn, setKeepLoggedIn] = useState(false);
	const [loginError, setLoginError] = useState(false);

	const handlePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleLogin = (event) => {
		console.log(867684684);
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
			// Here you can include your actual authentication logic
			if (username !== "admin" || password !== "admin") {
				setLoginError(true);
			} else {
				console.log("Login button clicked");
				setUsername("");
				setPassword("");
				setShowPassword(false);
			}
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
		<Styled.Form sx={{ p: { md: "35px", sm: "25px 15px", xs: "20px 10px" } }}>
			<Styled.LogoContainer>
				{/* replace 'logo.png' with your actual logo path */}
				<Logo width={"184px"} height={"40px"} />
			</Styled.LogoContainer>
			<Typography m={0} variant="CardHead" component={"h5"}>
				Welcome Back
			</Typography>
			<Typography component={"p"}>
				Please enter your details to sign in.
			</Typography>
			<Divider
				sx={{ width: "100%", background: "rgba(255, 255, 255, 0.1)" }}
				variant="middle"
			/>
			<form onSubmit={handleLogin}>
				{/* <FormControl sx={{ width: "100%" }} mt={2}> */}
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
								<IconButton onClick={handlePasswordVisibility}>
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
					}}
					variant="contained"
					color="primary"
					type="submit"
					// onClick={handleLogin}
				>
					<Typography variant="ButtonNew">Log in</Typography>
				</GradientButton>
				{/* </FormControl> */}
			</form>
		</Styled.Form>
	);
};

export default LoginForm;
