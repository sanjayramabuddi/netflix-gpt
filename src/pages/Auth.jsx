import { useRef, useState } from "react";
import { validate } from "../utils/validate";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../services/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { AUTH_BG_IMG, USER_LOGO } from "../utils/constants";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formErrors, setFormErrors] = useState("");

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const dispatch = useDispatch();

  function authToggle() {
    setIsLogin(!isLogin);
  }

  function handleSubmit() {
    const validateResult = validate(
      emailRef.current.value,
      passwordRef.current.value,
    );
    setFormErrors(validateResult);

    if (validateResult) return;

    if (isLogin) {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Login User -", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormErrors(errorCode + "-" + errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameRef.current.value,
            photoURL: USER_LOGO,
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = user;
              dispatch(addUser({ uid, displayName, email, photoURL }));
            })
            .catch((error) => {
              setFormErrors(error.message);
            });
          console.log("Sign In User -", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormErrors(errorCode + "-" + errorMessage);
        });
    }
  }

  return (
    <div className="relative">
      <img
        className="w-full h-screen object-cover"
        src={AUTH_BG_IMG}
        alt="auth-bg"
      />

      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <form
          className="w-full max-w-md bg-black/70 py-10 px-8 rounded flex flex-col items-center justify-center gap-4 text-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-white text-3xl font-bold mb-4">
            {isLogin ? "Sign In" : "Sign Up"}
          </h2>

          {!isLogin && (
            <input
              className="p-3 rounded bg-gray-800 text-white w-80"
              type="text"
              placeholder="Enter Name"
              ref={nameRef}
            />
          )}

          <input
            className="p-3 rounded bg-gray-800 text-white w-80"
            type="email"
            placeholder="Enter Email"
            ref={emailRef}
          />

          <input
            className="p-3 rounded bg-gray-800 text-white w-80"
            type="password"
            placeholder="Enter password"
            ref={passwordRef}
          />

          <p className="text-red-500">{formErrors}</p>

          <button
            className="bg-red-600 text-white p-3 rounded font-semibold w-80"
            onClick={handleSubmit}
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-white">
            Don't have an account ?{" "}
            <span onClick={authToggle} className="cursor-pointer">
              {isLogin ? "Sign Up" : "Sign In"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Auth;
