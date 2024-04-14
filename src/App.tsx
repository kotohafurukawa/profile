import ProfileCard from "./components/ProfileCard";
import UserNameInput from "./components/UserNameInput";
import TellNumberInput from "./components/TellNumber";
import BirthDayInput from "./components/BirthDayInput";
import UploadInput from "./components/UploadInput";

export default function App() {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-large text-center font-bold my-4">
          プロフィール自動生成
        </h1>
        <div className="flex flex-col justify-center gap-8 md:flex-row">
          <ProfileCard />
          <div className="flex flex-col gap-4 md:w-3/6">
            <UserNameInput />
            <BirthDayInput />
            <TellNumberInput />
            <UploadInput />
            <a
              href=""
              download
              className="block p-2 border rounded bg-green-500 text-white text-center"
            >
              Download as PNG
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
