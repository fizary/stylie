import { useContext } from "react";
import { NumberInputContext } from "./context";

export const useNumberInput = () => useContext(NumberInputContext);
