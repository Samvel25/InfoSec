import {} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import instance from "../../api/instance";
import useAuth from "../../hooks/useAuth";
import {} from "./style";
import { Container } from "@mui/material";
import Modal from "../../components/Modal";
import MailSendTextArea from "./MailSendTextArea";
import SubmitedForms from "./SubmitedForms";

const Admin = () => {
	const [formsData, setFormsData] = useState([]);
	const user = useAuth((state) => state.user);
	const location = useLocation();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [childComponent, setChildComponent] = useState(<></>);

	useEffect(() => {
		instance.get("getAllForms").then((res) => {
			const reversedData = [...res.data].reverse();
			setFormsData(reversedData);
		});
	}, []);

	if (user?.role !== "admin") {
		return <Navigate to={"/"} state={{ from: location }} replace />;
	}

	return (
		<Container sx={{ p: "150px 0 200px" }} maxWidth={"xl"}>
			<Modal
				handleClose={setIsModalOpen}
				isopen={isModalOpen}
				childComponent={childComponent}
			/>

			<MailSendTextArea />
			<SubmitedForms />
		</Container>
	);
};

export default Admin;
