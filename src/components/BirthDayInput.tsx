import React from "react";
import { Input } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "../reducks/hooks";
import { setBirthDay } from "../reducks/slices";

export default function BirthDayInput() {
  const state = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();
  const validateBirthDay = (value: string): boolean => {
    const regexp = /^[1-2]\d{3}-[0-1]\d{1}-[0-3]\d{1}$/;
    return regexp.test(value);
  };

  const isInvalid = React.useMemo(() => {
    if (state.birth__day === "") return false;

    return !validateBirthDay(state.birth__day);
  }, [state.birth__day]);

  return (
    <>
      <Input
        type="date"
        label="お誕生日"
        placeholder="お誕生日を入力してください"
        labelPlacement="outside"
        value={state.birth__day}
        onChange={(event) => {
          dispatch(setBirthDay(event.target.value));
        }}
        isInvalid={isInvalid}
        errorMessage={isInvalid && "お誕生日を入力してください"}
      />
    </>
  );
}
