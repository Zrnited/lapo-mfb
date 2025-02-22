interface ActionProps {
    text: string;
    icon: string;
    disabled: boolean;
    initiateFn?(): void
    wrapperClassname?: string;
    imgClassname?: string;
}

export default function Actions({ text, icon, wrapperClassname, imgClassname, disabled, initiateFn }: ActionProps) {
  return (
    <button onClick={initiateFn} disabled={disabled} className={`h-[36px] flex items-center justify-center text-white rounded-md text-xs gap-x-3 w-fit px-5 cursor-pointer disabled:cursor-default disabled:opacity-60 ${wrapperClassname}`}>
      <img src={icon} alt="icon" className={`${imgClassname}`} />
      <p>{text}</p>
    </button>
  );
}
