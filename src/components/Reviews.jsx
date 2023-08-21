import { UserCircleIcon } from '@heroicons/react/24/solid';
import { formatDateRelativeToToday } from '../utils/helpers';
import StarRatings from './StarRatings';

function Reviews({ ratings, firstName, lastName, review, date, picture }) {
  const formattedDate = formatDateRelativeToToday(new Date(date), 'UK');
  return (
    <>
      <div className="border-b border-grey-100 pb-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <div>
              {picture ? (
                <img
                  className="h-1ll w-11 rounded-full"
                  src={picture}
                  alt={`${firstName} ${lastName}`}
                />
              ) : (
                <UserCircleIcon className="h-11 w-11 text-grey-400" />
              )}
            </div>
            <div>
              <h2 className="font-neue text-xl">{`${firstName} ${lastName}`}</h2>
              <StarRatings rating={ratings} />
            </div>
          </div>
          <p className="text-sm font-medium text-grey-500">{formattedDate}</p>
        </div>
        <p className="text-sm font-medium leading-[160%] text-primary-black-500">
          {review}
        </p>
      </div>
    </>
  );
}
export default Reviews;
