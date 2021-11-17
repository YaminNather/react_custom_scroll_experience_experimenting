export function clamp(value: number, min: number, max: number): number {
  if(value < min)
    return min;
  
  if(value > max)
    return max;

  return value;
}

export function lerp(a: number, b: number, t: number): number {
  const clampedT: number = clamp(t, 0.0, 1.0);

  return a + ((b - a) * clampedT);
}

export function inverseLerp(a: number, b: number, value: number): number {
  return clamp((value - a) / (b - a), 0.0, 1.0);
}