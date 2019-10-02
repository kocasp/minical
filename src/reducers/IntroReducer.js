export const IntroReducer = (state = [], action) => { // (1)
  switch (action.type) { // (2)
    case 'INTRO_PLAYED':
      return true
    default:
      return state;
  }
}
