const QuantityInput = ({ handleDecreaseCart, handleIncreaseCart, item }) => {
  return (
    <div className="w-32 flex h-8 items-stretch text-gray-600 dark:text-gray-300">
      <button
        onClick={() => handleDecreaseCart(item)}
        className="flex items-center justify-center rounded-l-md bg-gray-200 dark:bg-gray-800/50 dark:hover:bg-gray-800 px-4 transition hover:bg-gray-400 hover:text-white"
      >
        &minus;
      </button>
      <div className="flex w-full items-center justify-center bg-gray-100 dark:bg-gray-600 dark:text-white px-4 text-xs uppercase transition">
        1
      </div>
      <button
        onClick={() => handleIncreaseCart(item)}
        className="flex items-center justify-center rounded-r-md bg-gray-200 dark:bg-gray-800/50 dark:hover:bg-gray-800 px-4 transition hover:bg-gray-400 hover:text-white"
      >
        &#43;
      </button>
    </div>
  );
};

export default QuantityInput;
