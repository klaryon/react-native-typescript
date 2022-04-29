import { BasicTypes } from "./typescript/BasicTypes";
import { Functions } from "./typescript/Functions";
import { ObjectLiterals } from "./typescript/ObjectLiterals";
import { Contador } from "./components/Contador";

const App = () => {
  return (
    <div className="mt-2">
      <h1>TS-React Intro</h1>
      <hr />
      <BasicTypes />
      <ObjectLiterals />
      <Functions />
      <Contador />
    </div>
  );
};

export default App;
