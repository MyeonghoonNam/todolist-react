import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from 'react';
import { ErrorType, UseForm } from './types';

const useForm = <T extends object>({
  initialState,
  validate,
  onSubmit,
}: UseForm<T>) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<ErrorType<typeof initialState>>(() =>
    Object.fromEntries(
      Object.entries(initialState).map(([key]) => [[key], null]),
    ),
  );

  const [hasFormError, setHasFormError] = useState(false);

  const propertyLen = useMemo(
    () => Object.keys(initialState).length,
    [initialState],
  );

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((state) => ({ ...state, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const newErrors = validate(values);
      const validPropertyLen = Object.values(newErrors).filter(
        (v) => v === null,
      ).length;

      const isValid = propertyLen === validPropertyLen;

      if (isValid) {
        await onSubmit();
      }

      setHasFormError(!isValid);
      setErrors(newErrors);
    },
    [values, validate, onSubmit, propertyLen],
  );

  return {
    values,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
    hasFormError,
  };
};

export default useForm;
