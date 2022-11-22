import { Icon } from "@iconify/react";

const Feature = ({ text, icon }: { text: string; icon: string }) => {
  return (
    <div className="flex flex-row items-center gap-5">
      <Icon
        className="bg-[#102229] text-[#2C5364] drop-shadow-lg rounded w-12 h-12 md:w-16 md:h-16"
        icon={icon}
      />
      <p className="text-[#D9D9D9] font-bold text-xl md:text-2xl drop-shadow-lg">
        {text}
      </p>
    </div>
  );
};

export default Feature;
