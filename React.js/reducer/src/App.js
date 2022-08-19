import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // const [count, setCount] = useState(0);

  function increment() {
    // setCount((prevCount) => prevCount + 1);
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    // setCount((prevCount) => prevCount - 1);
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <div className="App">
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
