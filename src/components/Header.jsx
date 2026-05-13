import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { LOGO } from "../utils/constants";

const Header = () => {
  const user = useSelector((state) => state.user.value);

  function handleLogout() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="absolute w-full bg-linear-to-b from-gray-950 z-50 flex justify-between">
      <img src={LOGO} alt="netflix-logo" width={200} className="" />
      {user && (
        <div className="flex justify-center items-center gap-2">
          <p className="font-bold">{user.displayName}</p>
          <img
            src={user.photoURL}
            alt="user-img"
            className="w-10 rounded-full"
          />
          <button
            className="border-2 border-red-800 cursor-pointer p-2 bg-red-600 text-white"
            onClick={handleLogout}
          >
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
