import React, { useState } from 'react';
import RoleChoosing from './RoleChoosing';
import { useForm } from '../../hooks';
import BasicInfoForm from './BasicInfoForm';

interface RegistrationCarouselProps {
  nextStep: () => void;
  currentStep: number;
}

const initialFormData = {
  // initial form data structure
  name: "",
  surname: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  phone: "",
  role: "",
  termsAndConditions: false,

};

const RegistrationCarousel: React.FC<RegistrationCarouselProps> = ({ currentStep, nextStep }) => {
  
  const { name, onInputChange, setFormState, formState }= useForm(initialFormData);

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  switch (currentStep) {
    case 1:
      return (
        <RoleChoosing nextStep={nextStep} setFormState={setFormState} formState={formState}/>
      );
    case 2:
      return (
        <BasicInfoForm
          nextStep={nextStep}
          setFormState={setFormState}
          formState={formState}
        />
      );
    // ...case for other steps
    default:
      return <div>Registration Complete</div>;
  }
}

export default RegistrationCarousel

// ...import other steps