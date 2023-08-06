function ErrorMessage({ message }) {
  return (
    <p className="text-[10px] text-red-500 md:text-sm lg:text-base">
      {message}
    </p>
  );
}

export default ErrorMessage;
