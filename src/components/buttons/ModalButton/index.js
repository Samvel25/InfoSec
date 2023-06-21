import { ReactComponent as ModalSvg } from "../../../media/modalButtonSvg.svg";
import React, { useState } from "react";
import FormModal from "../../Modal";
import * as Styled from "./style";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Speaker from "./Speaker";

function Modal() {
	const [modalOpen, setmodalOpen] = useState(false);

	const handleClickOpen = () => {
		setmodalOpen(true);
	};

	const handleClose = () => {
		setmodalOpen(false);
	};
	return (
		<div>
			<Styled.ModalButton variant="outlined" onClick={handleClickOpen}>
				<ModalSvg />
				{/* <Speaker /> */}
			</Styled.ModalButton>
			<FormModal open={modalOpen} handleClose={handleClose} />
		</div>
	);
}

export default Modal;

// import { ReactComponent as ModalSvg } from "../../../media/modalButtonSvg.svg";
// import React, { useState } from "react";
// import FormModal from "../../Modal";
// import * as Styled from "./style";
// import Popper from "@mui/material/Popper";
// import Fade from "@mui/material/Fade";

// function Modal() {
// 	const [anchorEl, setAnchorEl] = useState(null);
// 	const [modalOpen, setmodalOpen] = useState(false);

// 	const handleClickOpen = (event) => {
// 		setAnchorEl(event.currentTarget);
// 		modalOpen(true);
// 	};

// 	const handleClose = () => {
// 		modalOpen(false);
// 	};

// 	const id = modalOpen ? "simple-popper" : undefined;

// 	return (
// 		<div>
// 			<Styled.ModalButton variant="outlined" onClick={handleClickOpen}>
// 				<ModalSvg />
// 			</Styled.ModalButton>
// 			{/* <FormModal open={modalOpen} handleClose={handleClose} /> */}
// 			<Popper id={id} open={modalOpen} anchorEl={anchorEl} transition>
// 				{({ TransitionProps }) => (
// 					<Fade {...TransitionProps} timeout={350}>
// 						{/* <MyModal handleClose={handleClose} /> */}
// 						<FormModal open={modalOpen} handleClose={handleClose} />
// 					</Fade>
// 				)}
// 			</Popper>
// 		</div>
// 	);
// }

// export default Modal;
