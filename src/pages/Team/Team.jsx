import React from "react";
import MemberCard from "../../components/Member-Card/MemberCard";

const Team = () => {
  return <div>
    <>
      <main>
        <div className='team-bg h-96 bg-black bg-cover bg-center flex flex-col items-start justify-end '>
          <div className='text-white pl-44 font-bold  text-6xl '>
            MEET
          </div>
          <div
            className='h-1/4 flex pl-44 w-full bg-indigo-950 bg-opacity-50 '>
            <div className='text-6xl  pt-0 font-bold text-green-500'>
              THE TEAM
            </div>
          </div>
        </div>
      </main>
      <section>
        <div className='text-center p-10 split-bg '>
          <h2 className='text-4xl  font-semibold  pb-5'>
            Great work requires great people, and we think ours are some of the best
          </h2>
          <p className=' text-xl '>
            Welcome to the Android Club! We are a group of passionate developers, designers, and enthusiasts dedicated to exploring and innovating within the Android ecosystem.
            Our diverse team brings together a wealth of experience and a shared commitment to pushing the boundaries of mobile technology.
          </p>
          <section id='admin'>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
              <h1 className='text-2xl font-semibold '>
                ADMIN
              </h1>
              <MemberCard />
              <MemberCard />
              <MemberCard />
              
            </div>
          </section>
          <section id='executive board'>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
              <h1 className='text-2xl font-semibold '>
                Executive Board
              </h1>
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
            </div>
          </section>
          <hr className="border-t-4 rounded-md mt-10 border-black" />
          <section id='android'>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
              <h1 className='text-2xl font-semibold '>
                Android
              </h1>
              <MemberCard />
              <MemberCard />
            </div>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
            <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
            </div>
          </section>
          <hr className="border-t-4 rounded-md mt-10 border-black" />
          <section id='ui/ux'>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
              <h1 className='text-2xl font-semibold '>
                UI/UX
              </h1>
              <MemberCard />
              <MemberCard />
                  
            </div>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
            <MemberCard />
             
            </div>
          </section>
          <hr className="border-t-4 rounded-md mt-10 border-black" />
          <section id='sdc'>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
              <h1 className='text-2xl font-semibold '>
                SDC
              </h1>
              <MemberCard />
              <MemberCard />          
            </div>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
            <MemberCard />
              <MemberCard />
              <MemberCard />
            </div>
          </section>
          <hr className="border-t-4 rounded-md mt-10 border-black" />
          <section id='rnd'>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
              <h1 className='text-2xl font-semibold '>
                RESEARCH AND DEVELOPMENT
              </h1>
              <MemberCard />
              <MemberCard />
              <MemberCard />         
            </div>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
            <MemberCard />
              <MemberCard />
              <MemberCard />
            </div>
          </section>
          <hr className="border-t-4 rounded-md mt-10 border-black" />
          <section id='fnd'>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
              <h1 className='text-2xl font-semibold '>
                FINANCE AND DOCUMENTATION
              </h1>
              <MemberCard />
              <MemberCard />
                     
            </div>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
            <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
            </div>
          </section>
          <hr className="border-t-4 rounded-md mt-10 border-black" />
          <section id='evm'>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
              <h1 className='text-2xl font-semibold '>
                EVENT MANAGEMENT
              </h1>
              <MemberCard />
              <MemberCard />            
            </div>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
            <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
            <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
             
            </div>
          </section>
          <hr className="border-t-4 rounded-md mt-10 border-black" />
          <section id='pr'>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
              <h1 className='text-2xl font-semibold '>
                PR AND OUTREACH
              </h1>
              <MemberCard />
              <MemberCard />           
            </div>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
            <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
            </div>
          </section>
          <hr className="border-t-4 rounded-md mt-10 border-black" />
          <section id='con'>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
              <h1 className='text-2xl font-semibold '>
                CONTENT
              </h1>
              <MemberCard />
              <MemberCard />       
            </div>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
            <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
            </div>
          </section>
          <hr className="border-t-4 rounded-md mt-10 border-black" />
          <section id='design'>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
              <h1 className='text-2xl font-semibold '>
                DESIGN
              </h1>
              <MemberCard />
              <MemberCard />            
            </div>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
            <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
            </div>
          </section>
          <hr className="border-t-4 rounded-md mt-10 border-black" />
          <section id='media'>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
              <h1 className='text-2xl font-semibold '>
                MEDIA
              </h1>
              <MemberCard />
              <MemberCard />           
            </div>
            <div className=' mt-20 h-fit flex flex-row justify-evenly items-center p-2' >
            <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
        
            </div>
          </section>
        </div>
      </section>


    </>
  </div>;
};

export default Team;
