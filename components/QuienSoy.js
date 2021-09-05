import Image from "next/image";

export default function QuienSoy() {
  return (
    <div className="relative  ">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 grid grid-cols-1 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className=" order-2 px-4 max-w-xl mx-auto sm:px-6 lg:pt-1 lg:max-w-none lg:mx-0 lg:px-0">
          <div>
            <div className="mt-1 pb-20">
              <h2 className="text-3xl  font-light tracking-tight text-gray-600">
                Roberto - Founder
              </h2>
              <p className="mt-4 text-md text-gray-500">
                Roberto was born in a western catholic family and grew up on the
                rural mountains near the city. Half way throw his life he moved
                to the remote off-grid jungles of Corcovado on the south of
                Costa Rica.
              </p>

              <p className="mt-4 text-md text-gray-500">
                It’s always been hard to label him using linear titles like a
                profession or a career. He’s a backpacker, and has lived as a
                street poet, mayored in aeroespace engineering and worked as a
                Silicon Valley Engineer, a native flute player, a conference
                speaker for 1000+ audiences that has given up all material
                posessions and moved to a camping tent on the beach - twice.
              </p>

              <p className="mt-4 text-md text-gray-500">
                At age 38 he experieced a seriuos mental health crisis from a
                condition he carried since childhood, he healed himself using a
                combination of technics he been training on including Hindu,
                Buddhist, Shaolin, Shamanic and Traditional Psyquiatry with
                medications.
              </p>

              <p className="mt-4 text-md text-gray-500">
                This lead him to a full time dedication to the interior arts and
                the development of the Nature and Mind program.
              </p>
            </div>
          </div>
        </div>
        <div className="order-1 ">
          <div className="lg:px-0 p-10 lg:relative lg:h-full">
            <Image
              width="500"
              height="600"
              className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5  lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src="/IMG_4547.jpg"
              alt="Inbox user interface"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
