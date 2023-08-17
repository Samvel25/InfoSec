import { create } from "zustand";
import instance from '../api/instance';

const getInitialUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    const user = JSON.parse(userStr);
    instance.defaults.headers.common['Authorization'] = `${user.token}`;
    return user;
  }
  return {};
};

if (getInitialUser()) {
}

const useAuth = create((set) => ({
  user: getInitialUser(),
  setUser: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    set(() => ({ user }));
    instance.defaults.headers.common['Authorization'] = `${user.token}`;
  }
}));

export default useAuth;
