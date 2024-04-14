import { Input } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "../reducks/hooks";
import { setName } from "../reducks/slices";

export default function UserNameInput() {
  const state = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();
  return (
    <>
      <Input
        type="text"
        label="お名前"
        placeholder="お名前を入力してください。"
        labelPlacement="outside"
        value={state.userName}
        onChange={(event) => {
          dispatch(setName(event.target.value));
        }}
      />
    </>
  );
}
