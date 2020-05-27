import React from "react";
import { useDispatch } from "react-redux";
import { startRequesting } from "../store/modules/test_module/actions";

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const _onClick: any = () => dispatch(startRequesting("Regular_payload"));
  const _onClickAnother: any = () => dispatch(startRequesting("Another_payload"));

  return (
    <>
      {" "}
      <div>Main Container</div>
      <button onClick={_onClick}>Click here</button>
      <button onClick={_onClickAnother}>Another action</button>
    </>
  );
};

export default App;
