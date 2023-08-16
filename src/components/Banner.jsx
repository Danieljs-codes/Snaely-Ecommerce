import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import LinkButton from './LinkButton';

function Banner() {
  return (
    <div className="relative overflow-hidden  px-5 py-[3.875rem]">
      <img
        className="absolute inset-0 h-full w-full bg-[#070707]/25 object-cover"
        src="banner.png"
        alt="Banner"
      />
      <div className="absolute inset-0 z-10 h-full w-full bg-[#070707]/25"></div>
      <div className="relative z-20 ">
        <h2 className="mb-4 text-center font-neue text-[1.75rem] leading-none text-gray-50 lg:text-[3.25rem]">
          Unlock the Secret to <br />
          Effortless Style
        </h2>
        <p className="mx-auto mb-8 max-w-[40.0625rem] px-2 text-center text-sm leading-[160%] text-gray-50">
          Discover the secret to effortless style and elevate your fashion game
          with our expert tips, style guides, and exclusive offers. Subscribe
          our newsletter to unlock the key fashion success!
        </p>
        <LinkButton
          className="mx-auto w-fit"
          icon={<ArrowUpRightIcon className="h-4 w-4 text-primary-black-500" />}
          text="Join our Newsletter"
          path="/products"
        />
      </div>
    </div>
  );
}

export default Banner;
