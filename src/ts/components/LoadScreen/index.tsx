import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startRequesting, leavePage } from "../../store/modules/test_module/actions";

const ScreenLoader = (): JSX.Element => {
  const dispatch = useDispatch();
  const btc_info = useSelector((state: any) => state.testReducer.btc_info);
  useEffect(() => {
    dispatch(startRequesting());
    return () => {
      dispatch(leavePage({}));
      console.log("Cleanup done!");
    };
  }, []);
  const { time, bpi } = btc_info;
  const style = {
    background: randomizer()
  };
  return (
    <>
      {!btc_info ? (
        "Loading.."
      ) : (
        <div>
          <div>Hello everyone from screenLoader</div>
          <h1>Online monitor price Bitcoin</h1>
          <div style={style} className="circle"></div>
          <h2>Time - {time.updated}</h2>
          <div className="flex">
            <h2>Currency - {bpi.USD.description}</h2>
            <h2>Price - {bpi.USD.rate}</h2>
          </div>
          <div className="flex">
            <h2>Currency - {bpi.GBP.description}</h2>
            <h2>Price - {bpi.GBP.rate}</h2>
          </div>
          <div className="flex">
            <h2>Currency - {bpi.EUR.description}</h2>
            <h2>Price - {bpi.EUR.rate}</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default ScreenLoader;

const randomizer = (): string => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
};
