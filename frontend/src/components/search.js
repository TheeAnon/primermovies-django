const SearchBar = () => {
  return (
    <form className="flex-grow p-0">
      <div className="relative w-full">
        <div className="absolute top-0 bottom-0 left-1 flex">
          <select className="m-auto text-center p-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>All</option>
            <option value="series">Series</option>
            <option value="movies">Movies</option>
            <option value="anim">Anime</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search for Movies, Tv Series and Anime"
          className="input input-bordered w-full pr-10 pl-24 flex-grow rounded-full"
          required
        />
        <button className="btn btn-ghost btn-circle absolute top-0 right-0">
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
