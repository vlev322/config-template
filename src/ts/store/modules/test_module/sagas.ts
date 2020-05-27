import axios from "axios";
import { call, delay, put } from "redux-saga/effects";
import { receiveBtcInfo } from "./actions";

export function* fetchBtcData() {
  while (true) {
    console.log("Fetch working..");
    const result = yield call(axios.get, "https://api.coindesk.com/v1/bpi/currentprice.json");
    yield put(receiveBtcInfo(result.data));
    yield delay(3000);
  }
}
