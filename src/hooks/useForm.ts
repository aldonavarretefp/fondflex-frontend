import { useEffect, useMemo, useState } from "react";

type FormState<T> = T;
type FormValidations<T> = {
  [Property in keyof T]?: [Function, string];
};

export const useForm = <T extends Object>(
  initialForm: FormState<T>,
  formValidations: FormValidations<T> = {}
) => {
  const [formState, setFormState] = useState<FormState<T>>(initialForm);
  
  const [formValidation, setFormValidation] = useState<
    Record<string, string | null>
  >({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const isFormValid: boolean = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }

    return true;
  }, [formValidation]);

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target as any;
    console.log({name, value});
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckedValues: Record<string, string | null> = {};

    for (const formField in formValidations) {
        const [validator, errorMessage] = formValidations[formField]!;
        const formValue = formState[formField];
    
        if (validator(formValue)) {
            formCheckedValues[formField] = null;
        } else {
            formCheckedValues[formField] = errorMessage;
        }
    }

    setFormValidation(formCheckedValues);
  };

  return {
    ...formState,
    formState,
    setFormState,
    onInputChange,
    onResetForm,

    ...formValidation,
    isFormValid,
  };
};
