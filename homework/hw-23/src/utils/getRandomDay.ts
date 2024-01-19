export default function getRandomDay(start, end) {
  const rDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  return `${('0' + rDate.getDate()).slice(-2)}-${('0' + (rDate.getMonth() + 1)).slice(-2)}-${rDate.getFullYear()}`
}