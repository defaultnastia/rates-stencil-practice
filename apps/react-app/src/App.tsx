import "./App.css";
import { AppButton } from "./components/stencil-generated";

function App() {
  return (
    <>
      <div style={{ padding: "2rem" }}>
        <h1>Stencil + React works!</h1>
        <AppButton label="Primary Button" variant="primary" />
        <AppButton label="Secondary Button" variant="secondary" />
      </div>
    </>
  );
}

export default App;
