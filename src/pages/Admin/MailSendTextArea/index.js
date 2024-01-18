import React, { useState } from "react";
import {} from "./style";
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";
import * as Styled from "./style";
import instance from "../../../api/instance";

const Admin = () => {
	const [text, setText] = useState("");
	const [htmlContent, setHtmlContent] = useState("");
	const [subject, setSubject] = useState("");
	const [showConfirm, setShowConfirm] = useState(false);

	const handleTextChange = (e) => {
		setText(e.target.value);
	};

	const handleHtmlContentChange = (e) => {
		setHtmlContent(e.target.value);
	};

	const handleSubjectChange = (e) => {
		setSubject(e.target.value);
	};

	const handleSendClick = () => {
		setShowConfirm(true);
	};

	const handleConfirmSend = async () => {
		try {
			await instance.post("send-email-to-subscribers", {
				subject: subject,
				text: text,
				html: htmlContent,
			});
			setText("");
			setSubject("");
			setHtmlContent("");
		} catch (err) {
			console.log({ err });
		}
		setShowConfirm(false);
	};

	const handleCancelSend = () => {
		setShowConfirm(false);
	};

	return (
		<Box sx={{ width: "100%", mb: "100px" }}>
			<Box textAlign={"end"} sx={{ position: "relative", width: "100%" }}>
				<Styled.StyledTextarea
					// sx={{ mb: "20px" }}
					resize={"none"}
					value={subject}
					onChange={handleSubjectChange}
					minRows={2}
					placeholder="Add your email subject here..."
				/>
				<Styled.StyledTextarea
					resize={"none"}
					value={text}
					onChange={handleTextChange}
					minRows={5}
					placeholder="Add your comments here..."
				/>
				<Styled.StyledTextarea
					label="HTML Content"
					minRows={8}
					value={htmlContent}
					onChange={handleHtmlContentChange}
					fullWidth
					placeholder="Add your HTML here..."
				/>
				<Styled.SendButton onClick={handleSendClick}>Send</Styled.SendButton>
			</Box>
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
		</Box>
	);
};

export default Admin;
