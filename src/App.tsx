import { BasicTypes } from "./typescript/BasicTypes";
import { Functions } from "./typescript/Functions";
import { ObjectLiterals } from "./typescript/ObjectLiterals";
import { Contador } from "./components/Contador";
import { ContadorHook } from "./components/ContadorHook";
import { Login } from "./components/Login";
import { Users } from "./components/Users";
import { Forms } from "./components/Forms";

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
      <Login />
      <Users />
      <Forms />
    </div>
  );
};

export default App;
