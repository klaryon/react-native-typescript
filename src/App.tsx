import { BasicTypes } from "./typescript/BasicTypes";
import { Functions } from "./typescript/Functions";
import { ObjectLiterals } from "./typescript/ObjectLiterals";
import { Contador } from "./components/Contador";
import { ContadorHook } from "./components/ContadorHook";

const App = () => {
  return (
    <div className="mt-2">
      <h1>TS-React Intro</h1>
      <hr />
      <BasicTypes />
      <ObjectLiterals />
      <Functions />
      <Contador />
      <ContadorHook />
    </div>
  );
};

export default App;
