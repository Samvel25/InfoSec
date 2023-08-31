import { styled } from "@mui/material/styles";
import { Box, TextField } from "@mui/material";
import { Height } from "@mui/icons-material";
import LoginForm from "../../components/Layout/Header/LogIn";

export const SignInWrapper = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	marginTop: "200px",
	width: "100vw",
	height: "100vh",
}));

export const Login = styled(LoginForm)(({ theme }) => ({
	height: "max-content",
	border: "1px solid rgba(255, 255, 255, 0.1)",
}));
