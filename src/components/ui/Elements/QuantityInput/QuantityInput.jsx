const QuantityInput = () => {
  return (
    <div className="w-32 flex h-8 items-stretch text-gray-600 dark:text-gray-300">
      <button className="flex items-center justify-center rounded-l-md bg-gray-200 dark:bg-gray-800/50 dark:hover:bg-gray-800 px-4 transition hover:bg-gray-400 hover:text-white">
        -
      </button>
      <div className="flex w-full items-center justify-center bg-gray-100 dark:bg-gray-600 dark:text-white px-4 text-xs uppercase transition">
        1
      </div>
      <button className="flex items-center justify-center rounded-r-md bg-gray-200 dark:bg-gray-800/50 dark:hover:bg-gray-800 px-4 transition hover:bg-gray-400 hover:text-white">
        +
      </button>
    </div>
  );
};

export default QuantityInput;
