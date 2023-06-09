import { Box, Typography } from "@mui/material";
import PageTransition from "../../components/PageTransition";
import * as Styled from "./style";
import CardList from "../../components/CertificateCardsSorting";
import { useMenuOpen } from "../../components/context/MenuOpenContext";

const Certificates = () => {
	const { isMenuOpen } = useMenuOpen();
	return (
		<PageTransition>
			<Styled.CertificatesHead
				isMenuOpen={isMenuOpen}
				textAlign={"center"}
				sx={{
					m: { md: "10px 0 260px", xs: "10px 0 150px" },
					"&:after": {
						display: isMenuOpen ? "none" : "block",
					},
				}}
			>
				<sh />
				<Styled.CertificatesHeadText variant="h1">
					OUR certificates
				</Styled.CertificatesHeadText>
			</Styled.CertificatesHead>
			<Box sx={{ display: isMenuOpen ? "none" : "block" }}>
				<Box sx={{ mb: { xs: "150px", md: "300px" } }}>
					<CardList />
				</Box>
			</Box>
		</PageTransition>
	);
};

export default Certificates;

// import { Box, Typography } from "@mui/material";
// import PageTransition from "../../components/PageTransition";
// import * as Styled from "./style";
// import CardList from "../../components/CertificateCardsSorting";

// const Certificates = () => {
// 	return (
// 		<PageTransition>
// 			<Styled.CertificatesHead
// 				textAlign={"center"}
// 				sx={{ m: { md: "10px 0 260px", xs: "10px 0 150px" } }}
// 			>
// 				<Styled.CertificatesHeadText variant="h1">
// 					OUR certificates
// 				</Styled.CertificatesHeadText>
// 			</Styled.CertificatesHead>
// 			<Box sx={{ mb: { xs: "150px", md: "300px" } }}>
// 				<CardList />
// 			</Box>
// 		</PageTransition>
// 	);
// };

// export default Certificates;
