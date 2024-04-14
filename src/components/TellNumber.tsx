import React from "react";
import { Input } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "../reducks/hooks";
import { setTellNumber } from "../reducks/slices";

export default function TellNumberInput() {
  const state = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();
  const validateTellNumber = (value: string): boolean => {
    const regExp = /\d{2,4}-\d{3,4}-\d{3,4}/;
    return regExp.test(value);
  };

  const isInvalid = React.useMemo(() => {
    if (state.tellNumber === "") return false;

    return !validateTellNumber(state.tellNumber);
  }, [state.tellNumber]);

  return (
    <Input
      type="tel"
      label="電話番号"
      placeholder="090-××××-●●●●"
      labelPlacement="outside"
      maxLength={13}
      value={state.tellNumber}
      onChange={(event) => {
        dispatch(setTellNumber(event.target.value));
      }}
      isInvalid={isInvalid}
      errorMessage={isInvalid && "正しい電話番号を入力してください"}
      color={isInvalid ? "danger" : "default"}
    />
  );
}
