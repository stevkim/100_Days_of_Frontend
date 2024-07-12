import Button from "./ui/Button";
import { Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";

const EmailBtn = () => {
  return (
    <Link to={"email"}>
      <Button className="w-full shadow-sm">
        <Mail size={16} className="mr-1" />
        Sign up with Email
      </Button>
    </Link>
  );
};

export default EmailBtn;
