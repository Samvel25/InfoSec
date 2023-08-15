import { create } from "zustand";

const getInitialUser = () => {
	const userStr = localStorage.getItem("user");
	if (userStr) {
		return JSON.parse(userStr);
	}
	return {};
};

const useAuth = create((set) => ({
	user: getInitialUser(),
	setUser: (user) => {
		localStorage.setItem("user", JSON.stringify(user));
		set(() => ({ user }));
	},
}));

export default useAuth;
