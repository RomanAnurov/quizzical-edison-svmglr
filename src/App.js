import "./styles.css";

function Test({ options = { a: "1", b: "2" } }) {
  return (
    <div>
      a:{options.a}
      b:{options.b}
    </div>
  );
}
export default function App() {
  return (
    <div className="App">
      <Test options={{ a: "3" }} />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
