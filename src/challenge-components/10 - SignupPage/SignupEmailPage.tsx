import SignupHeader from "./components/SignupHeader";
import RedirectToLogin from "./components/RedirectToLogin";
import Button from "./components/ui/Button";
import GoogleBtn from "./components/GoogleBtn";
import Separator from "@/components/Separator";
import Input from "./components/ui/Input";

const SignupEmailPage = () => {
  return (
    <div className="flex max-w-[500px] flex-col gap-4 rounded-xl bg-white px-6 py-4">
      <SignupHeader />
      <Input name="Name" />
      <Input name="Email" />
      <Input name="Password" type="password" />
      <Button className="mt-2 w-full shadow-md">Sign up</Button>
      <RedirectToLogin />
      <div className="relative">
        <Separator />
        <div className="absolute top-1 w-full text-center text-gray-500">
          <span className="bg-white">or</span>
        </div>
      </div>
      <GoogleBtn />
    </div>
  );
};

export default SignupEmailPage;
