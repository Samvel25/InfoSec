import React, { useState } from "react";
import { styled } from "@mui/system";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	FormControlLabel,
	Switch,
	Typography,
	Tooltip,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import GradientButton from "../buttons/MainButton";
import * as Styled from "./style";

const CookieBanner = () => {
	const [open, setOpen] = useState(
		localStorage.getItem("cookieAccepted") !== "true"
	);
	const [cookiePreferences, setCookiePreferences] = useState({
		essential: true,
		analytics: false,
		marketing: false,
	});

	const handleChange = (event) => {
		setCookiePreferences({
			...cookiePreferences,
			[event.target.name]: event.target.checked,
		});
	};

	const handleSubmit = () => {
		localStorage.setItem(
			"cookiePreferences",
			JSON.stringify(cookiePreferences)
		);
		localStorage.setItem("cookieAccepted", "true");
		setOpen(false);
	};
	if (localStorage.getItem("cookieAccepted") === "true") {
		return null;
	}

	return (
		<Styled.StyledDialog open={open} onClose={() => setOpen(false)}>
			<Styled.StyledDialogTitle>
				<div>Your Privacy, Our Priority</div>
				<Tooltip title="Learn more about our privacy policy">
					<InfoIcon />
				</Tooltip>
			</Styled.StyledDialogTitle>
			<Styled.StyledDialogContent>
				<Typography paragraph>
					We're committed to protecting your privacy. Customize your cookie
					settings below.
				</Typography>
				<FormControlLabel
					control={
						<Switch checked={cookiePreferences.essential} name="essential" />
					}
					label={
						<>
							<Typography>Essential Cookies</Typography>
							<CheckCircleIcon />
						</>
					}
					disabled
				/>
				<FormControlLabel
					control={
						<Switch
							checked={cookiePreferences.analytics}
							onChange={handleChange}
							name="analytics"
						/>
					}
					label={
						<Tooltip title="Analytics cookies help us understand how our website is being used.">
							<span>
								<Typography>Analytics Cookies</Typography>
								<InfoIcon />
							</span>
						</Tooltip>
					}
				/>
				<FormControlLabel
					control={
						<Switch
							checked={cookiePreferences.marketing}
							onChange={handleChange}
							name="marketing"
						/>
					}
					label={
						<Tooltip title="Marketing cookies are used to track visitors across websites.">
							<span>
								<Typography>Marketing Cookies</Typography>
								<InfoIcon />
							</span>
						</Tooltip>
					}
				/>
			</Styled.StyledDialogContent>

			<DialogActions sx={{ justifyContent: { xs: "center", sm: "end" } }}>
				<Styled.StyledButton
					onClick={handleSubmit}
					startIcon={<CheckCircleIcon />}
				>
					Accept
				</Styled.StyledButton>
				<Styled.CancelButton
					variant="outlined"
					onClick={() => setOpen(false)}
					startIcon={<CancelIcon />}
				>
					Skip
				</Styled.CancelButton>
			</DialogActions>
		</Styled.StyledDialog>
	);
};

export default CookieBanner;
