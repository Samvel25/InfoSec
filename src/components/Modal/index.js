import React from "react";

import Form from "../Form";
import Slide from "@mui/material/Slide";
import * as Styled from "./style";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function Modal({ isopen, handleClose, childComponent }) {
	return (
		<Styled.Modal
			open={isopen}
			onClose={() => handleClose(false)}
			TransitionComponent={Transition}
		>
			{childComponent}
		</Styled.Modal>
	);
}

export default Modal;
