import react from "react";

export interface Data {
  previousScrollFactor: number;
  scrollFactor: number;
  slidesCount: number;
}

export const context: react.Context<Data | null> = react.createContext<Data | null>(
  null
);
