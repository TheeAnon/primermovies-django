const SearchBar = () => {
  return (
    <form className="flex-grow">
      <div className="relative w-full">
        <select className="select select-bordered absolute top-0 left-0 rounded-r-none">
          <option selected>All Categories</option>
          <option>TV series</option>
          <option>Movies</option>
          <option>Anime</option>
        </select>
        <input
          type="text"
          placeholder="Search for Movies, Tv Series and Anime"
          className="input input-bordered w-full pr-16 pl-40 flex-grow"
          required
        />
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
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
