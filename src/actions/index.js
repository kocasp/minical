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
