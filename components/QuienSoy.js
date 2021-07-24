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
              <p className="mt-4 text-lg text-gray-500">
                Roberto was born in a western catholic family and grew up on the
                rural mountains near the city. Half way throw his life he moved
                to the remote off-grid jungles of Corcovado on the south of
                Costa Rica.
              </p>

              <p className="mt-4 text-lg text-gray-500">
                It’s always been hard to label him using linear titles like a
                profession or a career. He’s a backpacker, and has lived as a
                street arts performer, a Silicon Valley Engineer, a conference
                speaker for 1000+ audiences, and a surfing beach bum.
              </p>

              <p className="mt-4 text-lg text-gray-500">
                There’s a moment where tragic death came to his life while in
                India and with it the gift of proof. Since then he’s been as
                focused as any older student can be on the exploration of what’s
                beyond the mind following the inner arts present in Christian,
                Hindu, Buddhist, Shaolin and Shamanic philosophies.
              </p>

              <p className="mt-4 text-lg text-gray-500">
                An aprentiz to (Shaman) Taita Lucho Flores, student of Sifu Rama
                from the Blue Mountain and a training member of the
                self-realization fellowship of Paramhansa Yogananda.
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
