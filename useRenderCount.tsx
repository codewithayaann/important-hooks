import { useRef } from "react";

export const useRenderCount = ()=> {
    const count = useRef(0);
    count.current += 1;
    return count.current;
}

// use case
const App = () => {
  const render = useRenderCount()
  return <div> render : {render} </div>
}
