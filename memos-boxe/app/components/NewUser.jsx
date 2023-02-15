import { Link } from "@remix-run/react";
function NewUser() {
  return (
    <form className="flex flex-col w-[250px]" action="">
      <input
        className=" focus:outline-none focus:border-sky-500 border-2 rounded-md border-gray-300 shadow-sm mb-2 p-2"
        type="text"
        name="first-name"
        placeholder="Vardas"
      />
      <input
        className="focus:outline-none focus:border-sky-500 border-2 rounded-md border-gray-300 shadow-sm mb-2 p-2"
        type="text"
        name="last-name"
        placeholder="Pavardė"
      />
      <input
        className="focus:outline-none focus:border-sky-500 border-2 rounded-md border-gray-300 shadow-sm mb-2 p-2"
        type="email"
        name="email"
        placeholder="Jusu elektroninis paštas"
      />
      <input
        className="focus:outline-none focus:border-sky-500 border-2 rounded-md border-gray-300 shadow-sm mb-6 p-2"
        type="password"
        name="password"
        placeholder="Slaptažodis"
      />
      <button className="text-gray-100 border-[1px] rounded-md border-gray-200 bg-sky-500  mb-2  p-2 ">
        Registruotis
      </button>
      <p className="text-gray-700">
        <Link to="/userSingIn">Prisijungti</Link>
      </p>
    </form>
  );
}

export default NewUser;
