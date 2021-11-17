import react from "react";
import * as slides_data from "./slides_data";
import "./slide_styles.scss";

export interface SlideProps {
  order: number;
  builder: (order: number, ageFactor: number) => JSX.Element;
  onBirth?: () => void;
  onDeath?: () => void;
}

function calculateAgeFactor(order: number, scrollFactor: number): number {
  if (scrollFactor < order) return 0;

  if (scrollFactor >= order + 1) return 1;

  return scrollFactor - order;
}

const Slide: react.FC<SlideProps> = (props) => {
  const slidesData: slides_data.Data = react.useContext<slides_data.Data | null>(
    slides_data.context
  ) as slides_data.Data;

  react.useEffect(() => {
    if (
      slidesData.previousScrollFactor < props.order &&
      slidesData.scrollFactor >= props.order
    ) {
      if (props.onBirth)
        props.onBirth();
    } else if (
      slidesData.previousScrollFactor >= props.order + 1 &&
      slidesData.scrollFactor < props.order + 1
    ) {
      if (props.onBirth)
        props.onBirth();
    }
  }, [slidesData.previousScrollFactor, slidesData.scrollFactor]);

  react.useEffect(() => {
    if (
      slidesData.previousScrollFactor < props.order + 1 &&
      slidesData.scrollFactor >= props.order + 1 && 
      props.order !== slidesData.slidesCount - 1
    ) {
      if (props.onDeath) 
        props.onDeath();
    } else if (
      slidesData.previousScrollFactor >= props.order &&
      slidesData.scrollFactor < props.order
    ) {
      if (props.onDeath) 
        props.onDeath();
    }
  }, [slidesData.previousScrollFactor, slidesData.scrollFactor]);

  function render(): JSX.Element {
    const ageFactor: number = calculateAgeFactor(
      props.order,
      slidesData.scrollFactor
    );

    return <div className="slide">{props.builder(props.order, ageFactor)}</div>;
  }

  return render();
};

export default Slide;
