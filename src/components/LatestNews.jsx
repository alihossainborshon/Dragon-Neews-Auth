import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
  return (
    <div className="flex  items-center py-2 bg-gray-200 rounded-md">
      <p className="bg-[#D72050] text-base-100 px-3 py-1 mx-3 rounded-md">Latest</p>
      <Marquee pauseOnHover={true} speed={70} className="">
        <Link className="mr-8" to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, tempora.
        </Link>
        <Link className="mr-8" to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, tempora.
        </Link>
        <Link className="mr-8" to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, tempora.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;