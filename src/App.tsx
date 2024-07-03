import { Outlet } from "@tanstack/react-router";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center pt-[50px]">
        <Outlet />
      </main>
    </>
  );
}

export default App;
