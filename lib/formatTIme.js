export const formatTIme = (time, type) => {
  const seconds = Math.floor(time / 1000);
  const remain = seconds % 60;
  if (!type) {
    return `${Math.floor(seconds / 60)}.${remain.toString().slice(0, 2)}`;
  }
  if(type && type==='ms'){
    return `${Math.floor(seconds / 60)} min ${remain.toString().slice(0, 2)} sec`
  }
};
