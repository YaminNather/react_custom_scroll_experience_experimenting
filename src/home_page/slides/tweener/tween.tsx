import { inverseLerp, lerp } from "../../../utils/math_utils";

export default class Tween {
  public constructor(
    startAt: number, endAt: number, 
    startAgeFactor: number = 0.0, endAgeFactor: number = 1.0
  ) {
    this.startValue = startAt;
    this.endValue = endAt;

    this.startAgeFactor = startAgeFactor;
    this.endAgeFactor = endAgeFactor;
  }

  public getValue(ageFactor: number): number {
    const t: number = inverseLerp(this.startAgeFactor, this.endAgeFactor, ageFactor);

    return lerp(this.startValue, this.endValue, t);
  }



  private readonly startAgeFactor: number;
  private readonly endAgeFactor: number;

  private readonly startValue: number;
  private readonly endValue: number; 
}