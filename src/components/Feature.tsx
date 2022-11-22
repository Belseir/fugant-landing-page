import { Icon } from "@iconify/react";

interface FeatureProps extends React.PropsWithChildren {
  icon: string;
}

const Feature: React.FunctionComponent<FeatureProps> = ({ icon, children }) => {
  return (
    <div className="flex flex-row items-center gap-5">
      <Icon
        className="bg-[#102229] text-[#2C5364] drop-shadow-lg rounded p-2 w-12 h-12 md:w-16 md:h-16"
        icon={icon}
      />
      <p className="text-[#D9D9D9] font-bold text-xl md:text-2xl drop-shadow-lg">
        {children}
      </p>
    </div>
  );
};

export default Feature;
