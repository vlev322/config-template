import { call, delay, fork, take, takeLatest, put, takeEvery, cancel } from "redux-saga/effects";
import actions from "../constants/actions";
import { fetchBtcData } from "./modules/test_module/sagas";

function* t_saga() {
  yield console.log("Worker is working..");
}

function* t_saga_long(action) {
  yield delay(1500);
  yield put({
    type: actions.ANOTHER_ACTION,
    payload: action.payload
  });
}

export function* startup() {
  // yield takeNth(actions.START_REQUESTING, t_saga, 5);
  // yield takeLatestWithThrottle(actions.START_REQUESTING, t_saga, 1500);
  yield takeUniq(actions.START_REQUESTING, t_saga_long);
}

const takeUniq = (pattern, saga, ...args) =>
  fork(function*() {
    let actions = [];
    const comparator = (a1, a2) => a1.payload === a2.payload;
    while (true) {
      const action = yield take(pattern);
      if (!actions.some(a => comparator(a, action))) {
        yield fork(function*() {
          actions = actions.concat([action]);
          yield call(saga, ...args.concat(action));
          actions = actions.filter(a => a !== action);
        });
      }
    }
  });

const takeNth = (pattern, saga, times, ...args) =>
  fork(function*() {
    while (true) {
      for (let i = 0; i < times; i++) {
        yield take(pattern);
      }
      yield fork(saga, ...args);
    }
  });

const takeLatestWithThrottle = (pattern, worker, _delay, ...args) =>
  fork(function*() {
    yield takeLatest(pattern, subWorker);

    function* subWorker() {
      yield delay(_delay);
      yield call(worker, ...args);
    }
  });

const takeEveryWithThrottle = (pattern, worker, _delay, ...args) =>
  fork(function*() {
    while (true) {
      yield take(pattern);
      yield delay(_delay);
      yield call(worker, ...args);
    }
  });

const fetchBtcDataController = () =>
  fork(function*() {
    while (yield take(actions.START_REQUESTING)) {
      const task = yield fork(fetchBtcData);
      yield take(actions.LEAVE_PAGE);
      yield cancel(task);
    }
  });

export default function* root() {
  // yield fork(startup);
  // yield fork(startup);
  yield fetchBtcDataController();
}
