import { useState, forwardRef } from 'react';

const ReviewForm = forwardRef((props, ref) => {
  const [review, setReview] = useState('');

  const handleInputChange = event => {
    setReview(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Submit the review
  };

  return (
    <form ref={ref} onSubmit={handleSubmit}>
      <label>
        Review:
        <input type="text" value={review} onChange={handleInputChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
});

ReviewForm.displayName = 'ReviewForm';

export default ReviewForm;
