import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../redux/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(
    (state: { counter: { value: number } }) => state.counter.value
  );

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center bg-white">
      <div className="grid grid-cols-3 gap-x-5">
        <button
          onClick={() => dispatch(increment())}
          className="p-5 w-full h-20 bg-green-500 text-white"
        >
          Increment
        </button>
        <h3 className="text-black">Counter: {count}</h3>
        <button
          onClick={() => dispatch(decrement())}
          className="p-5 w-full h-20 bg-red-500 text-white"
        >
          Decrement
        </button>
      </div>
      <div className="my-5">
        <button
          onClick={() => dispatch(incrementByAmount(count))}
          className="p-5 w-full h-20 bg-orange-500 text-white"
        >
          Increment by Amount
        </button>
      </div>
    </main>
  );
};

export default Counter;
