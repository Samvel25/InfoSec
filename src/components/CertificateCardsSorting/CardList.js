import React from "react";
import SortingButton from "./SortingButton";
import CardItem from "./Card/index";
import { Box, Grid, Hidden } from "@mui/material";
import CertificatesCarousel from "../Carousel/Certificates";
import allCards from "./Card/sliderData";

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
			<SortingButton onClick={setActiveSort} activeSort={activeSort} />
			<Hidden smUp>
				<CertificatesCarousel cards={cards} />
			</Hidden>
			<Hidden smDown>
				<Grid
					sx={{ mt: { md: "100px", sm: "80px", xs: "50px" } }}
					container
					justifyContent={"center"}
					spacing={2}
				>
					{cards.map((card, index) => (
						<Grid item xs={6} md={4} lg={3} key={index}>
							<CardItem
								title={card.title}
								content={card.content}
								certificateimg={card.certificateimg}
							/>
						</Grid>
					))}
				</Grid>
			</Hidden>
		</Box>
	);
};

export default CardList;
