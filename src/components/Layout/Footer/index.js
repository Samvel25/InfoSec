import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Logo } from "./style";

const Footer = () => {
	return (
		<footer>
			<Grid
				container
				direction={"row"}
				justifyContent={{ sm: "start", md: "space-between" }}
				spacing={{ xs: 5, sm: 8, md: 0 }}
				sx={{ pt: "90px", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
			>
				<Grid item lg={3} xs={12} sx={{ mb: "45px" }}>
					<Logo />
				</Grid>
				<Grid item lg={2} md={3} sm={6} xs={12} sx={{ mb: "40px" }}>
					<Typography variant="FooterHead" component={"p"}>
						Solutions
					</Typography>
					<Typography href="#" variant="FooterLink" component={"a"}>
						Responding
					</Typography>
					<Typography href="#" variant="FooterLink" component={"a"}>
						Phishing and scam protection
					</Typography>
					<Typography href="#" variant="FooterLink" component={"a"}>
						For the financial sector
					</Typography>
					<Typography href="#" variant="FooterLink" component={"a"}>
						For telecommunications
					</Typography>
					<Typography href="#" variant="FooterLink" component={"a"}>
						For industry
					</Typography>
				</Grid>
				<Grid item lg={2} md={3} sm={6} xs={12} sx={{ mb: "40px" }}>
					<Typography variant="FooterHead" component={"p"}>
						Product
					</Typography>
					<Typography href="#" variant="FooterLink" component={"a"}>
						Threat Intelligence
					</Typography>
					<Typography href="#" variant="FooterLink" component={"a"}>
						Fraud Protection
					</Typography>
					<Typography href="#" variant="FooterLink" component={"a"}>
						Managed XDR
					</Typography>
					<Typography href="#" variant="FooterLink" component={"a"}>
						Attack Surface Management
					</Typography>
					<Typography href="#" variant="FooterLink" component={"a"}>
						Digital Risk Protection
					</Typography>
					<Typography href="#" variant="FooterLink" component={"a"}>
						Business Email Protection
					</Typography>
				</Grid>
				<Grid item lg={2} md={3} sm={6} sx={{ mb: "40px" }}>
					<Typography variant="FooterHead" component={"p"}>
						Resources
					</Typography>
					<Typography href="#" variant="FooterLink" component={"a"}>
						Cyber Threat Research
					</Typography>
					<Typography href="#" variant="FooterLink" component={"a"}>
						Certificates and licenses
					</Typography>
					<Typography href="#" variant="FooterLink" component={"a"}>
						Customer Reviews
					</Typography>
					<Typography href="#" variant="FooterLink" component={"a"}>
						Webinars
					</Typography>
					<Typography href="#" variant="FooterLink" component={"a"}>
						Blog
					</Typography>
				</Grid>
				<Grid item lg={2} md={3} sm={6} sx={{ mb: "40px" }}>
					<Typography variant="FooterHead" component={"p"}>
						Company
					</Typography>
					<Typography href="#" variant="FooterLink" component={"a"}>
						About Infosec LLC
					</Typography>
					<Typography href="#" variant="FooterLink" component={"a"}>
						Command
					</Typography>
					<Typography href="#" variant="FooterLink" component={"a"}>
						Find a partner
					</Typography>
					<Typography href="#" variant="FooterLink" component={"a"}>
						Become a partner
					</Typography>
					<Typography href="#" variant="FooterLink" component={"a"}>
						Career
					</Typography>
					<Typography href="#" variant="FooterLink" component={"a"}>
						Internships
					</Typography>
					<Typography href="#" variant="FooterLink" component={"a"}>
						Company
					</Typography>
				</Grid>
			</Grid>
		</footer>
	);
};

export default Footer;
