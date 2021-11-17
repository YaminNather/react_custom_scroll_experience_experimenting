import "./styles.css";
import HomePage from "./home_page/home_page";

export default function App() {
  console.log(`CustomLog: Program running`);
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}
