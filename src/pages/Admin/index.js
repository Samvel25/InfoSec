import {
	Box,
	Grid,
	TextareaAutosize,
	Typography,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import instance from "../../api/instance";
import useAuth from "../../hooks/useAuth";
import PrivateRoute from "../../routes/PrivateRoute";
import * as Styled from "./style";
import ModalReadMore from "../../components/ModalReadMore";
import Modal from "../../components/Modal";

const Admin = () => {
	const [formsData, setFormsData] = useState([]);
	const user = useAuth((state) => state.user);
	const location = useLocation();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [childComponent, setChildComponent] = useState(<></>);

	const [text, setText] = useState("");
	const [showConfirm, setShowConfirm] = useState(false);

	const handleTextChange = (e) => {
		setText(e.target.value);
	};

	const handleSendClick = () => {
		setShowConfirm(true);
	};

	const handleConfirmSend = () => {
		// Your send logic here
		// ...

		// Clear the textarea
		setText("");

		// Hide the confirmation dialog
		setShowConfirm(false);
	};

	const handleCancelSend = () => {
		// Hide the confirmation dialog without sending
		setShowConfirm(false);
	};

	const handleModalButtonClick = (childComponent) => {
		setChildComponent(childComponent);
		setIsModalOpen((prev) => !prev);
	};
	useEffect(() => {
		instance.get("getAllForms").then((res) => {
			const reversedData = [...res.data].reverse();
			setFormsData(reversedData);
		});
	}, []);

	console.log({ user });

	if (user?.role !== "admin") {
		return <Navigate to={"/"} state={{ from: location }} replace />;
	}

	console.log({ formsData });

	return (
		<div>
			<Modal
				handleClose={setIsModalOpen}
				isopen={isModalOpen}
				childComponent={childComponent}
			/>
			<Styled.SubmitedForm
				container
				justifyContent={{ sm: "center", md: "space-around" }}
				direction={"row"}
				alignItems="center"
				sx={{ m: "120px 0 130px" }}
			>
				<Grid item xs={12}>
					<Grid container direction={"row"} justifyContent={"center"}>
						<Grid sx={{ position: "relative" }} item xs={5}>
							<Styled.StyledTextarea
								value={text}
								onChange={handleTextChange}
								minRows={3}
								placeholder="Add your comments here..."
							/>
							<Styled.SendButton onClick={handleSendClick}>
								Send
							</Styled.SendButton>
						</Grid>
						<Dialog open={showConfirm} onClose={handleCancelSend}>
							<DialogTitle>Confirm</DialogTitle>
							<DialogContent>
								<DialogContentText>
									Are you sure you want to send this message?
								</DialogContentText>
							</DialogContent>
							<DialogActions>
								<Button onClick={handleCancelSend} color="primary">
									Cancel
								</Button>
								<Button onClick={handleConfirmSend} color="primary">
									Yes, Send it!
								</Button>
							</DialogActions>
						</Dialog>
					</Grid>
				</Grid>
				{formsData.length
					? formsData.map((card, index) => (
							<Grid item xs={11} sm={6} md={4} lg={2.5} xl={2} xxl={1.7}>
								<Styled.Card
									sx={{ cursor: "pointer" }}
									key={index}
									boxpadding="boxpadding"
									backgroundtype="backgroundOne"
									onClick={() =>
										handleModalButtonClick(
											<ModalReadMore>
												<Box
													sx={{
														minWidth: "360px",
														maxWidth: "500px",
														display: "block",
													}}
												>
													<Styled.CardItems>
														<Typography
															sx={{ m: 0, whiteSpace: "nowrap" }}
															variant="CardHead"
															component={"h5"}
														>
															Name. &nbsp;
														</Typography>
														<Typography sx={{ ml: "20px" }} component={"span"}>
															{card.name}
														</Typography>
													</Styled.CardItems>
													<Styled.CardItems>
														<Typography
															sx={{ m: 0, whiteSpace: "nowrap" }}
															variant="CardHead"
															component={"h5"}
														>
															Surname. &nbsp;
														</Typography>
														<Typography sx={{ ml: "20px" }} component={"span"}>
															{card.surname}
														</Typography>
													</Styled.CardItems>
													<Styled.CardItems>
														<Typography
															sx={{ m: 0, whiteSpace: "nowrap" }}
															variant="CardHead"
															component={"h5"}
														>
															Email. &nbsp;
														</Typography>
														<Typography sx={{ ml: "20px" }} component={"span"}>
															{card.email}
														</Typography>
													</Styled.CardItems>
													<Styled.CardItems>
														<Typography
															sx={{ m: 0, whiteSpace: "nowrap" }}
															variant="CardHead"
															component={"h5"}
														>
															Phone. &nbsp;
														</Typography>
														<Typography sx={{ ml: "20px" }} component={"span"}>
															{card.phoneNumber}
														</Typography>
													</Styled.CardItems>
													<Styled.CardItems>
														<Typography
															sx={{ m: 0, whiteSpace: "nowrap" }}
															variant="CardHead"
															component={"h5"}
														>
															Description. &nbsp;
														</Typography>
														<Typography sx={{ ml: "20px" }} component={"span"}>
															{card.description}
														</Typography>
													</Styled.CardItems>
													<Styled.CardItems>
														<Typography
															sx={{ m: 0, whiteSpace: "nowrap" }}
															variant="CardHead"
															component={"h5"}
														>
															Date. &nbsp;
														</Typography>
														<Typography sx={{ ml: "20px" }} component={"span"}>
															{card.timestamp}
														</Typography>
													</Styled.CardItems>
												</Box>
											</ModalReadMore>
										)
									}
								>
									<Box sx={{ maxWidth: "330px", display: "block" }}>
										<Styled.CardItems>
											<Typography
												sx={{ m: 0, whiteSpace: "nowrap" }}
												variant="CardHead"
												component={"h5"}
											>
												Name. &nbsp;
											</Typography>
											<Styled.UserData sx={{ ml: "20px" }} component={"span"}>
												{card.name}
											</Styled.UserData>
										</Styled.CardItems>
										<Styled.CardItems>
											<Typography
												sx={{ m: 0, whiteSpace: "nowrap" }}
												variant="CardHead"
												component={"h5"}
											>
												Surname. &nbsp;
											</Typography>
											<Styled.UserData sx={{ ml: "20px" }} component={"span"}>
												{card.surname}
											</Styled.UserData>
										</Styled.CardItems>
										<Styled.CardItems>
											<Typography
												sx={{ m: 0, whiteSpace: "nowrap" }}
												variant="CardHead"
												component={"h5"}
											>
												Email. &nbsp;
											</Typography>
											<Styled.UserData sx={{ ml: "20px" }} component={"span"}>
												{card.email}
											</Styled.UserData>
										</Styled.CardItems>
										<Styled.CardItems>
											<Typography
												sx={{ m: 0, whiteSpace: "nowrap" }}
												variant="CardHead"
												component={"h5"}
											>
												Phone. &nbsp;
											</Typography>
											<Styled.UserData sx={{ ml: "20px" }} component={"span"}>
												{card.phoneNumber}
											</Styled.UserData>
										</Styled.CardItems>
										<Styled.CardItems>
											<Typography
												sx={{ m: 0, whiteSpace: "nowrap" }}
												variant="CardHead"
												component={"h5"}
											>
												Description. &nbsp;
											</Typography>
											<Styled.UserData sx={{ ml: "20px" }} component={"span"}>
												{card.description}
											</Styled.UserData>
										</Styled.CardItems>
										<Styled.CardItems>
											<Typography
												sx={{ m: 0, whiteSpace: "nowrap" }}
												variant="CardHead"
												component={"h5"}
											>
												Date. &nbsp;
											</Typography>
											<Styled.UserData sx={{ ml: "20px" }} component={"span"}>
												{card.timestamp}
											</Styled.UserData>
										</Styled.CardItems>
									</Box>
								</Styled.Card>
							</Grid>
					  ))
					: null}
			</Styled.SubmitedForm>
		</div>
	);
};

export default Admin;
