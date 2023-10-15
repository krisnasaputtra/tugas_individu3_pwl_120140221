export const setDataToLocasStorage = (data) => {
  const messageData = JSON.parse(localStorage.getItem("data_message") || "[]");
  messageData.push(data);
  localStorage.setItem("data_message", JSON.stringify(messageData));
};

export const getDataFromLocalStorage = () => {
  const messageData = JSON.parse(localStorage.getItem("data_message") || "[]");
  return messageData;
};
