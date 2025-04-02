import { useContext } from "react";
import { CountdownContext } from "./context";

export const useCountdown = () => useContext(CountdownContext);
