import * as Styled from "./style";
import ProgreeBar from "../../components/ProgressBar";
import * as GlobalStyled from "../style";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import ClientsImg from "../../media/clientsImg.png";
import ClientsSlide from "../../components/Carousel/Clients";

const Clients = () => {
	return (
		<Box>
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
					<Typography sx={{ mb: "12px" }}>our clients</Typography>
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
		</Box>
	);
};

export default Clients;
