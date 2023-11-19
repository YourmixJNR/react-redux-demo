import React from "react";
import { useSelector, useDispatch } from "react-redux";
import buyCake from "../redux/cake/cakeActions";

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Nums of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Button</button>
    </div>
  );
};

export default HooksCakeContainer;
