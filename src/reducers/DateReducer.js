export const DateReducer = (state = [], action) => { // (1)
  switch (action.type) { // (2)
    case 'PICK_DATE':
      return action.payload
    default:
      return state;
  }
}
