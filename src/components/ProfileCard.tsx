import { Card, CardBody, Avatar } from "@nextui-org/react";
import { useAppSelector } from "../reducks/hooks";

export default function ProfileCard() {
  const state = useAppSelector((state) => state.profile);
  return (
    <Card className="md:w-3/6 mb-auto">
      <CardBody className="flex flex-col items-center gap-4">
        <Avatar src={state.imageData} size="lg" />
        <p className="flex w-full">
          <span className="min-w-20">お名前:</span>
          <span className=" text-wrap">{state.userName}</span>
        </p>
        <p className="flex w-full">
          <span className="min-w-20">お誕生日:</span>
          <span>{state.birth__day}</span>
        </p>
        <p className="flex w-full">
          <span className="min-w-20">電話番号:</span>
          <span>{state.tellNumber}</span>
        </p>
      </CardBody>
    </Card>
  );
}
