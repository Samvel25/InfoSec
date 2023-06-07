import * as Styled from "./style";
import ProgreeBar from "../../components/ProgressBar";
import * as GlobalStyled from "../style";
import Grid from "@mui/material/Grid";
import { Box, Hidden, Stack, Typography } from "@mui/material";
import ClientsImg from "../../media/clientsImg.png";
import ClientsSlide from "../../components/Carousel/Clients";
import GradientButton from "../../components/Buttons";
import PageTransition from "../../components/PageTransition";
import GoalCards from "../../components/CardExamples";

const Clients = () => {
	return (
		<PageTransition>
			{/* ///1 section/////// */}
			<Grid
				sx={{ p: { md: "40px 0 150px", xs: "60px 0 100px" } }}
				container
				justifyContent={"space-around"}
				direction={"row"}
				alignItems="center"
			>
				<Grid
					item
					md={5}
					xs={12}
					sm={10}
					textAlign={{ sm: "center", md: "start" }}
				>
					<Typography sx={{ mb: "12px", textTransform: "uppercase" }}>
						our clients
					</Typography>
					<Typography variant="h1">
						Trusted by thousands of companies
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
				<Grid
					item
					md={5}
					xs={12}
					sm={8}
					sx={{ pt: { md: "0", sm: "60px", xs: "50px" } }}
				>
					<Box>
						<img
							width={"100%"}
							sx={{ paddingBottom: "100%" }}
							src={ClientsImg}
							alt="GlobeImg"
						/>
					</Box>
				</Grid>
			</Grid>

			{/* ///2 section/////// */}
			<Box>
				<Typography
					textAlign={"center"}
					variant="GradientLight"
					component="h1"
					sx={{ mb: "70px" }}
				>
					Trusted by thousands of companies
				</Typography>
				<ClientsSlide />
			</Box>

			{/* ///3 section/////// */}

			<Styled.OurGoalsSection
				sx={{ p: { md: "330px 0 300px", xs: "120px 0" } }}
				container
				justifyContent={"space-around"}
				direction={"row"}
				// alignItems="center"
			>
				<Grid
					item
					md={5}
					xs={12}
					sm={10}
					textAlign={{ xs: "center", md: "start" }}
				>
					<Typography variant="h1">
						Proactive Cyber Security Solutions for Your Business
					</Typography>
					<ProgreeBar />
					<Grid item lg={11} md={12}>
						<Typography>
							We provide comprehensive cyber security services to protect your
							business from cyber threats. Our team of experts has years of
							experience in the field and can help you identify and mitigate
							potential risks before they cause harm.
						</Typography>
					</Grid>
					<Hidden mdDown>
						<Stack spacing={3} direction={"row"} sx={{ mt: "20px" }}>
							<GradientButton backgroundtype="backgroundOne">
								<Typography>To get a consultation</Typography>
							</GradientButton>
						</Stack>
					</Hidden>
				</Grid>

				<Grid item md={6.5} xs={12} sx={{ pt: { xs: "50px", md: "0" } }}>
					<GoalCards textAlign={{ xs: "center", sm: "start" }} />
				</Grid>
			</Styled.OurGoalsSection>
		</PageTransition>
	);
};

export default Clients;
