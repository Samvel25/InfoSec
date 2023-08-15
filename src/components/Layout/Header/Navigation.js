import useAuth from "../../../hooks/useAuth";
import * as Styled from "./style";
import { Typography } from "@mui/material";

function Navigation({ ismenuopen }) {
	const user = useAuth((state) => state.user);

	console.log("user", user);

	return (
		<Styled.Navigation className={ismenuopen ? "open" : ""}>
			<Styled.NavigationItem to="/" exact>
				<Typography>home</Typography>
			</Styled.NavigationItem>
			<Styled.NavigationItem to="/about">
				<Typography>about us</Typography>
			</Styled.NavigationItem>
			<Styled.NavigationItem to="/services">
				<Typography>services</Typography>
			</Styled.NavigationItem>
			<Styled.NavigationItem to="/clients">
				<Typography>clients</Typography>
			</Styled.NavigationItem>
			<Styled.NavigationItem to="/certificates">
				<Typography>certificates</Typography>
			</Styled.NavigationItem>
			{user?.role === "admin" && (
				<Styled.NavigationItem to="/admin">
					<Typography>admin</Typography>
				</Styled.NavigationItem>
			)}
		</Styled.Navigation>
	);
}

export default Navigation;
