
const addIfExistOrCreate = (arr, val) => {
  if (Array.isArray(arr)){
    if (arr.includes(val)){
      return arr;
    } else {
      arr.push(val);
      return arr
    }
  } else {
    return [val]
  }
}

export const CalendarReducer = (state = {}, action) => {

  switch (action.type) {
    case 'ADD_LABEL':
      if (state[action.payload.day]) {
        state[action.payload.day].labels = addIfExistOrCreate(state[action.payload.day].labels, action.payload.label)
      }
      else {
        state[action.payload.day] = {...state[action.payload.day], labels: [action.payload.label]};
      }
      return state;
    case 'REMOVE_LABEL':
      console.log(state[action.payload.day])
      console.log(action.payload.day)
      state[action.payload.day].labels = state[action.payload.day].labels.filter(item => item !== action.payload.label);
      return state;
    case 'ADD_TASK':
      if (state[action.payload.day]) {
        state[action.payload.day].tasks = addIfExistOrCreate(state[action.payload.day].tasks, action.payload.task)
      } else {
        state[action.payload.day] = {...state[action.payload.day], tasks: [action.payload.task]};
      }
      return state;
    case 'REMOVE_TASK':
      state[action.payload.day].tasks.splice(action.payload.task_index, 1)
      return state
    default:
      return state;
  }
};
