import { ReactComponent as ModalSvg } from "../../../media/svg/modalButtonSvg.svg";
import React, { useState } from "react";
import FormModal from "../../Modal";
import * as Styled from "./style";
import Form from "../../Form";

function ModalButton({ onClick }) {
	return (
		<div onClick={onClick}>
			<Styled.ModalButton variant="outlined">
				<ModalSvg />
			</Styled.ModalButton>
			{/* <FormModal open={modalOpen} handleClose={handleClose}>
				<Form />
			</FormModal> */}
		</div>
	);
}

export default ModalButton;
