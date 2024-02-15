import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

const IcecreamView = () => {
  const dispatch = useDispatch();
  const numofIcecreams = useSelector((state) => state.icecream.numofIcecream);
  return (
    <div>
      <h2>Number of Icecream - {numofIcecreams}</h2>
      <button onClick={() => dispatch(ordered(1))}>order Icecream</button>
      <button onClick={() => dispatch(restocked(1))}>restock Icecream</button>
    </div>
  );
};

export default IcecreamView;
