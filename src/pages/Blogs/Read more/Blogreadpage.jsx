import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Blogreadpage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, date, tag, img, body } = location.state || {};

  const handleBack = () => {
    navigate("/blogs"); 
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="my-20 min-h-screen flex justify-center items-center py-10 px-4">
      <div className="bg-white rounded-lg shadow-lg max-w-5xl w-full">
        <div className="p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{title}</h1>
          <p className="text-gray-500 text-lg mb-4">{date} | {tag}</p>
          <div className="flex justify-center mb-6">
            <img
              className="rounded-lg max-w-full h-auto shadow-md"
              src={img}
              alt={title}
            />
          </div>
          <div className="prose lg:prose-xl text-gray-700 text-left m-auto" dangerouslySetInnerHTML={{ __html: body }} />
          <div className="flex justify-start mt-6">
            <Link to="/blogs">
              <button
                className="bg-[#4CAF50] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#45a049] transition duration-300"
                onClick={handleBack}
              >
                Back to Blogs
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogreadpage;
