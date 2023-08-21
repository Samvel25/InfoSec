import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ProgreeBar from "../../components/ProgressBar";
import * as Styled from "./style";
import * as GlobalStyled from "../style";
import AchivmentsCarousel from "../../components/Carousel/Achivments/index";
// import GlobeImg from "../../media/png/globe.png";
import { ReactComponent as GlobeImg } from "../../media/svg/globe.svg";

import OurLifeCarousel from "../../components/Carousel/OurLife";
import PageTransition from "../../components/PageTransition";
import { useMenuOpen } from "../../components/context/MenuOpenContext";

const About = () => {
	const { ismenuopen } = useMenuOpen();
	return (
		<PageTransition>
			{/* ///1 section/////// */}
			<Styled.FirstSection
				ismenuopen={ismenuopen}
				sx={{ p: { md: "70px 0 30px", xs: "100px 0 50px" } }}
				container
				justifyContent={"end"}
				direction={"row"}
				alignItems="center"
			>
				<Grid
					item
					display={"flex"}
					alignItems={"center"}
					justifyContent={"center"}
					xs={12}
					sm={12}
					md={5.5}
					xl={6}
					xxl={6.5}
					textAlign={"center"}
				>
					<Grid
						item
						xs={12}
						sm={10}
						md={11}
						xl={9}
						xxl={8}
						textAlign={{ sm: "center", md: "start" }}
					>
						<Typography variant="h1">
							Reliable business protection against cyber threats
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
					</Grid>
				</Grid>
				<abbr />

				<Grid item xxl={5.5} xl={6} md={6.5} xs={12} sm={8}>
					<Styled.Globe>
						<GlobeImg width={"100%"} height={"100%"} />
					</Styled.Globe>
				</Grid>
			</Styled.FirstSection>

			<Box sx={{ display: ismenuopen ? "none" : "block" }}>
				{/* ///2 section/////// */}

				<Styled.FightAgainstCybercrime
					container
					justifyContent={"center"}
					direction={"row"}
				>
					<GlobalStyled.HeadText>
						<Typography variant="Head"> OUR</Typography>
						<Typography variant="GradientHead"> CLIENTS</Typography>
					</GlobalStyled.HeadText>
					<Grid item md={7} textAlign={"center"}>
						<Typography
							variant="GradientLight"
							component="h1"
							sx={{ mb: "20px" }}
						>
							Fight against cybercrime
						</Typography>
						<Typography sx={{ mb: "20px" }}>
							We fight cybercriminals with innovative solutions and in-depth
							research to make this world a safer place. We prevent potential
							attacks and respond to real incidents to create a favorable
							environment for our customers and help their business grow.
						</Typography>
					</Grid>
				</Styled.FightAgainstCybercrime>

				{/* ///3 section/////// */}

				<GlobalStyled.Achievements
					sx={{
						borderTop: "none",
						p: { md: "60px 0 130px", sm: "60px 0 85px", xs: "60px 0 0px" },
					}}
				>
					<GlobalStyled.Description>
						<GlobalStyled.DescriptionText>
							<Typography
								variant="GradientLight"
								component="h1"
								sx={{ mb: "20px" }}
							>
								Company in numbers
							</Typography>
							<Typography>
								Our cybersecurity expertise, years of experience and commitment
								to innovation speak louder than any number, and we invite you to
								see for yourself.
							</Typography>
						</GlobalStyled.DescriptionText>
					</GlobalStyled.Description>
					<Box alignItems={"center"} sx={{ mt: { sm: "150px", xs: "110px" } }}>
						<AchivmentsCarousel />
					</Box>
				</GlobalStyled.Achievements>

				{/* ///4 section/////// */}
				<Box sx={{ p: "100px 0" }}>
					<GlobalStyled.Description sx={{ "&: before": { content: "none" } }}>
						<GlobalStyled.DescriptionText>
							<Typography
								variant="GradientLight"
								component="h1"
								sx={{ mb: "20px" }}
							>
								Our life
							</Typography>
							<Typography>
								Our cybersecurity expertise, years of experience and commitment
								to innovation speak louder than any number, and we invite you to
								see for yourself.
							</Typography>
						</GlobalStyled.DescriptionText>
					</GlobalStyled.Description>
					<Box alignItems={"center"} sx={{ my: "70px" }}>
						<OurLifeCarousel />
					</Box>
				</Box>
			</Box>
		</PageTransition>
	);
};

export default About;
