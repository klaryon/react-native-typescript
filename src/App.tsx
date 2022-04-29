import { BasicTypes } from "./typescript/BasicTypes";
import { Functions } from "./typescript/Functions";
import { ObjectLiterals } from "./typescript/ObjectLiterals";

const App = () => {
  return (
    <div className="mt-2">
      <h1>TS-React Intro</h1>
      <hr />
      <BasicTypes />
      <ObjectLiterals />
      <Functions />
    </div>
  );
};

export default App;
