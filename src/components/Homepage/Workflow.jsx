import { CheckCircle2 } from "lucide-react";
import codeImg from "/src/assets/code.png";
import { checklistItems } from "/src/constants";

const Workflow = () => {
  return (
    <div className="relative border-b border-neutral-800 flex flex-col justify-center items-center min-h-[800px] mt-10">
      

      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center pt-6 pb-6 tracking-wide text-white bg-[#254336] w-full mb-6">
        Build your{" "}
        <span className="text-[#3ab680]">
          Skills {" "}
        </span>
        With us!
      </h2>
      <br/>
      <div className="flex flex-wrap justify-center w-[80%]">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="Coding" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="mx-6 bg-[#254336] h-10 w-10 p-2 max-sm:my-2 max-sm:mx-0 max-sm:mr-4 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl text-[#254336] max-sm:text-left">{item.title}</h5>
                <p className="text-md text-gray-500 max-sm:text-justify">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
