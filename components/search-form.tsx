import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function SearchForm(){
  return (
    <form action="#" className="relative w-full w-max-[550px]">
      <input type="text" className="w-full"></input>
      <div className="absolute top-0 right-0 flex items-center h-full mr-3">
        <MagnifyingGlassIcon className="w-4 h-4"/>
      </div>
    </form>
  );
}