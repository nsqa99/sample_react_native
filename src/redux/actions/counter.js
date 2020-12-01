export const COUNTER = {
  INCREMENT_COUNTER: "incrementCounter",
  DECREMENT_COUNTER: "decrementCounter",
};

export const changeCounterAction = (type, value) => ({
  type,
  payload: value,
});
