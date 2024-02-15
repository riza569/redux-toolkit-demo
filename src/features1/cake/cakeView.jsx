import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
import { useState } from "react";
const CakeView = () => {
  const numofcakes = useSelector((state) => state.cake.numofCakes);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  return (
    <div>
      <h2>Number of cakes-{numofcakes}</h2>
      <button onClick={() => dispatch(ordered(1))}>order cake</button>
      <input
        onChange={(e) => setValue(parseInt(e.target.value))}
        type="number"
        value={value}
      ></input>
      <button onClick={() => dispatch(restocked(value))}>restock cakes</button>
    </div>
  );
};

export default CakeView;
