const QuantityInput = ({ handleDecreaseCart, handleIncreaseCart, item }) => {
  return (
    <div className="w-32 flex items-center gap-3 text-gray-600 dark:text-gray-300">
      <button
        onClick={() => handleDecreaseCart(item)}
        className="text-lg font-semibold border border-gray-500 dark:border-gray-300 hover:border-gray-800 dark:hover:border-gray-200 duration-300 rounded-full h-7 w-7 flex items-center justify-center"
      >
        &minus;
      </button>
      <div className="">1</div>
      <button
        onClick={() => handleIncreaseCart(item)}
        className="text-lg font-semibold border border-gray-500 dark:border-gray-300 hover:border-gray-800 dark:hover:border-gray-200 duration-300 rounded-full h-7 w-7 flex items-center justify-center"
      >
        &#43;
      </button>
    </div>
  );
};

export default QuantityInput;
