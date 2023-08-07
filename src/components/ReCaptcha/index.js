import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import * as Styled from "./style";

const ReCaptcha = ({ onChange }) => {
	return (
		<Styled.StyledRecaptchaWrapper>
			<ReCAPTCHA
				sitekey="6LdxsoknAAAAANiiwy-cOoAVWpHVDNvS0v1h26O4"
				onChange={onChange}
			/>
		</Styled.StyledRecaptchaWrapper>
	);
};

export default ReCaptcha;
