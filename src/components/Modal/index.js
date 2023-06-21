import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/system";
import Form from "../Form";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export const Modal = styled(Dialog)(({ theme }) => ({
	"& .MuiPaper-root": {
		background: "none",
		maxWidth: "950px",
		border: "1px solid #C0C1C2",
		margin: "70px",
		[theme.breakpoints.down("sm")]: {
			margin: "25px",

			// overflow: "visible",
		},
	},
	"& .MuiContainer-root": {
		padding: "0",
	},
}));

function FormModal({ open, handleClose }) {
	return (
		<div>
			<Modal open={open} onClose={handleClose} TransitionComponent={Transition}>
				<Form />
				{/* <DialogActions>
					<Button onClick={handleClose}>Close</Button>
				</DialogActions> */}
			</Modal>
		</div>
	);
}

export default FormModal;
