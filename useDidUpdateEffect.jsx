import { useEffect, useRef, useState } from "react";

const useDidUpdateEffect = (callback, deps) => {
    const firstRender = useRef(true);
    useEffect(() => {
      if (firstRender.current) {
        firstRender.current = false;
        return;
      }
      callback();
    }, deps);
  };

 export const Example = () => {
    const [count, setCount] = useState(0);
  
    useDidUpdateEffect(() => {
      console.log("Count updated:", count);
    }, [count]);
  
    return <button onClick={() => setCount(count + 1)}>Increment</button>;
  };
