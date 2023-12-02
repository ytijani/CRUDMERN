import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import { printError, printSuccess } from "../utils/helpFunction";

const Login = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const logtoutData = localStorage.getItem("logout");
    if (logtoutData) {
      if (!JSON.parse(localStorage.getItem("logout") || "")) {
        navigate("/home");
      }
    }
  }, []);

  const handleSumbit = async (e: any) => {
    e.preventDefault();
    const data: any = localStorage.getItem("user");

    if (data) {
      const data_user: any = JSON.parse(localStorage.getItem("user") || "");

      if (data_user.username != username) {
        console.log("Here : ", data_user.username);
        return printError("usernmae or password are invalid");
      }
      const isPasswordValid = await bcrypt.compare(
        password,
        data_user.password
      );
      if (!isPasswordValid) return alert("password not valid");
      localStorage.setItem("logout", JSON.stringify(false));
      printSuccess("Welcome back");
      navigate("/home");
    }
    if (!data) {
      alert("username or password are invalid");
    }
  };

  return (
    <section className="h-[100vh] w-[100vw] flex justify-center items-center bg-[#eee]">
      <form
        className="flex flex-col justify-center items-center bg-[#fff] gap-[26px]  border-solid border-[1px] border-[#eee] w-[30em] h-[22em] font-poppins rounded-[8px]"
        onSubmit={handleSumbit}
      >
        <h1 className="font-semibold">Login</h1>
        <input
          type="text"
          placeholder="Enter Your Username"
          className="w-[20em] py-[8px] px-[8px] rounded-[8px] outline-none"
          onChange={(e: any) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          className="w-[20em] py-[8px] px-[8px] rounded-[8px] outline-none"
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <button
          className="bg-[#056dff] w-[20em] text-white  py-[8px] rounded-[8px]"
          type="submit"
        >
          Submit
        </button>
        <a>
          you don't have an account?{" "}
          <Link to="register" className="text-[#056dff] cursor-pointer">
            Register
          </Link>
        </a>
      </form>
    </section>
  );
};

export default Login;
