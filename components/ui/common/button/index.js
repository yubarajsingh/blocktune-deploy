export default function Button({ children, ...rest }) {
  return (
    <div className="items-center hidden space-x-4 lg:flex">
      <button
        {...rest}
        className=" disabled:opacity-50 disabled:cursor-not-allowed px-5 py-2 text-sm text-gray-200 bg-gray-700 rounded-lg animate-pulse font-bold hover:text-slate-900 hover:bg-green-100 hover:rounded-md"
      >
        {children}
      </button>
    </div>
  );
}
