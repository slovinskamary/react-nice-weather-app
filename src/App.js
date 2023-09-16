import "./App.css";
import Weather from "./Weather.js";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Milan" />
        <footer className="creator">
          This project is created by{" "}
          <a
            href="https://www.instagram.com/masholik/"
            target="_blank"
            rel="noreferrer"
          >
            Mariia Slovinska
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/slovinskamary/react-nice-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
