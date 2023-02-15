import { Link } from "@remix-run/react";

function Login() {
  return (
    <form className="flex flex-col w-[250px]" action="">
      <input
        className="focus:outline-none focus:border-sky-500 border-2 rounded-md border-gray-300 shadow-sm mb-2 p-2"
        type="text"
        placeholder="Vardas"
      />
      <input
        className="focus:outline-none focus:border-sky-500 border-2 rounded-md border-gray-300 shadow-sm mb-4  p-2"
        type="text"
        placeholder="Jusu elektroninis pastas"
      />
      <button className="text-gray-100 border-[1px] rounded-md border-gray-200 bg-sky-500 shadow mb-2  p-2 ">
        Prisijungti
      </button>
      <p className="text-gray-700">
        <Link to="/register">Registruotis</Link>
      </p>
    </form>
  );
}

export default Login;
