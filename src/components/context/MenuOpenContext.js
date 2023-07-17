import { createContext, useState, useContext } from "react";

export const MenuOpenContext = createContext();

export const MenuOpenProvider = ({ children }) => {
	const [ismenuopen, setismenuopen] = useState(false);

	const handleMenuToggle = () => {
		setismenuopen((prevState) => !prevState);
	};

	return (
		<MenuOpenContext.Provider value={{ ismenuopen, handleMenuToggle }}>
			{children}
		</MenuOpenContext.Provider>
	);
};

// Hook to use this context
export const useMenuOpen = () => useContext(MenuOpenContext);
