import Login from "../components/Login";
//import db from "../../sevices/bdConnect";

export default function UserSingIn() {
  return (
    <main className="h-screen flex justify-center	items-center bg-gray-300 ">
      <div className="flex justify-center rounded-lg bg-gray-100 w-[300px] h-[230px] shadow pt-6 pb-8">
        <Login />
      </div>
    </main>
  );
}

export async function action() {}
