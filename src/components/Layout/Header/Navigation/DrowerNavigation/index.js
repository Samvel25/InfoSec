import { Typography } from "@mui/material";
import * as Styled from "./style";
import useAuth from "../../../../../hooks/useAuth";
import { useMenuOpen } from "../../../../context/MenuOpenContext"; // Make sure to import your custom hook

function DrawerNavigation() {
	const user = useAuth((state) => state.user);
	const { ismenuopen, handleMenuToggle } = useMenuOpen(); // Using the custom hook

	const handlePageChange = () => {
		if (ismenuopen) {
			handleMenuToggle(); // Toggle the menu's state to closed
		}
	};

	return (
		<Styled.DrawerNavigationWrapper>
			<Styled.DrawerNavigationItem to="/" exact onClick={handlePageChange}>
				<Typography>home</Typography>
			</Styled.DrawerNavigationItem>
			<Styled.DrawerNavigationItem to="/about" onClick={handlePageChange}>
				<Typography>about us</Typography>
			</Styled.DrawerNavigationItem>
			<Styled.DrawerNavigationItem to="/services" onClick={handlePageChange}>
				<Typography>services</Typography>
			</Styled.DrawerNavigationItem>
			<Styled.DrawerNavigationItem to="/clients" onClick={handlePageChange}>
				<Typography>clients</Typography>
			</Styled.DrawerNavigationItem>
			<Styled.DrawerNavigationItem
				to="/certificates"
				onClick={handlePageChange}
			>
				<Typography>certificates</Typography>
			</Styled.DrawerNavigationItem>
			{user?.role === "admin" && (
				<Styled.DrawerNavigationItem to="/admin" onClick={handlePageChange}>
					<Typography>admin</Typography>
				</Styled.DrawerNavigationItem>
			)}
		</Styled.DrawerNavigationWrapper>
	);
}
export default DrawerNavigation;
