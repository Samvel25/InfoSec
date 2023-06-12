import React, { useState } from "react";
import SortingButton from "./SortingButton";
import CardItem from "./Card/index";
import { Grid } from "@mui/material";
import Certificate from "../../media/certificate.png";

const CardList = () => {
	const allCards = [
		{
			id: 1,
			certificateimg: Certificate,
			title: "Certificate CIPP 1",
			content:
				"Developing and implementing a plan to quickly respond to and mitigate cybersecurity incidents, minimizing the impact on your business.",
		},
		{
			id: 2,
			certificateimg: Certificate,
			title: "Certificate CIPP 2",
			content:
				"Developing and implementing a plan to quickly respond to and mitigate cybersecurity incidents, minimizing the impact on your business.",
		},
		{
			id: 1,
			certificateimg: Certificate,
			title: "Certificate CIPP 3",
			content:
				"Developing and implementing a plan to quickly respond to and mitigate cybersecurity incidents, minimizing the impact on your business.",
		},
		// Add more cards here
	];

	const [cards, setCards] = useState(allCards);
	const [activeSort, setActiveSort] = useState("");

	const handleSortClick = (sortType) => {
		setActiveSort(sortType);

		switch (sortType) {
			case "id1":
				setCards(allCards.filter((card) => card.id === 1));
				break;
			case "id2":
				setCards(allCards.filter((card) => card.id === 2));
				break;
			case "all":
				setCards(allCards);
				break;
			default:
				setCards(allCards); // Reset to show all cards when no sort type is provided
				break;
		}
	};

	return (
		<div>
			<SortingButton onClick={handleSortClick} activeSort={activeSort} />

			<Grid container justifyContent={"center"} spacing={2}>
				{cards.map((card) => (
					<Grid item xs={12} sm={6} md={3} key={card.title}>
						<CardItem
							key={card.title}
							title={card.title}
							content={card.content}
							certificateimg={card.certificateimg}
						/>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default CardList;
