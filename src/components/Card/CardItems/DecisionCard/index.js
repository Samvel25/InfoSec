import { Box, Grid, Hidden } from "@mui/material";
import * as Styled from "./style";
import CustomHidden from "../../../Hidden";

function GoalCards() {
	return (
		<Grid
			container
			direction={"row"}
			rowSpacing={3}
			columnSpacing={3}
			justifyContent={"center"}
		>
			<Grid item xs={10} sm={5.5} md={6}>
				<Styled.RedCard>
					<abbr> </abbr>
					<Styled.Text sx={{ mb: "11px" }}>TRUSTED BY</Styled.Text>
					<Box
						alignItems={"center"}
						sx={{
							display: "flex",
							width: { xs: "280px", xl: "auto" },
							maxWidth: { xs: "auto", xl: "96%", xxl: "100%" },
						}}
					>
						<Styled.Text variant="CardRate" component={"h6"}>
							7/10
						</Styled.Text>

						<Styled.Text sx={{ ml: "10px", lineHeight: "14px" }}>
							TOP ARMENIAN BANKS
						</Styled.Text>
					</Box>
				</Styled.RedCard>
			</Grid>
			<CustomHidden breakpoint="sm" down>
				<Grid item xs={10} sm={5.5} md={6}>
					<Styled.Card backgroundtype="backgroundOne">
						<abbr> </abbr>

						<Styled.Text sx={{ mb: "11px" }}>DELIVERING </Styled.Text>
						<Box
							alignItems={"center"}
							sx={{
								display: "flex",
								width: { xs: "280px", xl: "auto" },
								maxWidth: { xs: "auto", xl: "96%", xxl: "100%" },
							}}
						>
							<Styled.Text variant="CardRate" component={"h6"}>
								100K
							</Styled.Text>

							<Styled.Text sx={{ ml: "10px", lineHeight: "14px" }}>
								ANNUAL CLIENT TESTING HOURS
							</Styled.Text>
						</Box>
					</Styled.Card>
				</Grid>
			</CustomHidden>
			<Grid item xs={10} sm={5.5} md={6}>
				<Styled.Card backgroundtype="backgroundOne">
					<abbr> </abbr>

					<Styled.Text sx={{ mb: "11px" }}>TRUSTED BY</Styled.Text>
					<Box
						alignItems={"center"}
						sx={{
							display: "flex",
							width: { xs: "280px", xl: "auto" },
							maxWidth: { xs: "auto", xl: "96%", xxl: "100%" },
						}}
					>
						<Styled.Text variant="CardRate" component={"h6"}>
							2/3
						</Styled.Text>

						<Styled.Text sx={{ ml: "10px", lineHeight: "14px" }}>
							TOP ARMENIAN BANKS
						</Styled.Text>
					</Box>
				</Styled.Card>
			</Grid>
			<Grid item xs={10} sm={5.5} md={6}>
				<Styled.RedCard>
					<abbr> </abbr>

					<Styled.Text sx={{ mb: "11px" }}>DELIVERING BY</Styled.Text>
					<Box
						alignItems={"center"}
						sx={{
							display: "flex",
							width: { xs: "280px", xl: "auto" },
							maxWidth: { xs: "auto", xl: "96%", xxl: "100%" },
						}}
					>
						<Styled.Text variant="CardRate" component={"h6"}>
							300+
						</Styled.Text>

						<Styled.Text sx={{ ml: "10px", lineHeight: "14px" }}>
							ORIGNAL RESEARCH ARTICLES
						</Styled.Text>
					</Box>
				</Styled.RedCard>
			</Grid>
			<CustomHidden breakpoint="sm" up>
				<Grid item xs={10} sm={5.5} md={6}>
					<Styled.Card backgroundtype="backgroundOne">
						<abbr> </abbr>

						<Styled.Text sx={{ mb: "11px" }}>DELIVERING </Styled.Text>
						<Box
							alignItems={"center"}
							sx={{
								display: "flex",
								width: { xs: "280px", xl: "auto" },
								maxWidth: { xs: "auto", xl: "96%", xxl: "100%" },
							}}
						>
							<Styled.Text variant="CardRate" component={"h6"}>
								100K
							</Styled.Text>

							<Styled.Text sx={{ ml: "10px", lineHeight: "14px" }}>
								ANNUAL CLIENT TESTING HOURS
							</Styled.Text>
						</Box>
					</Styled.Card>
				</Grid>
			</CustomHidden>
		</Grid>
	);
}

export default GoalCards;
