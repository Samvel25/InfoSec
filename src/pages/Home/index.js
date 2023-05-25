// import { styled } from "@mui/material/styles";
import { Box, Hidden, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ProgreeBar from "../../components/ProgressBar";
import GradientButton from "../../components/Buttons";
import * as Styled from "./style";
import Clients from "../../components/Carousel/Clients";
import Achivments from "../../components/Carousel/Achivments/index";
import BigCardWrapper from "../../components/Card/BogCard";
import cybersecurity from "../../media/cybersecurity.png";
import cybersecurity2 from "../../media/cybersecurity2.png";
import SlidCertificatesCaruselers from "../../components/Carousel/Certificates/index";

function Home() {
	return (
		<Box>
			{/* ///1 section/////// */}
			<Grid
				sx={{ py: "100px" }}
				container
				justifyContent={"space-around"}
				direction={"row"}
				alignItems="center"
			>
				<Grid
					item
					md={5}
					xs={12}
					sm={8}
					textAlign={{ sm: "center", md: "start" }}
				>
					<Typography variant="h1">
						Proactive Cyber Security Solutions for Your Business
					</Typography>
					<ProgreeBar />
					<Grid item xs={11}>
						<Typography>
							We provide comprehensive cyber security services to protect your
							business from cyber threats. Our team of experts has years of
							experience in the field and can help you identify and mitigate
							potential risks before they cause harm.
						</Typography>
					</Grid>
					<Hidden mdDown>
						<Stack spacing={3} direction={"row"} sx={{ mt: "20px" }}>
							<GradientButton>
								<Typography>Pick a product</Typography>
							</GradientButton>
							<GradientButton backgroundtype="backgroundOne">
								<Typography>To get a consultation</Typography>
							</GradientButton>
						</Stack>
					</Hidden>
				</Grid>
				<Styled.DiamondWraper
					item
					md={5}
					xs={12}
					textAlign={{ md: "end", xs: "center" }}
				>
					<Styled.Diamond />
				</Styled.DiamondWraper>
				<Hidden mdUp>
					<Grid item sm={7} xs={12} sx={{ mt: "20px" }}>
						<Box textItems={"center"} direction={"row"} sx={{ mt: "20px" }}>
							<GradientButton sx={{ mb: "20px", width: "100%" }}>
								<Typography>Pick a product</Typography>
							</GradientButton>
							<GradientButton
								sx={{ width: "100%" }}
								backgroundtype="backgroundOne"
							>
								<Typography>To get a consultation</Typography>
							</GradientButton>
						</Box>
					</Grid>
				</Hidden>
			</Grid>

			{/* ///2 section/////// */}

			<Styled.Achievements>
				<Styled.HeadText>
					<Typography variant="Head"> OUR</Typography>
					<Typography variant="GradientHead"> CLIENTS</Typography>
				</Styled.HeadText>
				<Clients />
				<Styled.Description>
					<Styled.DescriptionText>
						<Typography
							variant="GradientLight"
							component="h1"
							sx={{ mb: "20px" }}
						>
							Secure Your Online World
						</Typography>
						<Typography>
							We provide cyber security solutions to safeguard your online world
							against viruses, malware, and cyber attacks. Our services cover
							threat prevention, data protection, and network security,
							supported by 24/7 monitoring and expert assistance. Trust us to
							keep your sensitive information and online activities secure.
						</Typography>
					</Styled.DescriptionText>
				</Styled.Description>
				<Box alignItems={"center"} sx={{ mt: "135px" }}>
					<Achivments />
				</Box>
			</Styled.Achievements>

			{/*3 /// section/////// */}

			<Styled.ExportCyberSecurity
				container
				justifyContent={"space-around"}
				direction={"row"}
				alignItems="center"
			>
				<Styled.ExportCyberSecurityDescription
					item
					md={5}
					xs={12}
					sm={8}
					textAlign={{ sm: "center", md: "start" }}
				>
					<Typography
						sx={{ margin: 0 }}
						variant="GradientStrong"
						component={"h1"}
					>
						Expert Cybersecurity
					</Typography>
					<Typography variant="h1">Solutions for Your Peace of Mind</Typography>
					<ProgreeBar />
					<Grid>
						<Typography>
							INFOSEC LLC, we understand how important it is to keep your
							business safe from cyber threats. That's why we offer a range of
							expert cybersecurity solutions designed to give you peace of mind.
							Whether you're looking for network security, endpoint protection,
							or incident response services, our team of experts has the
							knowledge and experience to help you stay one step ahead of the
							hackers. Contact us today to learn more.
						</Typography>
					</Grid>
					<Hidden mdDown>
						<Stack spacing={3} direction={"row"} sx={{ mt: "20px" }}>
							<GradientButton backgroundtype="backgroundOne">
								<Typography>Read more</Typography>
							</GradientButton>
						</Stack>
					</Hidden>
				</Styled.ExportCyberSecurityDescription>
				<Styled.BigCardImgWrapper>
					<BigCardWrapper
						img={<Styled.BigCardImg src={cybersecurity} alt="Cybersecurity" />}
					/>
				</Styled.BigCardImgWrapper>
			</Styled.ExportCyberSecurity>

			{/*4 /// section/////// */}

			<Styled.CyberSecurityServices
				container
				justifyContent={"space-around"}
				direction={{ md: "row-reverse" }}
				alignItems="center"
			>
				<Styled.CyberSecurityServicesDescription
					item
					md={5}
					xs={12}
					sm={8}
					textAlign={{ sm: "center", md: "start" }}
				>
					<Typography
						sx={{ margin: 0 }}
						variant="GradientLight"
						component={"h1"}
					>
						Cybersecurity Services
					</Typography>
					<Typography variant="h1">Tailored to Your Business Needs</Typography>
					<ProgreeBar />
					<Grid>
						<Typography>
							INFOSEC LLC, we understand how important it is to keep your
							business safe from cyber threats. That's why we offer a range of
							expert cybersecurity solutions designed to give you peace of mind.
							Whether you're looking for network security, endpoint protection,
							or incident response services, our team of experts has the
							knowledge and experience to help you stay one step ahead of the
							hackers. Contact us today to learn more.
						</Typography>
					</Grid>
					<Hidden mdDown>
						<Stack spacing={3} direction={"row"} sx={{ mt: "20px" }}>
							<GradientButton backgroundtype="backgroundOne">
								<Typography>Read more</Typography>
							</GradientButton>
						</Stack>
					</Hidden>
				</Styled.CyberSecurityServicesDescription>

				<Styled.BigCardImgWrapper>
					<BigCardWrapper
						img={<Styled.BigCardImg src={cybersecurity2} alt="Cybersecurity" />}
					/>
				</Styled.BigCardImgWrapper>
			</Styled.CyberSecurityServices>

			{/*5 /// section/////// */}

			<Styled.Services
				container
				justifyContent={{ sm: "center", md: "space-between" }}
				direction={"row"}
				alignItems="center"
			>
				<Styled.HeadText>
					<Typography variant="Head">OUR SERVICES</Typography>
				</Styled.HeadText>
				<Styled.ServicesCard
					boxpadding="boxpadding"
					backgroundtype="backgroundOne"
				>
					<Box sx={{ maxWidth: "330px" }}>
						<Typography variant="CardHead" component={"h5"}>
							Network Security
						</Typography>
						<Typography variant="CardDescription">
							Protecting your company's network and data from unauthorized
							access and attacks, including firewalls, intrusion detection and
							prevention, and VPNs.
						</Typography>
					</Box>
					<Styled.CardSquareImg />
				</Styled.ServicesCard>
				<Styled.ServicesCard
					boxpadding="boxpadding"
					backgroundtype="backgroundOne"
				>
					<Box sx={{ maxWidth: "330px" }}>
						<Typography variant="CardHead" component={"h5"}>
							Network Security
						</Typography>
						<Typography variant="CardDescription">
							Protecting your company's network and data from unauthorized
							access and attacks, including firewalls, intrusion detection and
							prevention, and VPNs.
						</Typography>
					</Box>
					<Styled.CardSquareImg />
				</Styled.ServicesCard>
				<Styled.ServicesCard
					boxpadding="boxpadding"
					backgroundtype="backgroundOne"
				>
					<Box sx={{ maxWidth: "330px" }}>
						<Typography variant="CardHead" component={"h5"}>
							Network Security
						</Typography>
						<Typography variant="CardDescription">
							Protecting your company's network and data from unauthorized
							access and attacks, including firewalls, intrusion detection and
							prevention, and VPNs.
						</Typography>
					</Box>
					<Styled.CardSquareImg />
				</Styled.ServicesCard>
				<Styled.ServicesCard
					boxpadding="boxpadding"
					backgroundtype="backgroundOne"
				>
					<Box sx={{ maxWidth: "330px" }}>
						<Typography variant="CardHead" component={"h5"}>
							Network Security
						</Typography>
						<Typography variant="CardDescription">
							Protecting your company's network and data from unauthorized
							access and attacks, including firewalls, intrusion detection and
							prevention, and VPNs.
						</Typography>
					</Box>
					<Styled.CardSquareImg />
				</Styled.ServicesCard>
				<Styled.ServicesCard
					boxpadding="boxpadding"
					backgroundtype="backgroundOne"
				>
					<Box sx={{ maxWidth: "330px" }}>
						<Typography variant="CardHead" component={"h5"}>
							Network Security
						</Typography>
						<Typography variant="CardDescription">
							Protecting your company's network and data from unauthorized
							access and attacks, including firewalls, intrusion detection and
							prevention, and VPNs.
						</Typography>
					</Box>
					<Styled.CardSquareImg />
				</Styled.ServicesCard>
				<Styled.ServicesCard
					boxpadding="boxpadding"
					backgroundtype="backgroundOne"
				>
					<Box sx={{ maxWidth: "330px" }}>
						<Typography variant="CardHead" component={"h5"}>
							Network Security
						</Typography>
						<Typography variant="CardDescription">
							Protecting your company's network and data from unauthorized
							access and attacks, including firewalls, intrusion detection and
							prevention, and VPNs.
						</Typography>
					</Box>
					<Styled.CardSquareImg />
				</Styled.ServicesCard>
			</Styled.Services>
			{/*6 /// section/////// */}
			<Styled.Certificates>
				<Styled.CertificatesDescription>
					<Styled.DescriptionText sx={{ pt: 0 }}>
						<Typography
							variant="GradientLight"
							component="h1"
							sx={{ mb: "20px" }}
						>
							Certificates and licenses
						</Typography>
						<Typography>
							We provide cyber security solutions to safeguard your online world
							against viruses, malware, and cyber attacks. Our services cover
							threat prevention, data protection, and network security,
							supported by 24/7 monitoring and expert assistance. Trust us to
							keep your sensitive information and online activities secure.
						</Typography>
					</Styled.DescriptionText>
				</Styled.CertificatesDescription>
				<Box>
					<SlidCertificatesCaruselers></SlidCertificatesCaruselers>
				</Box>
			</Styled.Certificates>
		</Box>
	);
}

export default Home;
