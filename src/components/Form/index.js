import React, { useState } from "react";
import {
	Container,
	FormControlLabel,
	Checkbox,
	Grid,
	Typography,
	Divider,
} from "@mui/material";
import * as Styled from "./style";

const Form = () => {
	const [formData, setFormData] = useState({
		name: "",
		surname: "",
		email: "",
		phoneNumber: "",
		description: "",
		acceptConditions: false,
	});

	const [formErrors, setFormErrors] = useState({
		name: false,
		surname: false,
		email: false,
		phoneNumber: false,
		description: false,
		acceptConditions: false,
	});

	const handleChange = (event) => {
		const { name, value, checked } = event.target;

		// Validate phone number input
		if (name === "phoneNumber") {
			const numericValue = value.replace(/[^0-9+]/g, ""); // Remove non-numeric characters

			if (value !== numericValue) {
				setFormErrors((prevErrors) => ({
					...prevErrors,
					[name]: "Please enter only numbers",
				}));
			} else {
				setFormErrors((prevErrors) => ({
					...prevErrors,
					[name]: numericValue === "" ? "Phone number is required" : false,
				}));
				setFormData((prevData) => ({
					...prevData,
					[name]: numericValue,
				}));
			}
		} else {
			setFormData((prevData) => ({
				...prevData,
				[name]: name === "acceptConditions" ? checked : value,
			}));
			setFormErrors((prevErrors) => ({
				...prevErrors,
				[name]:
					value === ""
						? `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
						: false,
			}));
		}
	};

	const handleClick = () => {
		const lat = 37.7749; // Замените на нужное вам значение широты
		const lng = -122.4194; // Замените на нужное вам значение долготы
		window.open(
			`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
		);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		// Check for empty inputs and condition acceptance
		const newFormErrors = {
			name: formData.name === "",
			surname: formData.surname === "",
			email: formData.email === "",
			phoneNumber: formData.phoneNumber === "",
			description: formData.description === "",
			acceptConditions: !formData.acceptConditions,
		};

		if (Object.values(newFormErrors).some((error) => error === true)) {
			setFormErrors(newFormErrors);
			return;
		}

		// Handle form submission logic here
		console.log(formData);

		// Reset form data and errors
		setFormData({
			name: "",
			surname: "",
			email: "",
			phoneNumber: "",
			description: "",
			acceptConditions: false,
		});
		setFormErrors({
			name: false,
			surname: false,
			email: false,
			phoneNumber: false,
			description: false,
			acceptConditions: false,
		});
	};

	return (
		<Container maxWidth="md">
			<Styled.StyledForm
				sx={{
					p: { md: "35px", sm: "25px 15px", xs: "20px 10px" },
					background: "rgba(0, 0, 0, 0.64)",
					backdropFilter: "blur(19.0734px)",
				}}
				onSubmit={handleSubmit}
			>
				<Grid container direction={"row"} spacing={{ sm: 2, xs: 1 }}>
					<Grid textAlign={"center"} item xs={12}>
						<Typography
							variant="CardHead"
							component={"h5"}
							sx={{ textTransform: "uppercase" }}
						>
							Report an incident
						</Typography>
						<Divider
							sx={{ background: "rgba(255, 255, 255, 0.1)", mt: "35px" }}
						/>
					</Grid>
					<Grid item xs={12}>
						<Typography
							onClick={handleClick}
							component={"a"}
							sx={{ color: "#FFF", mt: "20px", cursor: "pointer" }}
						>
							24/7 Information Security Incident Response Center
						</Typography>
						<Typography
							href="tel:+374 066 666 666"
							sx={{ mt: "9px", display: "block", textDecoration: "none" }}
							component={"a"}
						>
							Phone: +374 066 666 666
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Styled.Input
							required
							label="Name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							error={formErrors.name}
							helperText={formErrors.name ? "Name is required" : ""}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Styled.Input
							required
							label="Surname"
							name="surname"
							value={formData.surname}
							onChange={handleChange}
							error={formErrors.surname}
							helperText={formErrors.surname ? "Surname is required" : ""}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Styled.Input
							required
							label="Email"
							name="email"
							type="email"
							value={formData.email}
							onChange={handleChange}
							error={formErrors.email}
							helperText={formErrors.email ? "Email is required" : ""}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Styled.Input
							required
							label="Phone Number"
							name="phoneNumber"
							type="tel"
							value={formData.phoneNumber}
							onChange={handleChange}
							error={!!formErrors.phoneNumber}
							helperText={
								formErrors.phoneNumber ||
								(formErrors.phoneNumber === false
									? ""
									: "Phone number is required")
							}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<Styled.Input
							required
							label="Description of the incidents"
							name="description"
							multiline
							rows={4}
							value={formData.description}
							onChange={handleChange}
							error={formErrors.description}
							helperText={
								formErrors.description ? "Description is required" : ""
							}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControlLabel
							control={
								<Checkbox
									sx={{
										color: "#D42530",
										"&.Mui-checked, &.MuiCheckbox-indeterminate": {
											color: "#FFF",
										},
									}}
									checked={formData.acceptConditions}
									onChange={handleChange}
									name="acceptConditions"
									color="primary"
								/>
							}
							label={
								<Typography
									sx={{
										color: "#C0C1C2",
										cursor: "default",
										textTransform: "none",
									}}
									variant="ButtonNew"
									component={"p"}
								>
									I consent to the processing of my personal data and confirm
									that I have read and agree to the terms of the{" "}
									<Typography
										sx={{
											color: "#D42530",
											cursor: "pointer",
											textTransform: "none",
										}}
										variant="ButtonNew"
										component={"a"}
										href="#"
									>
										Privacy Policy
									</Typography>{" "}
									and{" "}
									<Typography
										sx={{
											color: "#D42530",
											cursor: "pointer",
											textTransform: "none",
										}}
										variant="ButtonNew"
										component={"a"}
										href="#"
									>
										User Agreement
									</Typography>
								</Typography>
							}
							error={formErrors.acceptConditions}
						/>
						{formErrors.acceptConditions && (
							<div style={{ color: "red" }}>
								You must accept the conditions to proceed.
							</div>
						)}
					</Grid>
					<Grid item xs={12} display={"flex"} justifyContent={"end"}>
						<Styled.FormGradientButton
							type="submit"
							sx={{ background: "transparent" }}
						>
							<Typography variant="ButtonNew">send</Typography>
						</Styled.FormGradientButton>
					</Grid>
				</Grid>
			</Styled.StyledForm>
		</Container>
	);
};

export default Form;
