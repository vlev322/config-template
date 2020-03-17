import { fork, select } from "redux-saga/effects";

export function* startup() {
	yield () => {};
}

export default function* root() {
	yield fork(startup);
}
