// import download from "../assets/icons/download.png";
// import download from "../../../assets/icons/download.png";

interface ActionProps {
    text: string;
    icon: string;
    wrapperClassname?: string;
    imgClassname?: string;
}

export default function Actions({ text, icon, wrapperClassname, imgClassname }: ActionProps) {
  return (
    <div className={`h-[36px] flex items-center justify-center text-white rounded-md text-xs gap-x-3 w-fit px-5 cursor-pointer ${wrapperClassname}`}>
      <img src={icon} alt="icon" className={`${imgClassname}`} />
      <p>{text}</p>
    </div>
  );
}
