import { Outlet } from "@tanstack/react-router";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center p-20">
        <Outlet />
      </main>
    </>
  );
}

export default App;
