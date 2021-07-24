import Image from "next/image";

export default function Example() {
  return (
    <div className="bg-white ">
      <div className="pb-16 bg-green-600 lg:pb-0 lg:z-10 lg:relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
            />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 ">
              <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <Image
                  width="500"
                  height="600"
                  className="object-cover lg:h-full lg:w-full"
                  src="/IMG_4547.jpg"
                  alt="Inbox user interface"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-10 lg:max-w-none">
              <blockquote>
                <div>
                  <svg
                    className="h-12 w-12 text-white opacity-25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-0 text-2xl font-medium text-white">
                    In a trip to India, tragic death came to his life and with
                    it the gift of proof.
                  </p>

                  <p className=" text-xl    text-white">
                    Since then he’s been as focused as any older student can be
                    on the exploration of what’s beyond the mind following the
                    inner arts present in Christian, Hindu, Buddhist, Shaolin
                    and Shamanic philosophies.
                  </p>

                  <p className="mt-6 text-xl mb-5    text-white">
                    It’s always been hard to label him using linear titles like
                    a profession or a career. He’s a backpacker, and has lived
                    as a street arts performer, a Silicon Valley Engineer, a
                    conference speaker for 1000+ audiences, and a surfing beach
                    bum.
                  </p>

                  <p className="mt-8  text-xl    text-white">
                    Roberto was born in a western catholic family and grew up on
                    rural mountains near the city. Half way throw his life he
                    hicked deep into Corcovado on the Osa Peninsula of Costa
                    Rica and discovered a deep connection with mother nature.
                    Hes been living off the grid there ever since.
                  </p>

                  <p className="mt-8 text-xl text-white">
                    An aprentiz to (Shaman) Taita Lucho Flores, student of Sifu
                    Rama from the Blue Mountain and a training member of the
                    self-realization fellowship of Paramhansa Yogananda.
                  </p>

                  <footer className="mt-6">
                    <p className="text-base font-medium text-white">
                      Roberto Rodriguez
                    </p>
                    <p className="text-base font-medium text-green-100">
                      Founder and Guide @ Nature & Mind
                    </p>
                  </footer>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
