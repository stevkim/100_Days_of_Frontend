import { Outlet } from "@tanstack/react-router";

const SignupPage = () => {
  return (
    <section className="flex h-page w-full items-center justify-center bg-gray-200">
      <Outlet />
    </section>
  );
};

export default SignupPage;
