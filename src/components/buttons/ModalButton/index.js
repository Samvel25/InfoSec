import { ReactComponent as ModalSvg } from "../../../media/svg/modalButtonSvg.svg";
import React from "react";
import * as Styled from "./style";

function ModalButton({ onClick }) {
	return (
		<div onClick={onClick}>
			<Styled.ModalButton variant="outlined">
				<ModalSvg />
			</Styled.ModalButton>
		</div>
	);
}

export default ModalButton;
