import * as Styled from "./style";
import ProgreeBar from "../../components/ProgressBar";
import * as GlobalStyled from "../style";
import Grid from "@mui/material/Grid";
import { Box, Stack, Typography } from "@mui/material";
import ClientsImg from "../../media/png/clientsImg.png";
import ClientsSlide from "../../components/Carousel/Clients";
import GradientButton from "../../components/buttons/MainButton";
import PageTransition from "../../components/PageTransition";
import GoalCards from "../../components/Card/CardItems/DecisionCard";
import ClientsReview from "../../components/Carousel/ClientsReview";
import { useMenuOpen } from "../../components/context/MenuOpenContext";
import CustomHidden from "../../components/Hidden";

const Clients = () => {
	const { ismenuopen } = useMenuOpen();

	return (
		<PageTransition>
			{/* ///1 section/////// */}
			<Styled.FirstSection
				ismenuopen={ismenuopen}
				sx={{
					p: { md: "40px 0 150px", sm: "70px 0 120px", xs: "100px 0 100px" },
				}}
				container
				justifyContent={{ xl: "center", md: "space-evenly", xs: "center" }}
				direction={"row"}
				alignItems="center"
			>
				<Grid
					item
					xs={12}
					sm={9}
					md={5}
					lg={4.5}
					xl={3.5}
					xxl={3}
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
				<abbr />

				<Grid
					item
					xs={12}
					sm={8}
					md={5}
					xl={4.5}
					xxl={4}
					sx={{
						pt: { md: "0", sm: "60px", xs: "50px" },
						ml: { xs: "0", xl: "5vw" },
					}}
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
			</Styled.FirstSection>

			<Box sx={{ display: ismenuopen ? "none" : "block" }}>
				{/* ///2 section/////// */}
				<GlobalStyled.OurClienats sx={{ border: "none" }}>
					<Box>
						<Typography
							textAlign={"center"}
							variant="GradientLight"
							component="h1"
							sx={{ mb: { xs: "70px", xl: "80px", xxl: "85px" } }}
						>
							Trusted by thousands of companies
						</Typography>
						<ClientsSlide />
					</Box>
				</GlobalStyled.OurClienats>

				{/* ///3 section/////// */}

				<Styled.OurGoalsSection
					sx={{ p: { md: "330px 0 300px", xs: "120px 0" } }}
					container
					justifyContent={{ xl: "center", md: "space-evenly", xs: "center" }}
					direction={"row"}
				>
					<Grid
						item
						xs={12}
						sm={9}
						md={5}
						lg={4.5}
						xl={3.5}
						xxl={3}
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
						<CustomHidden breakpoint="md" down>
							<Stack spacing={3} direction={"row"} sx={{ mt: "20px" }}>
								<GradientButton backgroundtype="backgroundOne">
									<Typography>To get a consultation</Typography>
								</GradientButton>
							</Stack>
						</CustomHidden>
					</Grid>

					<Grid
						item
						xs={12}
						lg={6}
						md={6.5}
						xl={4.5}
						xxl={4}
						sx={{ pt: { xs: "50px", md: "0" }, ml: { xs: "0", xl: "5vw" } }}
					>
						<GoalCards textAlign={{ xs: "center", sm: "start" }} />
					</Grid>
				</Styled.OurGoalsSection>

				{/* ///4 section/////// */}

				<Styled.Review sx={{ pb: { xs: "150px", md: "250px" } }}>
					<Typography
						textAlign={"center"}
						variant="GradientLight"
						component="h1"
						sx={{ mb: { xs: "40px", xl: "55px", xxl: "65" } }}
					>
						review from our client
					</Typography>
					<ClientsReview />
				</Styled.Review>
			</Box>
		</PageTransition>
	);
};

export default Clients;
