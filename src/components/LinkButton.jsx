import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

function LinkButton({ text, icon, path, className }) {
  return (
    <Link
      className={twMerge(
        'flex items-center gap-x-2 rounded-full border border-primary-black-500 px-6 py-3 text-xs font-medium md:text-sm lg:text-base',
        className
      )}
      to={path}
    >
      {text}
      {icon}
    </Link>
  );
}

export default LinkButton;
