import ToggleSwitch from "./ToggleSwitch";

const Settings = () => {
  return (
    <>
      <h4 className="mb-2 text-xs">SETTINGS</h4>
      <div className="flex flex-col gap-4">
        <ToggleSwitch name="Includes uppercase letters" type="uppercase" />
        <ToggleSwitch name="Includes lowercase letters" type="lowercase" />
        <ToggleSwitch name="Includes numbers" type="numbers" />
        <ToggleSwitch
          name="Includes special characters"
          type="specialCharacters"
        />
      </div>
    </>
  );
};

export default Settings;
