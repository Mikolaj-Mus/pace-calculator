import { calculateTime } from "../../data";

export default function Result({ input }) {
  const pace = calculateTime(input);

  return (
    // <table id="result">
    //   <thead>
    //     <tr>
    //       <th>Distance</th>
    //       <th>Time</th>
    //       <th>Pace</th>
    //     </tr>
    //   </thead>
    //   <tbody></tbody>
    // </table>
    <>
      <p>{pace}</p>
    </>
  );
}
