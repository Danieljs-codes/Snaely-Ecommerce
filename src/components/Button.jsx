import { twMerge } from 'tailwind-merge';

function Button({ disabled, children, isLoading, className, ...rest }) {
  return (
    <button
      {...rest}
      className={twMerge(
        'mt-10 flex w-full items-center justify-center rounded-full bg-primary-black-500 py-4 text-center text-base font-medium text-white',
        className
      )}
      disabled={disabled}
    >
      {isLoading ? (
        <span className="animate-spin">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM2.4 12C2.4 17.3019 6.69807 21.6 12 21.6C17.3019 21.6 21.6 17.3019 21.6 12C21.6 6.69807 17.3019 2.4 12 2.4C6.69807 2.4 2.4 6.69807 2.4 12Z"
              fill="#323232"
            />
            <path
              d="M12 -5.24537e-07C13.5759 -5.9342e-07 15.1363 0.310389 16.5922 0.913445C18.0481 1.5165 19.371 2.40041 20.4853 3.51472C21.5996 4.62902 22.4835 5.95189 23.0866 7.4078C23.6896 8.86371 24 10.4241 24 12L21.6 12C21.6 10.7393 21.3517 9.49096 20.8692 8.32624C20.3868 7.16151 19.6797 6.10322 18.7882 5.21177C17.8968 4.32033 16.8385 3.6132 15.6738 3.13076C14.509 2.64831 13.2607 2.4 12 2.4L12 -5.24537e-07Z"
              fill="#CDCDCD"
            />
          </svg>
        </span>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
