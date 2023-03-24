import { useEffect, useRef, useDebugValue } from "react";

export const usePrevious = (value) => {
  const ref = useRef;

  useDebugValue("---custom Hook e USEDEBUGVALUE----");
  useDebugValue("O numero anterior é:" + value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
