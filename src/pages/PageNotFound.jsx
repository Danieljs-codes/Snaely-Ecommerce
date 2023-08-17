import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import LinkButton from '../components/LinkButton';

function PageNotFound() {
  return (
    <main className="h-screen">
      <div className="">
        <img
          className="mx-auto h-1/2 w-1/2"
          src="404.svg"
          alt="Page Not Found"
        />
        <div className="flex flex-col items-center text-center font-neue">
          <h1 className="text-[6.875rem]">404</h1>
          <h2 className="-mt-12 text-[3.5rem]">Fashion Lost in Cyberspace</h2>
          <p className="max-w-[46.25rem] font-sans text-gray-500">
            Oops! It looks like the style you're searching for has done a
            disappearing act. While we work our magic to find it, why not
            explore more stunning fashion on our homepage? Happy shopping!
          </p>
          <LinkButton
            className="mx-auto mt-2 w-fit"
            icon={
              <ArrowUpRightIcon className="h-4 w-4 text-primary-black-500" />
            }
            text="Go Back Home"
            path="/"
          />
        </div>
      </div>
    </main>
  );
}
export default PageNotFound;
