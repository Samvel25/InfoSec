import * as Styled from "./style";

function GradientButton(props) {
	const { backgroundtype, cliptype } = props;

	return (
		<Styled.ButtonGradient
			disableRipple
			backgroundtype={backgroundtype}
			cliptype={cliptype}
			variant="contained"
			color="primary"
			{...props}
		/>
	);
}

export default GradientButton;
