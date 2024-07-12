import SignupHeader from "./components/SignupHeader";
import GoogleBtn from "./components/GoogleBtn";
import EmailBtn from "./components/EmailBtn";
import RedirectToLogin from "./components/RedirectToLogin";

const SignupIndexPage = () => {
  return (
    <div className="flex max-w-[500px] flex-col gap-4 rounded-xl bg-white px-6 py-4">
      <SignupHeader />
      <GoogleBtn />
      <EmailBtn />
      <RedirectToLogin />
    </div>
  );
};

export default SignupIndexPage;
