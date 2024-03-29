import React from "react";
import { Box, Typography } from "@mui/material";
import * as Styled from "./style";

function ServicesCard() {
	return (
		<Styled.Services
			container
			justifyContent={{
				sm: "center",
				md: "space-between",
				lg: "space-around",
			}}
			direction={"row"}
			alignItems="center"
		>
			<Styled.Card boxpadding="boxpadding" backgroundtype="backgroundOne">
				<Box sx={{ maxWidth: { xs: "330px", xl: "350px", xxl: "380px" } }}>
					<Typography variant="CardHead" component={"h5"}>
						Network Security
					</Typography>
					<Typography
						sx={{ mt: { xs: "8px", xl: "12px", xxl: "15px" } }}
						component={"p"}
						variant="CardDescription"
					>
						Protecting your company's network and data from unauthorized access
						and attacks, including firewalls, intrusion detection and
						prevention, and VPNs.
					</Typography>
				</Box>
				<Styled.CardSquareImg />
			</Styled.Card>
			<Styled.Card boxpadding="boxpadding" backgroundtype="backgroundOne">
				<Box sx={{ maxWidth: { xs: "330px", xl: "350px", xxl: "380px" } }}>
					<Typography variant="CardHead" component={"h5"}>
						Network Security
					</Typography>
					<Typography
						sx={{ mt: { xs: "8px", xl: "12px", xxl: "15px" } }}
						component={"p"}
						variant="CardDescription"
					>
						Protecting your company's network and data from unauthorized access
						and attacks, including firewalls, intrusion detection and
						prevention, and VPNs.
					</Typography>
				</Box>
				<Styled.CardSquareImg />
			</Styled.Card>
			<Styled.Card boxpadding="boxpadding" backgroundtype="backgroundOne">
				<Box sx={{ maxWidth: { xs: "330px", xl: "350px", xxl: "380px" } }}>
					<Typography variant="CardHead" component={"h5"}>
						Network Security
					</Typography>
					<Typography
						sx={{ mt: { xs: "8px", xl: "12px", xxl: "15px" } }}
						component={"p"}
						variant="CardDescription"
					>
						Protecting your company's network and data from unauthorized access
						and attacks, including firewalls, intrusion detection and
						prevention, and VPNs.
					</Typography>
				</Box>
				<Styled.CardSquareImg />
			</Styled.Card>
			<Styled.Card boxpadding="boxpadding" backgroundtype="backgroundOne">
				<Box sx={{ maxWidth: { xs: "330px", xl: "350px", xxl: "380px" } }}>
					<Typography variant="CardHead" component={"h5"}>
						Network Security
					</Typography>
					<Typography
						sx={{ mt: { xs: "8px", xl: "12px", xxl: "15px" } }}
						component={"p"}
						variant="CardDescription"
					>
						Protecting your company's network and data from unauthorized access
						and attacks, including firewalls, intrusion detection and
						prevention, and VPNs.
					</Typography>
				</Box>
				<Styled.CardSquareImg />
			</Styled.Card>
			<Styled.Card boxpadding="boxpadding" backgroundtype="backgroundOne">
				<Box sx={{ maxWidth: { xs: "330px", xl: "350px", xxl: "380px" } }}>
					<Typography variant="CardHead" component={"h5"}>
						Network Security
					</Typography>
					<Typography
						sx={{ mt: { xs: "8px", xl: "12px", xxl: "15px" } }}
						component={"p"}
						variant="CardDescription"
					>
						Protecting your company's network and data from unauthorized access
						and attacks, including firewalls, intrusion detection and
						prevention, and VPNs.
					</Typography>
				</Box>
				<Styled.CardSquareImg />
			</Styled.Card>
			<Styled.Card boxpadding="boxpadding" backgroundtype="backgroundOne">
				<Box sx={{ maxWidth: { xs: "330px", xl: "350px", xxl: "380px" } }}>
					<Typography variant="CardHead" component={"h5"}>
						Network Security
					</Typography>
					<Typography
						sx={{ mt: { xs: "8px", xl: "12px", xxl: "15px" } }}
						component={"p"}
						variant="CardDescription"
					>
						Protecting your company's network and data from unauthorized access
						and attacks, including firewalls, intrusion detection and
						prevention, and VPNs.
					</Typography>
				</Box>
				<Styled.CardSquareImg />
			</Styled.Card>
		</Styled.Services>
	);
}

export default ServicesCard;
