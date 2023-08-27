import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";

const CustomHidden = ({ breakpoint, children, up, down }) => {
	const theme = useTheme();

	const isXxl = useMediaQuery("(min-width:2800px)");
	const isBelowXxl = useMediaQuery("(max-width:2799.95px)");

	const isUp = useMediaQuery(theme.breakpoints.up(breakpoint));
	const isDown = useMediaQuery(theme.breakpoints.down(breakpoint));

	let hidden = false;

	if (up) {
		if (breakpoint === "xxl") {
			hidden = isXxl;
		} else {
			hidden = isUp;
		}
	}

	if (down) {
		if (breakpoint === "xxl") {
			hidden = isBelowXxl;
		} else {
			hidden = isDown;
		}
	}

	return hidden ? null : children;
};

CustomHidden.propTypes = {
	breakpoint: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]).isRequired,
	children: PropTypes.node.isRequired,
	up: PropTypes.bool,
	down: PropTypes.bool,
};

export default CustomHidden;
