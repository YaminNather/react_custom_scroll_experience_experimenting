import react, { useState } from "react";
import Slide from "../slides/slide";
import "./slide_0_styles.scss";
import StripReveal from "../strip_reveal/strip_reveal";
import StripRevealController from "../strip_reveal/strip_reveal_controller";
import Tween from '../slides/tweener/tween';

const Slide0: react.FC = (props) => {
  const [alive, setAlive] = useState<boolean>(true);
  const stripRevealController = useState<StripRevealController>(new StripRevealController())[0];
  const scrollingValue: Tween = useState<Tween>(new Tween(0, 100, 0.3, 0.6))[0];


  function render(): JSX.Element {
    return (
      <Slide
        order={0}
        builder={(order, ageFactor) => {
          let className: string;
          if (alive)
            className = "slide_0_in_view";
          else 
            className = "slide_0_out_of_view";

          return (
            <div className={className}>              
              <StripReveal controller={stripRevealController}>
                Slide index = 0 Age Factor = {ageFactor} Scrolling Value = {scrollingValue.getValue(ageFactor)}
              </StripReveal>

              <div className="age_indicator" style={{width: `${ageFactor * 100}%`}} />
            </div>
          );
        }}
        onBirth={() => {
          // console.log(`Slide 0 born`);
          setAlive(true);
          stripRevealController.animate();
        }}
        onDeath={() => {          
          setAlive(false);
          stripRevealController.cancelAnimation();
        }}
      />
    );
  }

  return render();
};

export default Slide0;