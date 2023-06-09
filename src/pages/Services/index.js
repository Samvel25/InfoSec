import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ProgreeBar from "../../components/ProgressBar";
import * as Styled from "./style";

import * as GlobalStyled from "../style";
import IncidebtsImg from "../../media/png/incidebts.png";
import Experts from "../../components/Carousel/Experts";
import GradientButton from "../../components/Buttons/MainButton";
import { ReactComponent as CardImmage } from "../../media/svg/cardLogo.svg";
import Form from "../../components/Form";
import PageTransition from "../../components/PageTransition";
import { useMenuOpen } from "../../components/context/MenuOpenContext";

const Services = () => {
	const { isMenuOpen } = useMenuOpen();

	return (
		<PageTransition>
			{/* ///1 section/////// */}
			<Styled.FirstSection
				isMenuOpen={isMenuOpen}
				sx={{
					p: { md: "130px 0 230px", sm: "70px 0 130px", xs: "100px 0 100px" },
				}}
				container
				justifyContent={"space-around"}
				direction={"row"}
				alignItems="center"
			>
				<sh />
				<Grid
					item
					md={5}
					xs={12}
					sm={10}
					textAlign={{ sm: "center", md: "start" }}
				>
					<Typography sx={{ mb: "12px", textTransform: "uppercase" }}>
						About the services
					</Typography>
					<Typography variant="h1">
						We eliminate incidebts of any scale and level of complecity
					</Typography>
					<ProgreeBar />
					<Grid item lg={11} md={12}>
						<Typography>
							Our team of expert Infosec professionals provides incident
							response support to customers worldwide. Through meticulous
							analysis of attacker actions, we can quickly locate even the most
							complex incidents and swiftly restore affected organizations'
							infrastructure, minimizing downtime and disruption.
						</Typography>
					</Grid>
				</Grid>
				<Grid item md={4.5} xs={12} sm={8}>
					<Box>
						<img
							width={"100%"}
							sx={{ paddingBottom: "83%" }}
							src={IncidebtsImg}
							alt="GlobeImg"
						/>
					</Box>
				</Grid>
			</Styled.FirstSection>

			<Box sx={{ display: isMenuOpen ? "none" : "block" }}>
				{/* ///2 section/////// */}

				<GlobalStyled.Achievements
					sx={{
						borderTop: "none",
						p: { md: "0px 0 250px", sm: "0px 0 200px", xs: "0px 0 150px" },
						"&: before": { bottom: { md: "170px", xs: "75px" } },
					}}
				>
					<GlobalStyled.Description
						sx={{ "&: before": { bottom: { md: "-30px", xs: "-30px" } } }}
					>
						<Typography
							variant="GradientLight"
							component="h1"
							sx={{ mb: "20px" }}
						>
							If your company is under attack, it is important to contact
							incident response experts as soon as possible.
						</Typography>
					</GlobalStyled.Description>
					<Box sx={{ mt: { sm: "200px", xs: "110px" } }} alignItems={"center"}>
						<Experts sx={{ pb: "70px" }} />
						<GradientButton sx={{ m: "0 auto" }}>
							Report an Incident
						</GradientButton>
					</Box>
				</GlobalStyled.Achievements>

				{/* ///3 section/////// */}

				<Box>
					<Typography
						textAlign={"center"}
						variant="GradientLight"
						component="h1"
						sx={{ mb: "0px" }}
					>
						Results of work on the results of the response
					</Typography>
					<GlobalStyled.Services
						container
						justifyContent={{ sm: "center", md: "space-between" }}
						direction={"row"}
						alignItems="center"
						sx={{
							pt: { md: "80px", xs: "35px" },
							m: { md: "80px 0 300px", xs: "60px 0 150px" },
						}}
					>
						<GlobalStyled.HeadText>
							<Typography variant="Head">OUR SERVICES</Typography>
						</GlobalStyled.HeadText>
						<GlobalStyled.ServicesCard
							boxpadding="boxpadding"
							backgroundtype="backgroundOne"
						>
							<Box sx={{ maxWidth: "330px" }}>
								<Typography variant="CardHead" component={"h5"}>
									Network Security
								</Typography>
								<Typography variant="CardDescription">
									Protecting your company's network and data from unauthorized
									access and attacks, including firewalls, intrusion detection
									and prevention, and VPNs.
								</Typography>
							</Box>
							<CardImmage display={"block"} width={"60px"} height={"53px"} />
						</GlobalStyled.ServicesCard>
						<GlobalStyled.ServicesCard
							boxpadding="boxpadding"
							backgroundtype="backgroundOne"
						>
							<Box sx={{ maxWidth: "330px" }}>
								<Typography variant="CardHead" component={"h5"}>
									Network Security
								</Typography>
								<Typography variant="CardDescription">
									Protecting your company's network and data from unauthorized
									access and attacks, including firewalls, intrusion detection
									and prevention, and VPNs.
								</Typography>
							</Box>
							<CardImmage display={"block"} width={"60px"} height={"53px"} />
						</GlobalStyled.ServicesCard>
						<GlobalStyled.ServicesCard
							boxpadding="boxpadding"
							backgroundtype="backgroundOne"
						>
							<Box sx={{ maxWidth: "330px" }}>
								<Typography variant="CardHead" component={"h5"}>
									Network Security
								</Typography>
								<Typography variant="CardDescription">
									Protecting your company's network and data from unauthorized
									access and attacks, including firewalls, intrusion detection
									and prevention, and VPNs.
								</Typography>
							</Box>
							<CardImmage display={"block"} width={"60px"} height={"53px"} />
						</GlobalStyled.ServicesCard>
						<GlobalStyled.ServicesCard
							boxpadding="boxpadding"
							backgroundtype="backgroundOne"
						>
							<Box sx={{ maxWidth: "330px" }}>
								<Typography variant="CardHead" component={"h5"}>
									Network Security
								</Typography>
								<Typography variant="CardDescription">
									Protecting your company's network and data from unauthorized
									access and attacks, including firewalls, intrusion detection
									and prevention, and VPNs.
								</Typography>
							</Box>
							<CardImmage display={"block"} width={"60px"} height={"53px"} />
						</GlobalStyled.ServicesCard>
						<GlobalStyled.ServicesCard
							boxpadding="boxpadding"
							backgroundtype="backgroundOne"
						>
							<Box sx={{ maxWidth: "330px" }}>
								<Typography variant="CardHead" component={"h5"}>
									Network Security
								</Typography>
								<Typography variant="CardDescription">
									Protecting your company's network and data from unauthorized
									access and attacks, including firewalls, intrusion detection
									and prevention, and VPNs.
								</Typography>
							</Box>
							<CardImmage display={"block"} width={"60px"} height={"53px"} />
						</GlobalStyled.ServicesCard>
						<GlobalStyled.ServicesCard
							boxpadding="boxpadding"
							backgroundtype="backgroundOne"
						>
							<Box sx={{ maxWidth: "330px" }}>
								<Typography variant="CardHead" component={"h5"}>
									Network Security
								</Typography>
								<Typography variant="CardDescription">
									Protecting your company's network and data from unauthorized
									access and attacks, including firewalls, intrusion detection
									and prevention, and VPNs.
								</Typography>
							</Box>
							<CardImmage display={"block"} width={"60px"} height={"53px"} />
						</GlobalStyled.ServicesCard>
					</GlobalStyled.Services>
					{/* <Container maxWidth="xxl"> */}
				</Box>
				{/* ///4 section/////// */}

				<Styled.FormBackgroundBox sx={{ mb: "100px" }}>
					<Form />
				</Styled.FormBackgroundBox>
				{/* </Container> */}
			</Box>
		</PageTransition>
	);
};

export default Services;
