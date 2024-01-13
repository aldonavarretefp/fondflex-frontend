import React, { useState } from "react";

interface RoleChoosingProps {
  formState: any;
  nextStep: () => void;
  setFormState: (formState: any) => void;
}

const RoleChoosing: React.FC<RoleChoosingProps> = ({
  formState,
  nextStep,
  setFormState,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({
      ...formState,
      role: selectedRole,
    });
    nextStep();
  };

  const [selectedRole, setSelectedRole] = useState("");
  return (
    <div className="w-full h-full bg-background flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold text-center"></h1>
        <div className="flex flex-col gap-3">
          <button
            className="w-44 p-2 bg-accent text-white rounded-md"
            id="investor"
            onClick={() => setSelectedRole("investor")}
            type="submit"
          >
            Inversionista
          </button>
          <button
            className="w-44 p-2 bg-white text-accent border-accent border-2 rounded-md"
            id="borrower"
            type="submit"
            onClick={() => setSelectedRole("borrower")}
          >
            Prestatario
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoleChoosing;
