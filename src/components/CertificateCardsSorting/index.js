import React, { useState } from "react";
import CardList from "./CardList";

const ParentComponent = () => {
	const [activeSort, setActiveSort] = useState("all");

	return <CardList activeSort={activeSort} setActiveSort={setActiveSort} />;
};

export default ParentComponent;
