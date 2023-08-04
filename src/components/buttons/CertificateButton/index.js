import * as Styled from "./style";

function CertificateButton(props) {
	const { backgroundtype, cliptype } = props;

	return (
		<Styled.CertificateButton
			disableRipple
			backgroundtype={backgroundtype}
			cliptype={cliptype}
			variant="contained"
			color="primary"
			{...props}
		/>
	);
}

export default CertificateButton;
