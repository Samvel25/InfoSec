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
import GradientButton from "../Buttons/MainButton";

const StyledDialog = styled(Dialog)({
	"& .MuiPaper-root": {
		backgroundColor: "#1F1F1F", // Dark background
		color: "#F7F7F7", // Light text
		borderRadius: "20px",
		padding: "2rem",
		boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.5)", // Soft shadow
	},
});

const StyledDialogTitle = styled(DialogTitle)({
	borderBottom: "3px solid #3F3F3F",
	padding: "0.5rem 2rem",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	"& h2": {
		fontSize: "2rem",
		fontWeight: 800,
	},
	"& svg": {
		fontSize: "2rem",
	},
});

const StyledDialogContent = styled(DialogContent)({
	padding: "2rem",
	"& p": {
		color: "#CCC",
		fontSize: "1.2rem",
		margin: "1.5rem 0",
	},
	"& label": {
		display: "flex",
		alignItems: "center",
	},
	"& svg": {
		marginLeft: "0.5rem",
	},
});

const StyledButton = styled(Button)({
	backgroundColor: "#00BFFF", // Vivid blue
	color: "#FFF", // White text
	fontWeight: 800,
	"&:hover": {
		backgroundColor: "#009ACD", // Slightly darker blue
	},
});

const CancelButton = styled(Button)({
	color: "#FFF",
	borderColor: "#00BFFF",
	"&:hover": {
		borderColor: "#009ACD",
	},
});

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
		<StyledDialog open={open} onClose={() => setOpen(false)}>
			<StyledDialogTitle>
				<div>Your Privacy, Our Priority</div>
				<Tooltip title="Learn more about our privacy policy">
					<InfoIcon />
				</Tooltip>
			</StyledDialogTitle>
			<StyledDialogContent>
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
			</StyledDialogContent>

			<DialogActions>
				<StyledButton
					sx={{ p: "10px 15px" }}
					onClick={handleSubmit}
					startIcon={<CheckCircleIcon />}
				>
					Accept & Continue
				</StyledButton>
				<CancelButton
					sx={{ p: "10px 15px" }}
					variant="outlined"
					onClick={() => setOpen(false)}
					startIcon={<CancelIcon />}
				>
					Skip
				</CancelButton>
			</DialogActions>
		</StyledDialog>
	);
};

export default CookieBanner;
