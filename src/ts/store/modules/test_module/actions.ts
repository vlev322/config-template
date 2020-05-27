import actionCreatorFactory from "typescript-fsa";

import actions from "../../../constants/actions";

const actionCreator = actionCreatorFactory();

export const anotherActionCreactor: any = actionCreator<{ data: string }>(actions.ANOTHER_ACTION);
export const requestTestInfo: any = actionCreator<{}>(actions.REQUEST_TEST_INFO);
export const receiveTestInfo = actionCreator<{}>(actions.RECEIVE_TEST_INFO);


export const startRequesting: any = actionCreator<{ data: string }>(actions.START_REQUESTING);
export const receiveBtcInfo = actionCreator<{ data: string }>(actions.FETCH_BTC_INFO);
export const leavePage = actionCreator<{}>(actions.LEAVE_PAGE);
