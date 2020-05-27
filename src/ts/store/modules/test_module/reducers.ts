import actions from "../../../constants/actions";

function testReducer(
  state = {
    btc_info: ""
  },
  action: any
) {
  switch (action.type) {
    case actions.FETCH_BTC_INFO:
      return {
        ...state,
        btc_info: action.payload
      };
    default:
      return state;
  }
}

export default testReducer;
