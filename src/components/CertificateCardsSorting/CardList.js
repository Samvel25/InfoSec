import React from "react";
import SortingButton from "./SortingButton";
import CardItem from "./Card/index";
import { Box, Grid, Hidden } from "@mui/material";
import CertificatesCarousel from "../Carousel/Certificates";
import allCards from "./Card/sliderData";
import CustomHidden from "../Hidden";

const SortTypes = {
	ALL: "all",
	ID1: "FINANCE",
	ID2: "INSURANCE",
};

const CardList = ({ activeSort, setActiveSort }) => {
	const handleSortClick = (sortType) => {
		setActiveSort(sortType);
		switch (sortType) {
			case SortTypes.ID1:
				return allCards.filter((card) => card.id === 1);
			case SortTypes.ID2:
				return allCards.filter((card) => card.id === 2);
			case SortTypes.ALL:
			default:
				return allCards;
		}
	};

	const cards = handleSortClick(activeSort);

	return (
		<Box>
			<SortingButton
				sx={{ mb: { xs: "100px", sm: "0" } }}
				onClick={setActiveSort}
				activeSort={activeSort}
			/>
			<CustomHidden breakpoint="sm" up>
				<CertificatesCarousel cards={cards} />
			</CustomHidden>
			<CustomHidden breakpoint="sm" down>
				<Grid
					sx={{
						mt: { md: "100px", sm: "80px", xs: "50px" },
						p: { sm: "0 15px", xs: "0" },
					}}
					container
					justifyContent={{ xs: "center", sm: "space-around" }}
					spacing={5}
				>
					{cards.map((card, index) => (
						<Grid
							item
							xs={6}
							md={4}
							lg={4}
							xl={3}
							xxl={2}
							// direction={"row"}
							display={"flex"}
							justifyContent={"center"}
							key={index}
						>
							<CardItem
								title={card.title}
								content={card.content}
								certificateimg={card.certificateimg}
							/>
						</Grid>
					))}
				</Grid>
			</CustomHidden>
		</Box>
	);
};

export default CardList;
