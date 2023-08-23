import React, { useState } from "react";
import {
	InputAdornment,
	Typography,
	Checkbox,
	FormControlLabel,
	Snackbar,
	Alert,
} from "@mui/material";
import * as Styled from "./style";
import ReCaptchaComponent from "../ReCaptcha"; // Assuming it's in the same directory
import instance from "../../api/instance";

const EMAIL_ERROR_MESSAGE = "Please enter a valid email address";
const ACCEPT_TERMS_ERROR_MESSAGE = "Please accept the terms and conditions";
const CAPTCHA_ERROR_MESSAGE = "Please verify that you are not a robot";

const isValidEmail = (email) => {
	const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return re.test(String(email).toLowerCase());
};

const CorporateEmail = () => {
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const [checked, setChecked] = useState(false);
	const [checkboxError, setCheckboxError] = useState(false);
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [captchaValue, setCaptchaValue] = useState(null);
	const [captchaError, setCaptchaError] = useState(false);

	const handleAccept = (e) => {
		if (e && e.key === "Enter") {
			e.preventDefault();
		}

		if (!isValidEmail(email)) {
			setEmailError(EMAIL_ERROR_MESSAGE);
			return;
		} else {
			setEmailError("");
		}

		if (!checked) {
			setCheckboxError(true);
			return;
		} else {
			setCheckboxError(false);
		}

		if (!captchaValue) {
			setCaptchaError(true);
			return;
		} else {
			setCaptchaError(false);
			setEmail("");
			setChecked(false);
			setSnackbarOpen(true);
		}

		instance
			.post("send-email", { email })
			.then((res) => {
				console.log({ res });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleChange = (event) => {
		setEmail(event.target.value);
		setEmailError("");
	};

	const handleCheckboxChange = (event) => {
		setChecked(event.target.checked);
		setCheckboxError(false);
	};

	return (
		<Styled.Container>
			<Styled.EmailInput
				label="Corporate email"
				id="outlined-basic"
				variant="outlined"
				value={email}
				onChange={handleChange}
				error={!!emailError}
				helperText={emailError}
				onKeyPress={(e) => {
					if (e.key === "Enter") handleAccept(e);
				}}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<Styled.SendArrow onClick={handleAccept} />
						</InputAdornment>
					),
				}}
			/>
			<FormControlLabel
				control={
					<Checkbox
						sx={{
							"& svg": {
								width: { xl: "40px", xxl: "45px" },
								height: { xl: "40px", xxl: "45px" },
							},
							color: checked ? "#FFF" : "#D42530",
							"&.Mui-checked, &.MuiCheckbox-indeterminate": {
								color: checked ? "#FFF" : "#D42530",
							},
						}}
						checked={checked}
						onChange={handleCheckboxChange}
						color="primary"
					/>
				}
				label={
					<Typography
						sx={{ color: "#C0C1C2", cursor: "default", textTransform: "none" }}
						variant="ButtonNew"
						component={"span"}
					>
						I consent to the processing of my personal data and confirm that I
						have read and agree to the terms of the{" "}
						<a
							style={{
								color: "#D42530",
								cursor: "pointer",
								textTransform: "none",
							}}
							href="/path-to-privacy-policy"
						>
							Privacy Policy
						</a>{" "}
						and{" "}
						<a
							style={{
								color: "#D42530",
								cursor: "pointer",
								textTransform: "none",
							}}
							href="/path-to-user-agreement"
						>
							User Agreement
						</a>
					</Typography>
				}
			/>
			{checkboxError && (
				<Styled.ErrorText>{ACCEPT_TERMS_ERROR_MESSAGE}</Styled.ErrorText>
			)}

			<ReCaptchaComponent
				data-theme="dark"
				onChange={(value) => {
					setCaptchaValue(value);
					setCaptchaError(false);
				}}
			/>
			{captchaError && (
				<Styled.ErrorText>{CAPTCHA_ERROR_MESSAGE}</Styled.ErrorText>
			)}

			<Snackbar
				open={snackbarOpen}
				autoHideDuration={6000}
				onClose={() => setSnackbarOpen(false)}
				anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
			>
				<Alert
					onClose={() => setSnackbarOpen(false)}
					severity="success"
					variant="filled"
					sx={{ bgcolor: "white", color: "black" }}
				>
					Email successfully submitted!
				</Alert>
			</Snackbar>
		</Styled.Container>
	);
};

export default CorporateEmail;
