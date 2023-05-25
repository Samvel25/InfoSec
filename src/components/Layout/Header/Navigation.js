// import { Link, NavLink } from "react-router-dom";
// import { useStyles } from "./style";

// import { Typography } from "@mui/material";

// function Navigation() {

// 	return (
// 		<Styled>
// 			<NavLink className={classes.navLink} to="/">
// 				<Typography>HOME</Typography>
// 			</NavLink>
// 			<NavLink className={classes.navLink} to="/about">
// 				<Typography>ABOUT US</Typography>
// 			</NavLink>
// 			<NavLink className={classes.navLink} to="/contact">
// 				<Typography>SERVICES</Typography>
// 			</NavLink>
// 			<NavLink className={classes.navLink} to="/contact">
// 				<Typography>SERVICES</Typography>
// 			</NavLink>
// 			<NavLink className={classes.navLink} to="/contact">
// 				<Typography>SERVICES</Typography>
// 			</NavLink>
// 		</Styled>
// 	);
// }
// export default Navigation;

import * as Styled from "./style";
import { Typography } from "@mui/material";

function Navigation() {
	return (
		<Styled.Navigation>
			<Styled.NavigationItem to="/">
				<Typography>HOME</Typography>
			</Styled.NavigationItem>
			<Styled.NavigationItem to="/about">
				<Typography>ABOUT US</Typography>
			</Styled.NavigationItem>
			<Styled.NavigationItem to="/contact">
				<Typography>SERVICES</Typography>
			</Styled.NavigationItem>
			<Styled.NavigationItem to="/contact">
				<Typography>SERVICES</Typography>
			</Styled.NavigationItem>
			<Styled.NavigationItem to="/contact">
				<Typography>SERVICES</Typography>
			</Styled.NavigationItem>
		</Styled.Navigation>
	);
}
export default Navigation;
