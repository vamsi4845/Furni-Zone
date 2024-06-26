import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = new QueryClient();
  const user = useSelector((state) => state.userState.user);

  const handleLogout = async () => {
    navigate("/");
    dispatch(logoutUser());
    dispatch(clearCart());
    queryClient.removeQueries();
  };

  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <button
              onClick={handleLogout}
              className="btn btn-xs font-bold btn-outline btn-primary"
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link
              to="/login"
              className="link link-hover font-bold text-xs sm:text-sm"
            >
              Sign in / Guest
            </Link>
            {/* <Link to="/register" className="link link-hover text-xs sm:text0sm">
              Create Account
            </Link> */}
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
