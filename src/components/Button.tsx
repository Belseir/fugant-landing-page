const Button = ({ content }: { content: string }) => {
  return (
    <button className="py-3 px-10 text-xl text-white flex flex-wrap items-center  rounded-lg border-2 border-[#19608A] bg-[#2FA9F0] text-secondary shadow-[0_0.2rem_00#19608A] outline-none transition-all  hover:-translate-y-1 hover:shadow-[0_0.4rem_00#19608A] active:translate-y-1 active:shadow-[0_0rem_00#19608A]">
      {content}
    </button>
  );
};

export default Button;
