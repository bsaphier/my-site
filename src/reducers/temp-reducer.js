const initialTempState = {
  tempPropObj: {},
  tempPropArr: [],
  tempPropBool: true,
  tempPropNum: 0
};

export default function(state = initialTempState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {
    default:
      return newState;
  }
}
