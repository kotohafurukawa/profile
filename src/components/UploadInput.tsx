import { Input } from "@nextui-org/react";
import { useAppDispatch } from "../reducks/hooks";
import { setImageData } from "../reducks/slices";

export default function UploadInput() {
  const dispatch = useAppDispatch();

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;

    if (files === null || files.length <= 0) {
      return;
    }

    const file = files[0];
    const reader = new FileReader();
    reader.onload = () => {
      dispatch(setImageData(reader.result as string));
    };
    reader.readAsDataURL(file);
  }

  return (
    <>
      <Input
        type="file"
        label="プロフィール写真"
        placeholder="file"
        labelPlacement="outside"
        accept=".png,.png"
        variant="underlined"
        onChange={onChangeHandler}
      />
    </>
  );
}
