export function calculateTime({ distance, pace }) {
  const paceComponents = pace.split(":");

  if (
    paceComponents.length !== 2 ||
    isNaN(+paceComponents[0]) ||
    isNaN(+paceComponents[1])
  ) {
    // Handle invalid pace input
    return "--:--:--";
  }

  const [paceMinutes, paceSeconds] = paceComponents;

  let totalSeconds = +paceMinutes * 60 + +paceSeconds;
  let timeInSeconds = totalSeconds * +distance;
  let hours = Math.floor(timeInSeconds / 3600);
  let minutes = Math.floor((timeInSeconds % 3600) / 60);
  let seconds = Math.floor(timeInSeconds % 60);

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

export function calculatePace({ distance, time }) {
  const timeComponents = time.split(":");

  if (
    timeComponents.length !== 3 ||
    isNaN(+timeComponents[0]) ||
    isNaN(+timeComponents[1]) ||
    isNaN(+timeComponents[2])
  ) {
    // Handle invalid time input
    return "--:--";
  }

  if (+distance === 0 || +distance < 0) {
    return "--:--";
  }

  const [hours, minutes, seconds] = timeComponents;

  let totalSeconds = +hours * 3600 + +minutes * 60 + +seconds;
  let paceInSeconds = totalSeconds / +distance;

  let paceMinutes = Math.floor(paceInSeconds / 60);
  let paceSeconds = Math.round(paceInSeconds % 60);

  if (paceSeconds === 60) {
    paceSeconds = 0;
    paceMinutes++;
  }

  return `${paceMinutes.toString().padStart(2, "0")}:${paceSeconds
    .toString()
    .padStart(2, "0")}`;
}
