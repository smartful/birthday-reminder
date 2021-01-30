export const decomposeFRDate = (dateFr: string): number[]  => {
  const dateArrayJJMMYYY = dateFr.split('/').map(element => parseInt(element));
  return dateArrayJJMMYYY;
}

export const decomposeTodayDate = (): number[] => {
  const today = new Date();
  const todayDay: number = today.getDate();
  const todayMonth: number = today.getMonth() + 1;
  const todayYear: number = today.getFullYear();
  return [todayDay, todayMonth, todayYear];
}