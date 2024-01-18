import React, { useEffect, useState } from "react";
import instance from "../../../api/instance";
import { TableBody, Paper, Box, Typography, Stack } from "@mui/material";
import Modal from "../../../components/Modal";
import * as Styled from "./style";
import DeleteIcon from "@mui/icons-material/Delete";

const Admin = () => {
	const [formsData, setFormsData] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [childComponent, setChildComponent] = useState(<></>);

	const handleCopyRow = (row) => {
		const textToCopy = Object.values(row).join("\t");
		navigator.clipboard.writeText(textToCopy);
	};

	useEffect(() => {
		instance.get("getAllForms").then((res) => {
			const reversedData = [...res.data].reverse();
			setFormsData(reversedData);
		});
	}, []);

	const deleteFormData = (id) => {
		instance
			.delete(`deleteFormData/${id}`)
			.then((response) => {
				if (response.status === 200) {
					setFormsData(formsData.filter((form) => form._id !== id));
				} else {
					console.error("Failed to delete form data");
				}
			})
			.catch((error) => {
				console.error("Error deleting form data:", error);
			});
	};

	return (
		<Box>
			<Modal
				handleClose={setIsModalOpen}
				isopen={isModalOpen}
				childComponent={childComponent}
			/>

			<Styled.StyledTableContainer component={Paper}>
				<Styled.StyledTable>
					<Styled.StyledTableHead>
						<Styled.StyledTableRow
							sx={{ backgroundColor: "#696969  !important" }}
						>
							<Styled.StyledTableCell>
								<Typography
									sx={{ m: 0, whiteSpace: "nowrap" }}
									variant="CardHead"
								>
									Name
								</Typography>
							</Styled.StyledTableCell>
							<Styled.StyledTableCell>
								<Typography
									sx={{ m: 0, whiteSpace: "nowrap" }}
									variant="CardHead"
								>
									Surname
								</Typography>
							</Styled.StyledTableCell>
							<Styled.StyledTableCell>
								<Typography
									sx={{ m: 0, whiteSpace: "nowrap" }}
									variant="CardHead"
								>
									Email
								</Typography>
							</Styled.StyledTableCell>
							<Styled.StyledTableCell>
								<Typography
									sx={{ m: 0, whiteSpace: "nowrap" }}
									variant="CardHead"
								>
									Phone Number
								</Typography>
							</Styled.StyledTableCell>
							<Styled.StyledTableCell>
								<Typography
									sx={{ m: 0, whiteSpace: "nowrap" }}
									variant="CardHead"
								>
									Description
								</Typography>
							</Styled.StyledTableCell>
							<Styled.StyledTableCell>
								<Typography
									sx={{ m: 0, whiteSpace: "nowrap" }}
									variant="CardHead"
								>
									Timestamp
								</Typography>
							</Styled.StyledTableCell>
							<Styled.StyledTableCell></Styled.StyledTableCell>

							{/* New Header Cell for Copy Button */}
						</Styled.StyledTableRow>
					</Styled.StyledTableHead>
					<TableBody>
						{formsData.length
							? formsData.map((card, index) => (
									<Styled.StyledTableRow key={card._id}>
										<Styled.StyledTableCell>
											<Typography>{card.name}</Typography>
										</Styled.StyledTableCell>
										<Styled.StyledTableCell>
											<Typography>{card.surname}</Typography>
										</Styled.StyledTableCell>
										<Styled.StyledTableCell>
											<Typography
												component={"a"}
												href={`mailto:${card.email}`}
												sx={{
													"&:hover": { color: "#FFFFFF" },
													textDecoration: "none",
												}}
											>
												{card.email}
											</Typography>
										</Styled.StyledTableCell>
										<Styled.StyledTableCell>
											<Typography
												component={"a"}
												href={`tel:${card.phoneNumber}`}
												sx={{
													"&:hover": { color: "#FFFFFF" },
													textDecoration: "none",
												}}
											>
												{card.phoneNumber}
											</Typography>
										</Styled.StyledTableCell>
										<Styled.StyledTableCell>
											<Typography>{card.description}</Typography>
										</Styled.StyledTableCell>
										<Styled.StyledTableCell>
											<Typography>{card.timestamp}</Typography>
										</Styled.StyledTableCell>
										<Styled.StyledTableCell>
											<Stack
												direction={"row"}
												alignItems={"center"}
												justifyContent={"space-between"}
											>
												<Styled.CopyRowButton
													onClick={() => {
														handleCopyRow(card);
													}}
												>
													Copy
												</Styled.CopyRowButton>
												<Box
													sx={{ cursor: "pointer" }}
													onClick={() => deleteFormData(card._id)}
												>
													<DeleteIcon />
												</Box>
											</Stack>
										</Styled.StyledTableCell>{" "}
									</Styled.StyledTableRow>
							  ))
							: null}
					</TableBody>
				</Styled.StyledTable>
			</Styled.StyledTableContainer>
		</Box>
	);
};

export default Admin;
