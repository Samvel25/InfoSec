import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ProgreeBar from "../../components/ProgressBar";
import * as Styled from "./style";
import ServicesCard from "../../components/Card/Services";
import * as GlobalStyled from "../style";
import IncidebtsImg from "../../media/png/incidebts.png";
import Experts from "../../components/Carousel/Experts";
import GradientButton from "../../components/Buttons/MainButton";
import Form from "../../components/Form";
import PageTransition from "../../components/PageTransition";
import { useMenuOpen } from "../../components/context/MenuOpenContext";
import { useTranslation } from "react-i18next";

const Services = () => {
	const { t } = useTranslation();
	const { ismenuopen } = useMenuOpen();

	return (
		<PageTransition>
			{/* ///1 section/////// */}
			<Styled.FirstSection
				ismenuopen={ismenuopen}
				sx={{
					p: { md: "130px 0 230px", sm: "70px 0 130px", xs: "100px 0 100px" },
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
						{t("about_services")}
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
				<abbr />

				<Grid
					item
					xxl={4}
					md={4.5}
					xs={12}
					sm={8}
					sx={{ ml: { xs: "0", xl: "5vw" } }}
				>
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

			<Box sx={{ display: ismenuopen ? "none" : "block" }}>
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
							component="h2"
							sx={{
								mb: "20px",
								width: { xs: "100%", md: "80%", xl: "70%" },
								m: "0 auto",
							}}
						>
							If your company is under attack, it is important to contact
							incident response experts as soon as possible.
						</Typography>
					</GlobalStyled.Description>
					<Box sx={{ mt: { sm: "200px", xs: "110px" } }} alignItems={"center"}>
						<Experts sx={{ pb: "70px" }} />
						<GradientButton sx={{ m: "0 auto" }}>
							<Typography>Report an Incident</Typography>
						</GradientButton>
					</Box>
				</GlobalStyled.Achievements>

				{/* ///3 section/////// */}
				<GlobalStyled.ServicesContainer>
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
							sx={{
								pt: { md: "80px", xs: "35px" },
								m: { md: "80px 0 300px", xs: "60px 0 150px" },
							}}
						>
							<GlobalStyled.HeadText>
								<Typography variant="Head">OUR SERVICES</Typography>
							</GlobalStyled.HeadText>
							<ServicesCard />
						</GlobalStyled.Services>
						{/* <Container maxWidth="xxl"> */}
					</Box>
				</GlobalStyled.ServicesContainer>
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
