import { useAccount } from "@components/web3/hooks/useAccount";
import Image from "next/image";

export default function UseInfo() {
  const { account } = useAccount();
  return (
    <>
      <div className="max-w-full mx-auto overflow-hidden">
        <Image
          className="object-cover w-full h-64"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Article"
          width="500"
          height="200px"
        />
        <div className="h-50 w-60 mx-auto py-3">
          <div className="block mx-auto my-4 relative h-20 w-20">
            <Image
              alt="profile"
              src="/profile.jpg"
              className=" object-cover rounded-full"
              height={800}
              width={800}
            />
          </div>
          <div className="flex flex-col text-slate-200 items-center justify-center">
            <span>Address : {account}</span>
          </div>
        </div>
        <section className="text-gray-600 body-font mx-auto ">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-200">
                  26
                </h2>
                <p className="leading-relaxed">Post</p>
              </div>
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-200">
                  500
                </h2>
                <p className="leading-relaxed text-">Followers</p>
              </div>
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-200">
                  35
                </h2>
                <p className="leading-relaxed">Following</p>
              </div>
              
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
