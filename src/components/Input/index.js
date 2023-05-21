import React, { useState } from "react";
import {
	InputAdornment,
	Typography,
	Checkbox,
	FormControlLabel,
} from "@mui/material";
import * as Styled from "./style";

const CorporateEmail = () => {
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState(false);
	const [checkboxError, setCheckboxError] = useState(false);
	const [checked, setChecked] = useState(false);

	const handleAccept = (e) => {
		if (email === "") {
			setEmailError(true);
		} else {
			setEmailError(false);
		}

		if (!checked) {
			setCheckboxError(true);
		} else {
			setCheckboxError(false);
			console.log("Accepted!");
			setEmail("");
		}

		if (e.key === "Enter") {
			e.preventDefault();
		}
	};

	const handleChange = (event) => {
		setEmail(event.target.value);
		setEmailError(false);
	};

	const handleCheckboxChange = (event) => {
		setChecked(event.target.checked);
		setCheckboxError(false);
	};

	return (
		<Styled.Container>
			<Styled.EmailInput
				label="Corporate email"
				onKeyDown={handleAccept}
				id="outlined-basic"
				variant="outlined"
				value={email}
				onChange={handleChange}
				error={emailError}
				helperText={emailError ? "Email is required" : ""}
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
							color: checked ? "#FFF" : "#D42530", // Change the color values here
							"&.Mui-checked, &.MuiCheckbox-indeterminate": {
								color: checked ? "#FFF" : "#D42530", // Change the color values here
							},
						}}
						checked={checked}
						onChange={handleCheckboxChange}
						color="primary"
					/>
				}
				label={
					<Typography
						sx={{ color: "#C0C1C2", cursor: "default" }}
						variant="ButtonNew"
						component={"p"}
					>
						I consent to the processing of my personal data and confirm that I
						have read and agree to the terms of the{" "}
						<Typography
							sx={{ color: "#D42530", cursor: "pointer" }}
							variant="ButtonNew"
							component={"a"}
							href="#"
						>
							Privacy Policy
						</Typography>{" "}
						and{" "}
						<Typography
							sx={{ color: "#D42530", cursor: "pointer" }}
							variant="ButtonNew"
							component={"a"}
							href="#"
						>
							User Agreement
						</Typography>
					</Typography>
				}
			/>
			{checkboxError && (
				<Styled.ErrorText>
					Please accept the terms and conditions
				</Styled.ErrorText>
			)}
		</Styled.Container>
	);
};

export default CorporateEmail;
