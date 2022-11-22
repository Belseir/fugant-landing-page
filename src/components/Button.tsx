import { twMerge } from "tailwind-merge";

const Button = ({
  content,

  className,
  onClick,
}: {
  content: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={twMerge(
        `py-3 px-10 text-xl text-white justify-center flex flex-wrap items-center rounded-lg border-2 border-[#19608A] bg-[#2FA9F0] text-secondary shadow-[0_0.2rem_00#19608A] outline-none transition-all  hover:-translate-y-1 hover:shadow-[0_0.4rem_00#19608A] active:translate-y-1 active:shadow-[0_0rem_00#19608A]`,
        className
      )}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
