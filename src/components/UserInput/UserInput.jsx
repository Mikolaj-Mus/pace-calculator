import "./UserInput.css";

export default function UserInput({ userInput, handleChange }) {
  return (
    <section id="user-input">
      <p>
        <label>Distance</label>
        <input
          type="number"
          required
          value={userInput.distance}
          onChange={(event) => handleChange("distance", event.target.value)}
        />
      </p>
      <p>
        <label>Time</label>
        <input
          type="text"
          required
          value={userInput.time}
          onChange={(event) => handleChange("time", event.target.value)}
        />
      </p>
    </section>
  );
}
