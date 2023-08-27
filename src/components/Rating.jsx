import React from 'react';

const Rating = ({ rating }) => {
   
  let ratingClass;
  const res = Math.floor(rating)

  if (res >= 8) {
    ratingClass = 'bg-[#34A853]';
  }else if (res >= 6) {
    ratingClass = 'bg-[#FBBC04]';
  } else {
    ratingClass = 'bg-[#CF3721]';
  }

  return (
    <div className={`${ratingClass} h-5 w-5 rounded-full`}>
       {res}
    </div>
  );
};

export default Rating;
