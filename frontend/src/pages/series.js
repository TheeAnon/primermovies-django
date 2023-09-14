import Header from "../components/header";
import Footer from "../components/footer";
import MainSlider from "../components/main_slider";
import chi2 from "../images/posters/portrait/the.chi.jpg";
import theChi from "../images/posters/landscape/the.chi.png";
import Menu from "../components/menu";
import PortraitPoster from "../components/portrait_poster";
import LandscapePoster from "../components/landscape_poster";

function Series() {
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
              <LandscapePoster title="The Chi" image={theChi} />
            </div>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-6 w-full col-span-full row-span-full">
            <PortraitPoster image={chi2} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full col-span-full row-span-full"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Series;
