import React from "react";

function Bull() {
  return (
    <div className="mb-16 container mx-auto">
      <div>
        <div className="flex flex-col mt-12 mb-16 items-center justify-center">
          <h1 className="text-center mb-6 text-4xl font-bold">Deadly Bull</h1>

          <div className="mb-4">

            <img
              className="w-4/5 bg-cyan-500 mt-8 mx-auto shadow-lg shadow-gray-300/50  lg:w-3/4"
              src="..\assets\images\project_images\painting_16.png"
              alt="project_image"
            />

            <div className="mt-5 mb-10">
              <p className="text-sm   mx-auto  w-full md:-mt-0 lg:w-2/4   leading-8 text-gray-700  text-center">
              1.05 x 0.75 m. Oil pastels and colored pencils.
              </p>
            </div>
          </div>
          <div className="mb-10">
           
            <p className="text-base  mx-auto mt-10 w-2/3 md:-mt-0 lg:w-2/3 leading-8 text-gray-700  text-center">
             When the bull is defeated in the arena. He always loses spectacularly.
            </p>
          </div>
        </div>
      </div>

              <div className="container w-full mt-16 mx-auto">
            <a className="rounded-lg mx-16 px-6 p-3 mt-12 block bg-blue-500  text-center text-white font-semibold  w-2/3  lg:w-2/5 mx-auto"href="/work">Go to gallery</a>
          </div>
    </div>
  );
}
export default Bull;