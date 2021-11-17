import react from "react";
import Slide from "../slides/slide";
import "./slide_1_styles.scss";

const Slide1: react.FC = (props) => {
  const [alive, setAlive] = react.useState<boolean>(false);

  function render(): JSX.Element {
    return (
      <Slide
        order={1}
        builder={(order, ageFactor) => {
          let className: string;
          if (alive)
            className = "slide_1_in_view";
          else 
            className = "slide_1_out_of_view";

          return (
            <div className={className}>
              <div 
                className={'slide_index_card'} 
                style={{transform: `translateY(${ageFactor * 64}px)`}}
              >
                <h3>Slide index</h3> 
                
                <h1>1</h1>
              </div>

              <div 
                className={'age_factor_card'}
                style={{transform: `translateY(${ageFactor * -64}px)`}}
              >
                <h3>Age Factor</h3> 
                
                <h1>{ageFactor.toPrecision(3)}</h1>
              </div>
            </div>
          );
        }}
        onBirth={() => {
          // console.log(`Slide 1 born`);
          setAlive(true);
        }}
        onDeath={() => {
          // console.log(`Slide 1 died`);
          setAlive(false);
        }}
      />
    );
  }

  return render();
};

export default Slide1;
