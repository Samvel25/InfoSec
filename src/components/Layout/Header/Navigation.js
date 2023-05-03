import { NavLink } from "react-router-dom";
import { useStyles } from "./HeaderStyled";

function Navigation() {
	const classes = useStyles();

	return (
		<nav className={classes.navBar}>
			<NavLink className={classes.navLink} to="/home">
				Home
			</NavLink>
			<NavLink className={classes.navLink} to="/about">
				About
			</NavLink>
			<NavLink className={classes.navLink} to="/contact">
				Contact
			</NavLink>
		</nav>
	);
}
export default Navigation;
