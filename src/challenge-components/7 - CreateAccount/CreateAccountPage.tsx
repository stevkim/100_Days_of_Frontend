import CreateForm from "./CreateForm";
import "./createAccount.css";

const CreateAccountPage = () => {
  return (
    <section className="page-bg h-page flex w-full items-center">
      <div className="flex h-full w-full items-center justify-center p-8 md:w-[60%]">
        <CreateForm />
      </div>
    </section>
  );
};

export default CreateAccountPage;
