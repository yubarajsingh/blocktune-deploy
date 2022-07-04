import Image from "next/image";

export default function Footer() {

    return (
      <>
        <div className="w-full">
        <div className="w-full flex items-center justify-center bg-red-lightest">
          <div className=" w-full shadow-w-4/5">
            
              <div className="w-full p-4 h-2/3">
                <div className="flex justify-between">
                  <div className="my-auto">
                    <Image
                      className="rounded hidden md:block"
                      height={50}
                      width={50}
                      src="https://tailwindcss.com/img/card-top.jpg"
                      alt="Album Pic"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl text-grey-darkest font-medium">
                      A Sky Full of Stars
                    </h3>
                    <p className="text-sm text-grey mt-1">Ghost Stories</p>
                  </div>
                  <div className="text-red-lighter mt-3">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
                    </svg>
                  </div>

                  <div className="text-grey-darker mt-3">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z" />
                    </svg>
                  </div>
                  <div className="text-grey-darker mt-3">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" />
                    </svg>
                  </div>
                  <div className="text-white p-5 m-0 rounded-full bg-slate-400 shadow-lg">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
                    </svg>
                  </div>
                  <div className="text-grey-darker mt-3">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" />
                    </svg>
                  </div>
                  <div className="text-grey-darker mt-3">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5 4a2 2 0 0 0-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }