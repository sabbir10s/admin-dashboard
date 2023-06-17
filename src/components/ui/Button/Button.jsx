export const ButtonFill = ({ title }) => {
  return (
    <button className="px-[25px] py-[10px] rounded-[5px] text-[10px] md:text-[12px] lg:text-[18px] capitalize font-medium text-white bg-primary-600 hover:bg-primary-500 transition duration-300 ease-out ">
      {title}
    </button>
  );
};
export const ButtonOutline = ({ title }) => {
  return (
    <button className="px-[25px] py-[10px] rounded-[5px] text-[10px] md:text-[12px] lg:text-[18px] capitalize font-medium border border-primary-600 text-primary-600 hover:text-white hover:bg-primary-600 transition duration-300 ease-out ">
      {title}
    </button>
  );
};
