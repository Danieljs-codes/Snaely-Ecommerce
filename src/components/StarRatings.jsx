import { useStarRatings } from '../hooks/useStarRatings';
import { StarIcon } from '@heroicons/react/24/solid';

function StarRatings({ rating }) {
  // const { filledStarIcons, emptyStarIcons } = useStarRatings(rating);

  const MAX_RATING = 5;

  const filledStarIcons = Array.from({ length: rating });
  const emptyStarIcons = Array.from({ length: MAX_RATING - rating });
  console.log(filledStarIcons);

  return (
    <div className="flex items-center">
      {filledStarIcons.map((_, index) => (
        <StarIcon key={index} className="h-4 w-4 text-yellow-500" />
      ))}
      {emptyStarIcons.map((_, index) => (
        <StarIcon key={index} className="h-4 w-4 text-gray-400" />
      ))}
    </div>
  );
}
export default StarRatings;
