// import { styled } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";
import { ReactComponent as DiamondAnimation } from "../../media/diamondAnimation.svg";
import Grid from "@mui/material/Grid";
import ProgreeBar from "./MainStyles/progressBar";
import GradientButton from "../buttons/button";
import { grayButton } from "../buttons/buttonConfig";
import * as Styled from "./MainStyles/style";

function WhyChooseUs() {
	const classes = grayButton();
	return (
		<Styled.WhyChooseUs
			container
			spacing={2}
			justifyContent={"space-around"}
			direction={"row"}
			alignItems="center"
		>
			<Grid item xs={5}>
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
				<Stack spacing={3} direction={"row"} sx={{ mt: "20px" }}>
					<GradientButton>
						<Typography>Pick a product</Typography>
					</GradientButton>
					<GradientButton className={classes.button}>
						<Typography>To get a consultation</Typography>
					</GradientButton>
				</Stack>
			</Grid>
			<Grid>
				<DiamondAnimation width="508px" height="528px" />
			</Grid>
		</Styled.WhyChooseUs>
	);
}

export default WhyChooseUs;
