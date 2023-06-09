import React from "react";

import Form from "../Form";
import Slide from "@mui/material/Slide";
import * as Styled from "./style";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function Modal({ isOpen, handleClose, children }) {
	return (
		<Styled.Modal
			open={isOpen}
			onClose={() => handleClose(false)}
			TransitionComponent={Transition}
		>
			{children}
		</Styled.Modal>
	);
}

export default Modal;
