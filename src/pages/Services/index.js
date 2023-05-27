import { Box, Hidden, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ProgreeBar from "../../components/ProgressBar";
// import GradientButton from "../../components/Buttons";
import * as Styled from "./style";
import * as GlobalStyled from "../style";
import IncidebtsImg from "../../media/incidebts.png";
import Experts from "../../components/Carousel/Experts";

const Services = () => {
	return (
		<Box>
			{/* ///1 section/////// */}
			<Grid
				sx={{ p: "130px 0 230px" }}
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
					<Typography sx={{ mb: "12px" }}>About the services</Typography>
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
			</Grid>
			<GlobalStyled.Achievements
				sx={{
					borderTop: "none",
					p: { md: "0px 0 250px", xs: "0px 0 150px" },
					"&: before": { bottom: { md: "120px", xs: "100px" } },
				}}
			>
				<GlobalStyled.Description
					sx={{ "&: before": { bottom: { md: "-20px", xs: "-30px" } } }}
				>
					<Typography
						variant="GradientLight"
						component="h1"
						sx={{ mb: "20px" }}
					>
						If your company is under attack, it is important to contact incident
						response experts as soon as possible.
					</Typography>
				</GlobalStyled.Description>
				<Box alignItems={"center"} sx={{ mt: { md: "200px", xs: "150px" } }}>
					<Experts />
				</Box>
			</GlobalStyled.Achievements>
		</Box>
	);
};

export default Services;
