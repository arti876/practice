// получаем текущую дату
function getDate () {
  const month = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  return `${new Date().getHours()}:${new Date().getMinutes()} ${new Date().getDate()} ${month[new Date().getMonth()]}`;
}

export {
  getDate
}