// import { styled } from "@mui/material/styles";
import {
	Box,
	Button,
	Container,
	Hidden,
	Stack,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ProgreeBar from "../../components/ProgressBar";
import GradientButton from "../../components/Buttons/MainButton";
import * as Styled from "./style";
import * as GlobalStyled from "../style";
import Clients from "../../components/Carousel/Clients";
import Achivments from "../../components/Carousel/Achivments/index";
import BigCardWrapper from "../../components/Card/BigCard";
import DiamondAnimation from "../../media/gif/diamond.gif";
import cybersecurity from "../../media/png/cybersecurity.png";
import cybersecurity2 from "../../media/png/cybersecurity2.png";
import SlidCertificatesCarouselers from "../../components/Carousel/Certificates/index";
import PageTransition from "../../components/PageTransition";
import { useMenuOpen } from "../../components/context/MenuOpenContext";
import ModalButton from "../../components/Buttons/ModalButton";
import Modal from "../../components/Modal";
import Form from "../../components/Form";
import ModalReadMore from "../../components/ModalReadMore";
import CustomHidden from "../../components/Hidden";
import ServicesCard from "../../components/Card/Services";

function Home() {
	const { ismenuopen } = useMenuOpen();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [childComponent, setChildComponent] = useState(<></>);

	const handleModalButtonClick = (childComponent) => {
		setChildComponent(childComponent);
		setIsModalOpen((prev) => !prev);
	};

	return (
		<PageTransition>
			<Styled.CardSquareImg />
			{/* ///1 section/////// */}

			<Styled.FirstSection
				ismenuopen={ismenuopen}
				sx={{
					p: {
						md: "100px 0",
						xs: "100px 0 100px",
					},
				}}
				container
				justifyContent={{ sm: "space-around", xs: "center" }}
				direction={"row"}
				alignItems="center"
			>
				<Grid
					item
					md={5}
					xs={12}
					sm={9}
					xl={4.5}
					xxl={4}
					textAlign={{ sm: "center", md: "start" }}
				>
					<Typography variant="h1">
						Proactive Cyber Security Solutions for Your Business
					</Typography>
					<CustomHidden breakpoint="md" down>
						<ProgreeBar />
						<Grid item lg={11} md={12}>
							<Typography>
								We provide comprehensive cyber security services to protect your
								business from cyber threats. Our team of experts has years of
								experience in the field and can help you identify and mitigate
								potential risks before they cause harm.
							</Typography>
						</Grid>
					</CustomHidden>
					<CustomHidden breakpoint="md" down>
						<Stack spacing={3} direction={"row"} sx={{ mt: "20px" }}>
							<GradientButton>
								<Typography>Pick a product</Typography>
							</GradientButton>
							<GradientButton backgroundtype="backgroundOne">
								<Typography>To get a consultation</Typography>
							</GradientButton>
						</Stack>
					</CustomHidden>
				</Grid>
				<sh />
				<Styled.DiamondWraper
					item
					md={5}
					sm={9}
					xs={12}
					textAlign={{ md: "end", xs: "center" }}
				>
					<Styled.Modal>
						<Modal
							handleClose={setIsModalOpen}
							isopen={isModalOpen}
							childComponent={childComponent}
						/>

						<ModalButton onClick={() => handleModalButtonClick(<Form />)} />
					</Styled.Modal>
					<CustomHidden breakpoint="md" up>
						<Box sx={{ m: "15px 0 30px" }}>
							<ProgreeBar />
						</Box>
					</CustomHidden>
					<img
						src={DiamondAnimation}
						alt="Cybersecurity"
						width={"100%"}
						sx={{ paddingBottom: "100%" }}
					/>
				</Styled.DiamondWraper>
				<CustomHidden breakpoint="md" up>
					<Grid item xs={12} sm={9} textAlign={{ sm: "center", xs: "start" }}>
						<Typography>
							We provide comprehensive cyber security services to protect your
							business from cyber threats. Our team of experts has years of
							experience in the field and can help you identify and mitigate
							potential risks before they cause harm.
						</Typography>
					</Grid>
				</CustomHidden>
				<CustomHidden breakpoint="md" up>
					<Grid item sm={7} xs={12}>
						<Box textItems={"center"} direction={"row"} sx={{ mt: "20px" }}>
							<GradientButton sx={{ mb: "20px", width: "100%" }}>
								<Typography>Pick a product</Typography>
							</GradientButton>
							<GradientButton
								sx={{ width: "100%" }}
								backgroundtype="backgroundOne"
							>
								<Typography>To get a consultation</Typography>
							</GradientButton>
						</Box>
					</Grid>
				</CustomHidden>
			</Styled.FirstSection>

			<Box sx={{ display: ismenuopen ? "none" : "block" }}>
				{/* ///2 section/////// */}

				<GlobalStyled.Achievements
					sx={{
						p: { md: "60px 0 130px", sm: "60px 0 85px", xs: "60px 0 0px" },
					}}
				>
					<GlobalStyled.HeadText>
						<Typography variant="Head"> OUR</Typography>
						<Typography variant="GradientHead"> CLIENTS</Typography>
					</GlobalStyled.HeadText>
					<Clients />
					<GlobalStyled.Description>
						<GlobalStyled.DescriptionText
							sx={{ pt: { md: "145px", xs: "100px" } }}
						>
							<Typography
								variant="GradientLight"
								component="h1"
								sx={{ mb: "20px" }}
							>
								Secure Your Online World
							</Typography>
							<Typography>
								We provide cyber security solutions to safeguard your online
								world against viruses, malware, and cyber attacks. Our services
								cover threat prevention, data protection, and network security,
								supported by 24/7 monitoring and expert assistance. Trust us to
								keep your sensitive information and online activities secure.
							</Typography>
						</GlobalStyled.DescriptionText>
					</GlobalStyled.Description>
					<Box alignItems={"center"} sx={{ mt: { sm: "150px", xs: "110px" } }}>
						<Achivments />
					</Box>
				</GlobalStyled.Achievements>

				{/*3 /// section/////// */}

				<Styled.ExportCyberSecurity
					sx={{ p: { xs: "110px 0", sm: "100px 0" } }}
					container
					justifyContent={"space-around"}
					direction={"row"}
					alignItems="center"
				>
					<Styled.ExportCyberSecurityDescription
						item
						md={5}
						xs={12}
						sm={10}
						textAlign={{ sm: "center", md: "start" }}
					>
						<Typography
							sx={{ margin: 0 }}
							variant="GradientStrong"
							component={"h1"}
						>
							Expert Cybersecurity
						</Typography>
						<Typography variant="h1">
							Solutions for Your Peace of Mind
						</Typography>
						<ProgreeBar />
						<Grid>
							<Typography>
								INFOSEC LLC, we understand how important it is to keep your
								business safe from cyber threats. That's why we offer a range of
								expert cybersecurity solutions designed to give you peace of
								mind. Whether you're looking for network security, endpoint
								protection, or incident response services, our team of experts
								has the knowledge and experience to help you stay one step ahead
								of the hackers. Contact us today to learn more.
							</Typography>
						</Grid>
						<CustomHidden breakpoint="md" up>
							<Stack spacing={3} direction={"row"} sx={{ mt: "20px" }}>
								<GradientButton
									backgroundtype="backgroundOne"
									onClick={() =>
										handleModalButtonClick(
											<ModalReadMore>
												<Typography>
													INFOSEC LLC, we understand how important it is to keep
													your business safe from cyber threats. That's why we
													offer a range of expert cybersecurity solutions
													designed to give you peace of mind. Whether you're
													looking for network security, endpoint protection, or
													incident response services, our team of experts has
													the knowledge and experience to help you stay one step
													ahead of the hackers. Contact us today to learn more.
												</Typography>
											</ModalReadMore>
										)
									}
								>
									<Typography>Read more</Typography>
								</GradientButton>
							</Stack>
						</CustomHidden>
					</Styled.ExportCyberSecurityDescription>
					<Grid
						item
						md={5}
						sm={8}
						xl={4.5}
						sx={{ mt: { md: "0px", xs: "40px" } }}
					>
						<BigCardWrapper
							maxWidth={"900px"}
							img={
								<img
									src={cybersecurity}
									alt="Cybersecurity"
									width={"100%"}
									sx={{ paddingBottom: "100%" }}
								/>
							}
						/>
					</Grid>
				</Styled.ExportCyberSecurity>

				{/*4 /// section/////// */}

				<Styled.CyberSecurityServices
					sx={{ p: { md: "100px 0 180px", xs: "80px 0 100px" } }}
					container
					justifyContent={"space-around"}
					direction={{ md: "row-reverse" }}
					alignItems="center"
				>
					<Styled.CyberSecurityServicesDescription
						item
						md={5}
						xs={12}
						sm={10}
						textAlign={{ sm: "center", md: "start" }}
					>
						<Typography
							sx={{ margin: 0 }}
							variant="GradientLight"
							component={"h1"}
						>
							Cybersecurity Services
						</Typography>
						<Typography variant="h1">
							Tailored to Your Business Needs
						</Typography>
						<ProgreeBar />
						<Grid>
							<Typography>
								INFOSEC LLC, we understand how important it is to keep your
								business safe from cyber threats. That's why we offer a range of
								expert cybersecurity solutions designed to give you peace of
								mind. Whether you're looking for network security, endpoint
								protection, or incident response services, our team of experts
								has the knowledge and experience to help you stay one step ahead
								of the hackers. Contact us today to learn more.
							</Typography>
						</Grid>
						<CustomHidden mdDown>
							<Stack spacing={3} direction={"row"} sx={{ mt: "20px" }}>
								<GradientButton
									backgroundtype="backgroundOne"
									onClick={() =>
										handleModalButtonClick(
											<ModalReadMore>
												<Typography>
													INFOSEC LLC, we understand how important it is to keep
													your business safe from cyber threats. That's why we
													offer a range of expert cybersecurity solutions
													designed to give you peace of mind. Whether you're
													looking for network security, endpoint protection, or
													incident response services, our team of experts has
													the knowledge and experience to help you stay one step
													ahead of the hackers. Contact us today to learn more.
												</Typography>
											</ModalReadMore>
										)
									}
								>
									<Typography>Read more</Typography>
								</GradientButton>
							</Stack>
						</CustomHidden>
					</Styled.CyberSecurityServicesDescription>

					<Grid
						item
						justifyContent={"end"}
						md={5}
						sm={8}
						xl={4.5}
						sx={{ mt: { md: "0px", xs: "40px" }, display: "flex" }}
					>
						<BigCardWrapper
							maxWidth={"900px"}
							img={
								<img
									src={cybersecurity2}
									alt="Cybersecurity"
									width={"100%"}
									sx={{ paddingBottom: "100%" }}
								/>
							}
						/>
					</Grid>
				</Styled.CyberSecurityServices>

				{/*5 /// section/////// */}

				<GlobalStyled.Services sx={{ m: "80px 0 130px" }}>
					<GlobalStyled.HeadText>
						<Typography variant="Head">OUR SERVICES</Typography>
					</GlobalStyled.HeadText>
					<ServicesCard />
				</GlobalStyled.Services>

				{/*6 /// section/////// */}

				<Box
					sx={{
						p: {
							xxl: "190px 0 120px",
							xl: "160px 0 100px",
							md: "130px 0 80px",
							sm: "80px 0 120px",
							xs: "0 0 80px",
						},
					}}
				>
					<Styled.CertificatesDescription>
						<GlobalStyled.DescriptionText sx={{ pt: 0 }}>
							<Typography
								variant="GradientLight"
								component="h1"
								sx={{ mb: "20px" }}
							>
								Certificates and licenses
							</Typography>
							<Typography>
								We provide cyber security solutions to safeguard your online
								world against viruses, malware, and cyber attacks. Our services
								cover threat prevention, data protection, and network security,
								supported by 24/7 monitoring and expert assistance. Trust us to
								keep your sensitive information and online activities secure.
							</Typography>
						</GlobalStyled.DescriptionText>
					</Styled.CertificatesDescription>
					<Styled.CustomContainer maxWidth={"xl"} sx={{ mt: "80px" }}>
						<SlidCertificatesCarouselers />
					</Styled.CustomContainer>
				</Box>
			</Box>
		</PageTransition>
	);
}

export default Home;
