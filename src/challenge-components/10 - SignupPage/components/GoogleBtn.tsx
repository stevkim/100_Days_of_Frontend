import Button from "./ui/Button";
import GoogleLogo from "@/assets/10 - SignupPage/google_logo.svg";

const GoogleBtn = () => {
  return (
    <Button variant="outline" className="w-full shadow-sm">
      <img src={GoogleLogo} alt="Google logo" className="mr-1 h-4 w-4" />
      Sign up with Google
    </Button>
  );
};

export default GoogleBtn;
