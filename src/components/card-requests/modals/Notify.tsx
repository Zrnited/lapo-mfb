import checkmark from "../../../assets/icons/checkmark.png";

interface NotifyProps {
    text: string;
    onContinue?: () => void;
}

export default function Notify({text, onContinue}: NotifyProps) {
  return (
    <div className="w-full h-screen fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-40">
      <div className="w-full h-full fixed top-0 bottom-0 left-0 right-0 bg-[#101828b7] backdrop-blur-md"></div>
      <div className="container absolute z-30 top-1/2 transform -translate-y-1/2 rounded-[10px] bg-white w-[90%] p-5 min-w-[300px] max-w-[400px] h-[232px] flex flex-col justify-between">
        <div className="h-[48px] w-[48px] border-[#EAECF0] p-3 border rounded-lg flex items-center justify-center">
          <img src={checkmark} className="w-full h-fit" alt="icon" />
        </div>
        <div className="flex flex-col gap-y-1">
          <h1 className="text-[#101828] capitalize font-medium text-lg">
            successful
          </h1>
          <p className="text-[#475467] text-sm">
            {text}
          </p>
        </div>
        <button onClick={onContinue} className="bg-[#014DAF] h-[36px] w-[94px] rounded-md text-white capitalize cursor-pointer">
          continue
        </button>
      </div>
    </div>
  );
}
