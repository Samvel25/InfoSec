import { Box, Grid } from "@mui/material";
import * as Styled from "./style";

function GoalCards() {
	return (
		<Grid container direction={"row"} rowSpacing={3} columnSpacing={3}>
			<Grid item xs={6}>
				<Styled.RedCard>
					<sh></sh>
					<Styled.Text sx={{ mb: "11px" }}>TRUSTED BY</Styled.Text>
					<Box sx={{ display: "flex", width: "max-content" }}>
						<Styled.Text variant="CardRate" component={"h6"}>
							7/10
						</Styled.Text>

						<Styled.Text
							sx={{ ml: "10px", maxWidth: "140px", lineHeight: "14px" }}
						>
							TOP ARMENIAN BANKS
						</Styled.Text>
					</Box>
				</Styled.RedCard>
			</Grid>
			<Grid item xs={6}>
				<Styled.Card backgroundtype="backgroundOne">
					<sh></sh>

					<Styled.Text sx={{ mb: "11px" }}>TRUSTED BY</Styled.Text>
					<Box sx={{ display: "flex", width: "max-content" }}>
						<Styled.Text variant="CardRate" component={"h6"}>
							7/10
						</Styled.Text>

						<Styled.Text
							sx={{ ml: "10px", maxWidth: "140px", lineHeight: "14px" }}
						>
							TOP ARMENIAN BANKS
						</Styled.Text>
					</Box>
				</Styled.Card>
			</Grid>
			<Grid item xs={6}>
				<Styled.Card backgroundtype="backgroundOne">
					<sh></sh>

					<Styled.Text sx={{ mb: "11px" }}>TRUSTED BY</Styled.Text>
					<Box sx={{ display: "flex", width: "max-content" }}>
						<Styled.Text variant="CardRate" component={"h6"}>
							7/10
						</Styled.Text>

						<Styled.Text
							sx={{ ml: "10px", maxWidth: "140px", lineHeight: "14px" }}
						>
							TOP ARMENIAN BANKS
						</Styled.Text>
					</Box>
				</Styled.Card>
			</Grid>
			<Grid item xs={6}>
				<Styled.RedCard>
					<sh></sh>

					<Styled.Text sx={{ mb: "11px" }}>TRUSTED BY</Styled.Text>
					<Box sx={{ display: "flex", width: "max-content" }}>
						<Styled.Text variant="CardRate" component={"h6"}>
							7/10
						</Styled.Text>

						<Styled.Text
							sx={{ ml: "10px", maxWidth: "140px", lineHeight: "14px" }}
						>
							TOP ARMENIAN BANKS
						</Styled.Text>
					</Box>
				</Styled.RedCard>
			</Grid>
		</Grid>
	);
}

export default GoalCards;
