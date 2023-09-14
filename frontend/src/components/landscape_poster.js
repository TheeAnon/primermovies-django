const LandscapePoster = ({ image, title, link, episode, rating }) => {
  return (
    <div className="w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
      <a href={link}>
        <img className="rounded-lg object-cover" src={image} alt={title} />
      </a>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent text-white rounded-lg">
        <a href={link}>
          <h5 className="text-xl font-semibold tracking-tight hover:text-blue-600">
            {title}
          </h5>
        </a>
        <div className="flex w-full space-x-1 overflow-hidden">
          <span className="text-xs">S06E05</span>
          <span className="text-xs">|</span>
          <span className="text-xs">genre</span>
          <span className="text-xs">|</span>
          <div className="p-0.5 rounded flex">
            <svg
              class="w-3 h-3 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <span className="text-xs">5.0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandscapePoster;
