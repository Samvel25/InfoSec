import Grid from "@mui/material/Grid";
import { Stack, Typography, Divider, Box } from "@mui/material";
import * as Styled from "./style";
import Map from "../../../components/Maps/index";
import { useJsApiLoader } from "@react-google-maps/api";
import CorporateEmail from "../../Input";
import { ReactComponent as FacebookLogo } from "../../../media/logo/facebookLogo.svg";
import { ReactComponent as InstagramLogo } from "../../../media/logo/instagramLogo.svg";
import { ReactComponent as TwitterLogo } from "../../../media/logo/twitterLogo.svg";
import { useMenuOpen } from "../../context/MenuOpenContext";
import CustomHidden from "../../Hidden";

const APY_KEY = process.env.REACT_APP_API_KEY;

const defaultCenter = {
	lat: 40.183333,
	lng: 44.516667,
};

const Footer = () => {
	const { ismenuopen } = useMenuOpen();
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: APY_KEY,
	});

	return (
		<Box
			sx={{
				display: ismenuopen ? "none" : "block",
				p: { xs: "0" },
			}}
		>
			<Styled.FooterContainer>
				<footer>
					<Styled.FooterLinkes
						container
						direction={"row"}
						justifyContent={{ sm: "start", md: "space-around" }}
						spacing={{ xs: 5, sm: 8, md: 0 }}
						sx={{
							pt: { md: "90px", xs: "20px" },
							borderTop: "1px solid rgba(255, 255, 255, 0.1)",
						}}
					>
						<Grid item lg={3} xs={12} sx={{ mb: "45px" }}>
							<Styled.Logo />
						</Grid>
						<Grid item lg={2} md={3} sm={6} xs={12} sx={{ mb: "40px" }}>
							<Typography variant="FooterHead" component={"p"}>
								Solutions
							</Typography>
							<ul>
								<li>
									<Typography href="#" variant="FooterLink" component={"a"}>
										Responding
									</Typography>
								</li>
								<li>
									<Typography href="#" variant="FooterLink" component={"a"}>
										Phishing and scam protection
									</Typography>
								</li>
								<li>
									<Typography href="#" variant="FooterLink" component={"a"}>
										For the financial sector
									</Typography>
								</li>
								<li>
									<Typography href="#" variant="FooterLink" component={"a"}>
										For telecommunications
									</Typography>
								</li>
								<li>
									<Typography href="#" variant="FooterLink" component={"a"}>
										For industry
									</Typography>
								</li>
							</ul>
						</Grid>
						<Grid item lg={2} md={3} sm={6} xs={12} sx={{ mb: "40px" }}>
							<Typography variant="FooterHead" component={"p"}>
								Product
							</Typography>
							<ul>
								<li>
									<Typography href="#" variant="FooterLink" component={"a"}>
										Threat Intelligence
									</Typography>
								</li>
								<li>
									<Typography href="#" variant="FooterLink" component={"a"}>
										Fraud Protection
									</Typography>
								</li>
								<li>
									<Typography href="#" variant="FooterLink" component={"a"}>
										Managed XDR
									</Typography>
								</li>
								<li>
									<Typography href="#" variant="FooterLink" component={"a"}>
										Attack Surface Management
									</Typography>
								</li>
								<li>
									<Typography href="#" variant="FooterLink" component={"a"}>
										Digital Risk Protection
									</Typography>
								</li>
								<li>
									<Typography href="#" variant="FooterLink" component={"a"}>
										Business Email Protection
									</Typography>
								</li>
							</ul>
						</Grid>
						<Grid item lg={2} md={3} sm={6} sx={{ mb: "40px" }}>
							<Typography variant="FooterHead" component={"p"}>
								Resources
							</Typography>
							<ul>
								<li>
									<Typography href="#" variant="FooterLink" component={"a"}>
										Cyber Threat Research
									</Typography>
								</li>
								<li>
									<Typography href="#" variant="FooterLink" component={"a"}>
										Certificates and licenses
									</Typography>
								</li>
								<li>
									<Typography href="#" variant="FooterLink" component={"a"}>
										Customer Reviews
									</Typography>
								</li>
								<li>
									<Typography href="#" variant="FooterLink" component={"a"}>
										Webinars
									</Typography>
								</li>
								<li>
									<Typography href="#" variant="FooterLink" component={"a"}>
										Blog
									</Typography>
								</li>
							</ul>
						</Grid>
						<Grid item lg={2} md={3} sm={6} sx={{ mb: "40px" }}>
							<Typography variant="FooterHead" component={"p"}>
								Company
							</Typography>
							<ul>
								<li>
									<Typography href="#" variant="FooterLink" component={"a"}>
										About Infosec LLC
									</Typography>
								</li>
								<li>
									<Typography href="#" variant="FooterLink" component={"a"}>
										Command
									</Typography>
								</li>
								<li>
									<Typography href="#" variant="FooterLink" component={"a"}>
										Find a partner
									</Typography>
								</li>
								<li>
									<Typography href="#" variant="FooterLink" component={"a"}>
										Become a partner
									</Typography>
								</li>
								<li>
									<Typography href="#" variant="FooterLink" component={"a"}>
										Career
									</Typography>
								</li>
								<li>
									<Typography href="#" variant="FooterLink" component={"a"}>
										Internships
									</Typography>
								</li>
								<li>
									<Typography href="#" variant="FooterLink" component={"a"}>
										Company
									</Typography>
								</li>
							</ul>
						</Grid>
					</Styled.FooterLinkes>
				</footer>
			</Styled.FooterContainer>
			<Styled.LineWrapper>
				<Styled.FooterLine />
			</Styled.LineWrapper>
			<Styled.FooterContainer>
				<footer>
					<Styled.ContactUs
						container
						direction={"row"}
						justifyContent={{
							xl: "space-around",
							md: "space-between",
							sm: "center",
							xs: "start",
						}}
					>
						<Grid
							item
							xs={12}
							md={5.5}
							xl={5}
							sm={10}
							sx={{ mt: "20px", mb: "30px" }}
						>
							<Typography
								sx={{ mb: "20px" }}
								variant="FooterHead"
								component={"p"}
							>
								Contact Us
							</Typography>
							{isLoaded ? (
								<Map center={defaultCenter}></Map>
							) : (
								<Typography variant="h1">Loading</Typography>
							)}
							<Stack direction={"row"} spacing={5} sx={{ mt: "35px" }}>
								<Box>
									<Typography sx={{ color: "#C0C1C2" }} variant="ButtonNew">
										Email
									</Typography>
									<Typography
										href="mailto:infosec@gmail.com"
										sx={{
											fontSize: { xs: "12px", xl: "16px", xxl: "20px" },
											mb: "0",
										}}
										variant="FooterHead"
										component={"a"}
									>
										infosec@gmail.com
									</Typography>
								</Box>
								<Box>
									<Typography sx={{ color: "#C0C1C2" }} variant="ButtonNew">
										Phone
									</Typography>
									<Typography
										href="tel:+374 066 666 666"
										sx={{
											fontSize: { xs: "12px", xl: "16px", xxl: "20px" },
											mb: "0",
										}}
										variant="FooterHead"
										component={"a"}
									>
										+374 066 666 666
									</Typography>
								</Box>
							</Stack>
						</Grid>
						<CustomHidden breakpoint="md" down>
							<Divider
								orientation={"vertical"}
								variant="middle"
								flexItem
								sx={{ background: "rgba(255, 255, 255, 0.1)" }}
							/>
						</CustomHidden>
						<CustomHidden breakpoint="md" up>
							<Grid item xs={12}>
								<Divider sx={{ background: "rgba(255, 255, 255, 0.1)" }} />
							</Grid>
						</CustomHidden>

						<Grid
							item
							xs={12}
							md={5.5}
							sm={10}
							xl={5}
							sx={{ mt: { md: "20px", xs: "30px" } }}
						>
							<Typography
								sx={{ mb: "20px" }}
								variant="FooterHead"
								component={"p"}
							>
								Subscribe
							</Typography>
							<Typography sx={{ mb: "60px" }}>
								Subscribe to our newsletter to be the first to know about the
								latest cyber threats and investigations
							</Typography>
							<Box
								component="form"
								sx={{
									"& > :not(style)": { m: 1, width: "100%", mb: "40px" },
								}}
								noValidate
								autoComplete="off"
							>
								<CorporateEmail />
							</Box>
							<Typography
								sx={{ mb: "16px" }}
								variant="FooterHead"
								component={"p"}
							>
								Solutions
							</Typography>
							<Styled.SocialMedia direction={"row"} spacing={3}>
								<a href="/">
									<FacebookLogo />
								</a>

								<a href="/">
									<InstagramLogo />
								</a>

								<a href="/">
									<TwitterLogo />
								</a>
							</Styled.SocialMedia>
						</Grid>
					</Styled.ContactUs>
				</footer>
			</Styled.FooterContainer>
			<Styled.LineWrapper
				sx={{
					transform: " rotateX(180deg)",
					mt: "30px",
					mb: "5px",
				}}
			>
				<Styled.FooterLine />
				<Styled.LineText>
					© Infosec LLC is one of the world's leading cybercrime and fraud
					prevention and investigation companies using high technology.
				</Styled.LineText>
			</Styled.LineWrapper>
		</Box>
	);
};

export default Footer;
