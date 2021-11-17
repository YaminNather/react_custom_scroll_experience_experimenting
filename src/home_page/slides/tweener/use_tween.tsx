import React from "react";
import Tween from "../../tweener/tween";

export default function useTween(
  startValue: number, endValue: number, 
  ageFactor: number, startAgeFactor: number = 0.0, endAgeFactor: number = 1.0
): number {
  const tween: Tween = React.useState<Tween>(
    new Tween(startValue, endValue, startAgeFactor, endAgeFactor)
  )[0];

  return tween.getValue(ageFactor);
}