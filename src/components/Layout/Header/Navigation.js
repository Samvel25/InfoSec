import { NavLink } from "react-router-dom";
import { useStyles } from "./HeaderStyled";
import { Typography } from "@mui/material";

function Navigation() {
	const classes = useStyles();

	return (
		<nav className={classes.navBar}>
			<NavLink className={classes.navLink} to="/home">
				<Typography>HOME</Typography>
			</NavLink>
			<NavLink className={classes.navLink} to="/about">
				<Typography>ABOUT US</Typography>
			</NavLink>
			<NavLink className={classes.navLink} to="/contact">
				<Typography>SERVICES</Typography>
			</NavLink>
			{/* <NavLink className={classes.navLink} to="/contact">
				clients
			</NavLink>
			<NavLink className={classes.navLink} to="/contact">
				certificates
			</NavLink> */}
		</nav>
	);
}
export default Navigation;
