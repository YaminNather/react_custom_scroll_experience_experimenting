import react from 'react';
import "./strip_reveal_styles.scss";
import StripRevealController from './strip_reveal_controller';
import useChangeNotifier from './use_change_notifier';

export interface StripRevealProps {
  controller: StripRevealController;
}

const StripReveal: react.FC<StripRevealProps> = (props) => {
  useChangeNotifier(props.controller);

  function render(): JSX.Element {
    console.log(`Animating value = ${props.controller.animating}`);

    return (
      <div 
        className={(!props.controller.animating) ? "strip_reveal" : "strip_reveal_animation"} 
        onAnimationEnd={(e) => props.controller.animating = false}
      >
        {props.children}
      </div>
    );
  }

  return render();
};

export default StripReveal;