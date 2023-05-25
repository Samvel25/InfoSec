import Layout from "../components/Layout/Layout";
import { Outlet } from "react-router-dom";

const Root = () => {
	return <Outlet />;
};

export default Root;

// import React from "react";
// import { Outlet } from "react-router-dom"; // use Outlet to render child components

// const Root = () => {
// 	return <Outlet />; // render the child components here
// };

// export default Root;
