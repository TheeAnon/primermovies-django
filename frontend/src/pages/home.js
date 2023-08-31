import Header from "../components/header";
import Footer from "../components/footer";
import MainSlider from "../components/main_slider";
import chi2 from "../images/posters/portrait/the.chi.jpg";
import theChi from "../images/posters/landscape/the.chi.png";
import Menu from "../components/menu";
import PortraitPoster from "../components/portrait_poster";
import LandscapePoster from "../components/landscape_poster";

function Home() {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="hidden md:block ml-4 h-full">
          <Menu />
        </div>
        <div className="flex flex-col w-full px-5 md:px-8">
          <div className="flex flex-col md:flex-row">
            <MainSlider />
            <div className="grid grid-cols-2 md:grid-cols-1 w-full md:grid-rows-2 col-span-full row-span-full">
              <LandscapePoster />
            </div>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-6 w-full col-span-full row-span-full">
            <PortraitPoster />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full col-span-full row-span-full">
            <div className="w-full h-full min-h-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
              <a href="/series/the-chi">
                <img
                  className="rounded-lg object-cover"
                  src={theChi}
                  alt="The Chi"
                />
              </a>
              <div className="absolute bottom-0 left-0 right-0 p-1.5 md:p-4 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent text-white rounded-lg">
                <a href="/series/the-chi">
                  <h5 className="text-xl font-semibold tracking-tight hover:text-blue-600">
                    The Chi
                  </h5>
                </a>
                <div className="flex w-full">
                  <span className="text-xs flex-grow">S06E05</span>
                  <div className="float-right p-0.5 rounded flex text-xs">
                    <svg
                      class="w-3 h-3 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    5.0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
