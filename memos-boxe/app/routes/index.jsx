import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <div className="flex  flex-col justify-center items-center h-screen bg-gray-300">
        <h1 className="text-4xl text-sky-500 font-bold mb-12">
          Naudinga Atmintine skirta išsaugoti
          <span className="text-emerald-500 underline"> Nuorodoms </span> kurios
          jus domina{" "}
        </h1>
        <div className="flex">
          <Link
            className="text-gray-100 hover:bg-sky-600 transition  bg-sky-500	 border-2 rounded-md border-gray-100 px-8 py-4"
            to="/userSingIn"
          >
            Prisijungti
          </Link>
          <Link
            className=" text-gray-100 hover:bg-emerald-600 transition bg-emerald-500	 border-2 rounded-md border-gray-100 px-8 py-4 ml-8"
            to="/register"
          >
            Registruotis
          </Link>
        </div>
      </div>
    </div>
  );
}
