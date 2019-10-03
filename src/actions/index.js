export const pickDate = date => {
  return {
    type: "PICK_DATE",
    payload: date
  };
};
export const setIntroPlayed = date => {
  return {
    type: "INTRO_PLAYED"
  };
};
export const addLabel = (day, label) => {
  return {
    type: "ADD_LABEL",
    payload: {
      day: day,
      label: label,
    },
  };
};
