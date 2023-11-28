export function calculateTime({ distance, time }) {
  const [hours, minutes, seconds] = time.split(":");

  let totalMinutes = +hours * 60 + +minutes + +seconds / 60;

  let paceMinutes = Math.floor(totalMinutes / +distance);
  let paceSeconds = Math.floor((totalMinutes % distance) * 6);

  if (paceSeconds < 10) {
    paceSeconds = `0${paceSeconds}`;
  }
  let pace = `${paceMinutes}:${paceSeconds}`;

  return pace;
}
