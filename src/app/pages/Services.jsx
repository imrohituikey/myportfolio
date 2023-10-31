import React from "react";

const Services = () => {
  return (
    <div
      id="services"
      className="px-6 md:px-[12rem] bg-[#02050A] text-white  flex flex-col justify-center items-center gap-4"> 
      <h1 className="self-center text-2xl py-3">My Skills</h1>
      <div className="flex flex-col gap-4">
        <div className="items-center text-center">
          <h1 className="md:text-5xl uppercase link transition ease-in-out rounded-full">
            What I do
          </h1>
        </div>
      </div>

      <div className="flex flex-col justify-between w-full gap-6">
        <div className="flex flex-col md:flex-row  justify-between gap-6">
          <div className="bg-[#09101A] flex flex-col p-12 justify-around border rounded-md gap-4">
            <div className="pb-2 w-[10rem] border-b-2 border-teal">
              <h1>Creative Agency 01</h1>
            </div>
            <div>Framer Designer & Developer</div>
            <div>2019 - Present</div>
            <div className="w-[auto]">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit sed thisnquia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt
            </div>
          </div>

          <div className="bg-[#09101A] flex flex-col p-12 justify-around border rounded-md gap-4">
            <div className="pb-2 w-[10rem] border-b-2 border-teal">
              <h1>Creative Agency 01</h1>
            </div>

            <div>Framer Designer & Developer</div>
            <div>2019 - Present</div>
            <div className="w-[auto]">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit sed thisnquia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:flex justify-between gap-6">
          <div className=" bg-[#09101A] flex flex-col p-12 justify-around border rounded-md gap-4">
            <div className="pb-2 w-[10rem] border-b-2 border-teal">
              <h1>Creative Agency</h1>
            </div>
            <div>Framer Designer & Developer</div>
            <div>2019 - Present</div>
            <div className="w-[auto]">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit sed thisnquia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt
            </div>
          </div>

          <div className="bg-[#09101A] flex flex-col p-12 justify-around border rounded-md gap-4">
            <div className="pb-2 w-[10rem] border-b-2 border-teal">
              <h1>Creative Agency</h1>
            </div>

            <div>Framer Designer & Developer</div>
            <div>2019 - Present</div>
            <div className="w-[auto]">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit sed thisnquia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
