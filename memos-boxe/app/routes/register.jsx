import NewUser from "../components/NewUser";

export default function Register() {
  return (
    <main className="h-screen flex justify-center	items-center bg-gray-300 ">
      <div className="flex justify-center rounded-lg bg-gray-100 w-[300px] h-[350px] shadow pt-6 pb-8">
        <NewUser />
      </div>
    </main>
  );
}
