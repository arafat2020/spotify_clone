export const formatTIme = (time) => {
  const seconds = Math.floor(time / 1000);
  const remain = seconds % 60;
  return `${Math.floor(seconds / 60)}.${remain.toString().slice(0, 2)}`;
};
