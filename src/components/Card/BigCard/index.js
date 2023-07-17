// import { Box, styled, keyframes } from "@mui/material";
import Led from "../../Other/Led";
import * as Styled from "./style";

function BigCardWrapper(props) {
	const { backgroundtype } = props;

	return (
		<Styled.BigCard backgroundtype={backgroundtype} {...props}>
			<Led />
			{/* {props.svg} */}
			{props.img}
		</Styled.BigCard>
	);
}

export default BigCardWrapper;
