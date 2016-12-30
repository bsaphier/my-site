const initialTempState = {
  IHaveNotMadeAnyStateObj: {},
  IHaveNotMadeAnyStateArr: [],
  IHaveNotMadeAnyStateBool: true,
  IHaveNotMadeAnyStateNum: 0
};

export default function(state = initialTempState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {
    default:
      return newState;
  }
}
