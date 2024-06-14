import React from 'react'

const AdmCard = ({ admin, row }) => {
  return (
    <>
      <section>
        {/* Card for larger screens */}
        <div className={`hidden md:flex h-96 mb-5 flex-row ${row}`}>
          <div className="w-1/4 md:w-1/6 bg-[#15281f] post border flex justify-center items-center text-2xl md:text-3xl lg:text-4xl font-light">
            <div className='-rotate-90'>{admin.role}</div>
          </div>
          <div className="w-1/2 md:w-3/6 p-6 relative border text-color flex justify-start items-center bg-[#eafbea]">
            <img src={admin.image} className="w-32 md:w-72 h-32 md:h-72 rounded-xl" alt="Logo" />
            <h1 className="text-5xl font-extrabold px-5 w-full ">
              <span className="text-[#254336]">{admin.name}</span>
            </h1>
          </div>
          <div className="w-1/4 md:w-2/6 border text-5xl md:text-6xl lg:text-7xl font-bold flex justify-center items-center post fade-green-bg">
            <span>{admin.unicode}</span>
          </div>
        </div>

        {/* Card for small screens */}
        <div className="flex flex-col md:hidden h-auto mb-5 border">
          <div className="w-full bg-[#15281f] post border flex justify-center items-center text-2xl font-light py-2">
            {admin.role}
          </div>
          <div className="w-full p-4 relative border text-color flex flex-col justify-center items-center bg-[#eafbea]">
            <img src={admin.image} className="border w-48 h-48 mb-4" alt="Logo" />
            <h1 className="text-3xl font-extrabold pb-2">
              {admin.name}
            </h1>
          </div>

        </div>
      </section>


    </>
  )
}

export default AdmCard
