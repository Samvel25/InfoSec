import React from "react";
// import { styled } from "@mui/material/styles";
import * as Styled from "./style";
// import { Box } from "@mui/material";

function ProgreeBar() {
	const myArray = Array.from({ length: 72 }, () => "myLine");

	return (
		<Styled.MyBox>
			<Styled.Lazer />
			{myArray.map((element, index) => (
				<React.Fragment key={index}>
					<Styled.MyLine />
				</React.Fragment>
			))}
		</Styled.MyBox>
	);
}

export default ProgreeBar;
