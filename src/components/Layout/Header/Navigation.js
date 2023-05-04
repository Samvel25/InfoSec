import { NavLink } from "react-router-dom";
import { useStyles } from "./HeaderStyled";

function Navigation() {
	const classes = useStyles();

	return (
		<nav className={classes.navBar}>
			<NavLink className={classes.navLink} to="/home">
				HOME
			</NavLink>
			<NavLink className={classes.navLink} to="/about">
				ABOUT US
			</NavLink>
			<NavLink className={classes.navLink} to="/contact">
				SERVICES
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
