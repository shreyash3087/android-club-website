import React,{useEffect} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Blogreadpage = () => {
  const location = useLocation();
  const history = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const { title, date, tag, img, body } = location.state || {};

  const handleBack = () => {
    history.push("/blogs"); // Adjust the route according to your application's routing
  };
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="bg-[#96BE96] pt-5 min-h-[100vh] w-full flex justify-center items-center">
      <div className="rounded-xl bg-[#E6F1E8] min-h-[80vh] w-[95vw]">
        <h3 className="p-[20px] text-[#254336] text-5xl font-semibold">{title}</h3>
        <div className="flex justify-center">
          <img
            className="items-center rounded-lg h-[500px] w-[1275px] mb-4"
            src={img}
            alt={title}
          />
        </div>
        <div>
          <p className="p-10 text-left text-black text-2xl whitespace-pre-wrap">{body}</p>
          <div>
            <Link to='/blogs'>
            <button
              className="flex flex-start ml-[35px] mb-5 p-5 text-l rounded-lg bg-[#96BE96]"
              onClick={handleBack}
            >
              Back to blogs
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogreadpage;
