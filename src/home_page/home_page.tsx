import react from "react";
import "./home_page_styles.scss";
import SlidesViewport from "./slides/slides_viewport";
import Slide0 from "./slide_0/slide_0";
import Slide1 from "./slide_1/slide_1";

const HomePage: react.FC = (props) => {
  return (
    <div className="home_page">
      <SlidesViewport sensitivity={1000}>
        <Slide0 />

        <Slide1 />
      </SlidesViewport>
    </div>
  );
};

export default HomePage;
