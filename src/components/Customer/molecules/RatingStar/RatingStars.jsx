import { StarIcon } from '@heroicons/react/24/solid';


function RatingStars({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<StarIcon  className='bg:yellow-300' key={i} />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<StarIcon  key={i} className='bg:yellow-300'/>);
    } else {
      stars.push(<StarIcon  className='bg:yellow-300' key={i} />);
    }
  }
  return <>{stars}</>;
}

export default RatingStars;