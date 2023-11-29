import { calculatePace, calculateTime } from "../../data";
import "./Result.css";

export default function Result({ input }) {
  const pace = calculatePace(input);
  const distances = [1, 1.6, 3, 5, 10, 21.1, 42.2];

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Distance</th>
            <th>Time</th>
            <th>Pace</th>
          </tr>
        </thead>
        <tbody>
          {distances.map((distance) => {
            const time = calculateTime({ distance, pace });
            return (
              <tr key={distance}>
                <td>{distance}</td>
                <td>{time}</td>
                <td>{pace}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
