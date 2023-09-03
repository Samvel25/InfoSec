import React from "react";
import {
	Container,
	FormControlLabel,
	Checkbox,
	Grid,
	Typography,
	Divider,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as Styled from "./style";
import instance from "../../api/instance";

const Form = () => {
	const validationSchema = yup.object().shape({
		name: yup.string().required("Name is required"),
		surname: yup.string().required("Surname is required"),
		email: yup
			.string()
			.required("Email is required")
			.email("Invalid email format"),
		phoneNumber: yup
			.string()
			.required("Phone number is required")
			.matches(/^[0-9+]*$/, "Please enter only numbers"),
		description: yup.string().required("Description is required"),
		acceptConditions: yup
			.bool()
			.oneOf([true], "You must accept the conditions to proceed."),
	});

	const {
		handleSubmit,
		control,
		reset,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
		defaultValues: {
			name: "",
			surname: "",
			email: "",
			phoneNumber: "",
			description: "",
			acceptConditions: false,
		},
	});

	const handleClick = () => {
		const lat = 37.7749;
		const lng = -122.4194;
		window.open(
			`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
		);
	};

	const onSubmit = (data) => {
		instance
			.post("saveFormData", data)
			.then((res) => {
				console.log({ res });
				// Reset the form after successful form submission.
				reset({
					name: "",
					surname: "",
					email: "",
					phoneNumber: "",
					description: "",
					acceptConditions: false,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Container>
			<Styled.StyledForm
				onSubmit={handleSubmit(onSubmit)}
				sx={{
					p: { md: "35px", sm: "25px 15px", xs: "20px 10px" },
					background: "rgba(0, 0, 0, 0.64)",
					backdropFilter: "blur(19.0734px)",
				}}
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

					{[
						{ label: "Name", name: "name" },
						{ label: "Surname", name: "surname" },
						{ label: "Email", name: "email" },
						{ label: "Phone Number", name: "phoneNumber" },
						{
							label: "Description of the incidents",
							name: "description",
							multiline: true,
							rows: 4,
						},
					].map((inputProps) => (
						<Grid
							item
							xs={12}
							sm={inputProps.name === "description" ? 12 : 6}
							key={inputProps.name}
						>
							<Controller
								name={inputProps.name}
								control={control}
								render={({ field }) => (
									<Styled.Input
										{...field}
										{...inputProps}
										error={Boolean(errors[inputProps.name])}
										helperText={errors[inputProps.name]?.message || ""}
										variant="outlined"
									/>
								)}
							/>
						</Grid>
					))}

					<Grid item xs={12}>
						<FormControlLabel
							control={
								<Controller
									name="acceptConditions"
									control={control}
									render={({ field }) => (
										<Checkbox
											{...field}
											sx={{
												color: "#D42530",
												"&.Mui-checked, &.MuiCheckbox-indeterminate": {
													color: "#FFF",
												},
											}}
										/>
									)}
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
						/>
						{errors.acceptConditions && (
							<div style={{ color: "red" }}>
								{errors.acceptConditions.message}
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
