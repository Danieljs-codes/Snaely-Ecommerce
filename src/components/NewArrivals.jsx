import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import LinkButton from "./LinkButton";
import NewArrivalCard from "./NewArrivalCard.jsx";

const arrivalCardDetails = [
  {
    img: "Man.png",
    text: "For Man",
    path: "/product",
  },
  {
    img: "Woman.png",
    text: "For Woman",
    path: "/product",
  },
];

function NewArrivals() {
  return (
    <section className="py-12 lg:py-14">
      <div className="mb-6 flex items-center">
        <h2 className="flex-1 font-neue text-[28px]">New Arrivals</h2>

        <LinkButton
          icon={<ArrowUpRightIcon className="h-4 w-4 text-primary-black-500" />}
          text="See All"
          path="/product"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {arrivalCardDetails.map((card, i) => (
          <NewArrivalCard
            key={i}
            img={card.img}
            text={card.text}
            path={card.path}
          />
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;
