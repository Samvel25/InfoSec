import { createContext, useState, useContext } from "react";

export const MenuOpenContext = createContext();

export const MenuOpenProvider = ({ children }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuToggle = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	return (
		<MenuOpenContext.Provider value={{ isMenuOpen, handleMenuToggle }}>
			{children}
		</MenuOpenContext.Provider>
	);
};

// Hook to use this context
export const useMenuOpen = () => useContext(MenuOpenContext);
