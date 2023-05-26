import { Box, Hidden, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ProgreeBar from "../../components/ProgressBar";
import GradientButton from "../../components/Buttons";
import * as Styled from "./style";
import * as GlobalStyled from "../style";
import Achivments from "../../components/Carousel/Achivments/index";

import GlobeImg from "../../media/globe.png";
import OurLifeCarusel from "../../components/Carousel/OurLife";

const About = () => {
	return (
		<Box>
			{/* ///1 section/////// */}
			<Grid
				sx={{ p: "70px 0 40px" }}
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
				<Grid item md={6.5} xs={12} sm={8}>
					<Styled.Globe>
						<img
							width={"100%"}
							sx={{ paddingBottom: "86%" }}
							src={GlobeImg}
							alt="GlobeImg"
						/>
					</Styled.Globe>
				</Grid>
			</Grid>

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
					p: { lg: "120px 0 250px", xs: "100px 0 200px" },
					"&: before": { bottom: { lg: "20%", xs: "16%" } },
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
							Our cybersecurity expertise, years of experience and commitment to
							innovation speak louder than any number, and we invite you to see
							for yourself.
						</Typography>
					</GlobalStyled.DescriptionText>
				</GlobalStyled.Description>
				<Box alignItems={"center"} sx={{ mt: "135px" }}>
					<Achivments />
				</Box>
			</GlobalStyled.Achievements>

			{/* ///3 section/////// */}
			<Box sx={{ pb: "100px" }}>
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
							Our cybersecurity expertise, years of experience and commitment to
							innovation speak louder than any number, and we invite you to see
							for yourself.
						</Typography>
					</GlobalStyled.DescriptionText>
				</GlobalStyled.Description>
				<Box alignItems={"center"} sx={{ mt: "70px" }}>
					<OurLifeCarusel />
				</Box>
			</Box>
		</Box>
	);
};

export default About;
