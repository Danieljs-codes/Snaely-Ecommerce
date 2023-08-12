import LinkButton from "./LinkButton.jsx";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

function NewArrivalCard({ img, text, path }) {
  return (
    <div>
      <div className="relative bg-[#DADADA]">
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(7, 7, 7, 0.00) 40.67%, rgba(7, 7, 7, 0.25) 71.91%)",
          }}
          className="absolute inset-0"
        ></div>
        <img className="z-10" src={img} alt={`Dress ${text}`} />
        <div className="absolute bottom-0 z-20 flex w-full items-center justify-between px-4 py-4">
          <h3 className="font-neue text-2xl text-white lg:text-[2.625rem] xl:text-[3.25rem]">
            {text}
          </h3>
          <LinkButton
            icon={
              <ArrowUpRightIcon className="h-4 w-4 text-primary-black-500" />
            }
            text="Shop Now"
            path={path}
          />
        </div>
      </div>
    </div>
  );
}

export default NewArrivalCard;
