export default function Button({ children, ...rest }) {
  return (
    <div className="items-center hidden space-x-4 lg:flex">
      <button
        {...rest}
        className={`border px-4 py-1 uppercase rounded font-medium tracking-wide 
        hover:bg-[#cacbe1] hover:text-black transition duration-300`}
      >
        {children}
      </button>
    </div>
  );
}
