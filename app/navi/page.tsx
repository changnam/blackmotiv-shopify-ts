export default function NavHome(){
  return (
    <div className="flex min-h-4">
      <div className="flex items-center justify-center flex-none w-6 h-6 bg-pink-300 border border-black">⭐</div>
      <div className="flex items-center justify-center flex-none w-6 h-6 bg-red-300 ">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 12L12 3L21 12H18V21H6V12H3Z" fill="black" />
        </svg>
      </div>
      <div className="flex w-full">
        <div className="flex w-1/3 bg-green-300"></div>
        <div className="flex w-1/3 bg-pink-300"></div>
        <div className="flex w-1/3 bg-yellow-300"></div>
      </div>
    </div>
  );
}