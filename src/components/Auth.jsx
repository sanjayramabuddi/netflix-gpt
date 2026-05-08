import { useRef, useState } from "react";
import { validate } from "../utils/validate";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formErrors, setFormErrors] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const img =
    "https://assets.nflxext.com/ffe/siteui/vlv3/76c5a455-c62c-46d4-8653-3924728113e3/web/IN-en-20260504-TRIFECTA-perspective_596176fe-3b1e-48ec-8a00-a0acb34e68f1_large.jpg";

  function authToggle() {
    setIsLogin(!isLogin);
  }

  function handleSubmit() {
    const validateResult = validate(
      emailRef.current.value,
      passwordRef.current.value,
    );
    setFormErrors(validateResult);
  }

  return (
    <div className="relative">
      <img className="w-full h-screen object-cover" src={img} alt="auth-bg" />

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
