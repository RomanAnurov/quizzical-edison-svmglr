import "./styles.css";

interface Options {
  a?: Boolean;
  b?: Boolean;
}
interface Props {
  options?: Options;
  c?: number;
}
const Test = ({ options = { a: true, b: true }, c = 10 }: Props) => {
  const { a = true, b = true } = Props.options;
  return (
    <div>
      a:{options.a ? 1 : 0}
      b:{options.b ? 1 : 0}
      c:{c}
    </div>
  );
};
export default function App() {
  return (
    <div className="App">
      <Test options={{ a: true }} />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
