import { Box, Typography } from "@mui/material";
import PageTransition from "../../components/PageTransition";
import * as Styled from "./style";
import CardList from "../../components/CertificateCardsSorting";
import { useMenuOpen } from "../../components/context/MenuOpenContext";

const Certificates = () => {
	const { ismenuopen } = useMenuOpen();
	return (
		<PageTransition>
			<Styled.CertificatesHead
				ismenuopen={ismenuopen}
				textAlign={"center"}
				sx={{
					m: { md: "0px 0 260px", xs: "0px 0 150px" },
					"&:after": {
						display: ismenuopen ? "none" : "block",
					},
				}}
			>
				<abbr />
				<Styled.CertificatesHeadText variant="h1">
					OUR certificates
				</Styled.CertificatesHeadText>
			</Styled.CertificatesHead>
			<Box sx={{ display: ismenuopen ? "none" : "block" }}>
				<Box sx={{ mb: { xs: "150px", md: "300px" } }}>
					<CardList />
				</Box>
			</Box>
		</PageTransition>
	);
};

export default Certificates;
