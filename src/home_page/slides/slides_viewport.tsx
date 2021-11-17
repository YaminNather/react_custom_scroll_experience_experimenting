import react from "react";
import * as slides_data from "./slides_data";
import "./slides_viewport_styles.scss";

function clamp(value: number, min: number, max: number): number {
  if(value < min)
    return min;
  
  if(value > max)
    return max;

  return value;
}

export interface SlidesControllerProps {
  sensitivity: number;
}

const SlidesViewport: react.FC<SlidesControllerProps> = (props) => {
  const [scrollAmount, setScrollAmount] = react.useState<number>(0.0);
  const [previousScrollAmount, setPreviousScrollAmount] = react.useState<number>(0.0);

  react.useEffect(
    () => {
      function onWheelEvent(ev: WheelEvent) {
        if (ev.deltaY !== 0.0) {
          setPreviousScrollAmount(scrollAmount);
          
          let newScrollAmount: number = scrollAmount + ev.deltaY;
          newScrollAmount = clamp(newScrollAmount, 0.0, react.Children.count(props.children) * props.sensitivity);
          setScrollAmount(newScrollAmount);
        }
      }

      window.addEventListener("wheel", onWheelEvent);

      return () => window.removeEventListener("wheel", onWheelEvent);
    }
  );

  function clampScrollFactor(value: number): number {
    return clamp(value, 0.0, react.Children.count(props.children));
  }

  function render(): JSX.Element {
    const previousScrollFactor: number = clampScrollFactor(
      previousScrollAmount / props.sensitivity
    );
    const scrollFactor: number = clampScrollFactor(
      scrollAmount / props.sensitivity
    );

    return (
      <div className="slides_viewport">
        <slides_data.context.Provider
          value={{
            previousScrollFactor: previousScrollFactor,
            scrollFactor: scrollFactor,
            slidesCount: react.Children.count(props.children)
          }}
        >
          {props.children}
        </slides_data.context.Provider>
      </div>
    );
  }

  return render();
};

export default SlidesViewport;
