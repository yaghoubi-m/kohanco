// ReviewComment.js

import React from 'react';

const ReviewComment = ({ username, date, comment }) => {
  return (
      <div className="bg-gray-200 w-full p-4 rounded-md shadow-md mb-4 ">
        <div className="flex flex-col md:flex-row md:items-center md:mb-2">
          <div>
            <h3 className="text-5xl font-semibold">{username}</h3>
          </div>
        </div>
        <p className="text-gray-800 text-4xl">{comment}</p>
      </div>
  );
};

export default ReviewComment;
