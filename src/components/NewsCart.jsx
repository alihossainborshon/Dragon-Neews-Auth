import { FaShareAlt, FaBookmark, FaEye } from "react-icons/fa";

const NewsCart = (props = {}) => {
  const {news} = props || {};

  return (
    <div className="card w-full bg-base-100 shadow-lg border border-gray-200 my-5">
      {/* Author Section */}
      <div className="flex items-center justify-between bg-gray-100 p-4">
        {/* Author Info */}
        <div className="flex items-center gap-3">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-12 h-12 rounded-full border border-gray-300"
          />
          <div>
            <h4 className="text-md font-semibold">{news.author.name}</h4>
            <p className="text-sm text-gray-500">{news.author.published_date}</p>
          </div>
        </div>
        {/* Icons */}
        <div className="flex gap-3 text-gray-600">
          <FaBookmark className="cursor-pointer hover:text-blue-600" />
          <FaShareAlt className="cursor-pointer hover:text-blue-600" />
        </div>
      </div>

      {/* Title & Image */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{news.title}</h2>
        <figure>
          <img
            src={news.image_url}
            alt="News Thumbnail"
            className="w-full object-cover rounded-lg"
          />
        </figure>
      </div>

      {/* Description */}
      <div className="px-4 pb-4">
        <p className="text-sm text-gray-600">{news.details.substring(0, 200)}...</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-yellow-500 font-semibold">{news.rating.number} ★</span>
          <div className="flex items-center text-gray-600">
            <FaEye className="mr-1" />
            <span>{news.total_view} Views</span>
          </div>
        </div>
        <button className="btn btn-primary btn-sm mt-4 w-full">Read More</button>
      </div>
    </div>
  );
};

export default NewsCart;