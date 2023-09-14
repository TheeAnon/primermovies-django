import MainSlider from "../components/main_slider";
import chi2 from "../images/posters/portrait/the.chi.jpg";
import theChi from "../images/posters/landscape/the.chi.png";
import Menu from "../components/menu";
import PortraitPoster from "../components/portrait_poster";
import LandscapePoster from "../components/landscape_poster";

const Home = () => {
  return (
    <div>
      <div className="flex">
        <div className="hidden md:block ml-4 h-full font-medium">
          <Menu />
        </div>
        <div className="flex flex-col w-full px-5 md:px-8">
          <div className="flex flex-col lg:flex-row lg:space-x-2">
            <MainSlider />
            <div className="grid grid-cols-2 lg:grid-cols-1 w-full lg:grid-rows-2 col-span-full row-span-full">
              <LandscapePoster title="The Chi" image={theChi} />
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-full col-span-full row-span-full">
            <PortraitPoster title="The Chi" image={chi2} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full col-span-full row-span-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
