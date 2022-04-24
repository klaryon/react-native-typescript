export const BasicTypes = () => {
  const name: string = "Fernando";
  const age: number = 35;
  const active: boolean = true;

  const powers: string[] = ["Velocity", "Flying", "Breathing underwater"];

  return (
    <>
      <h3>BasicTypes</h3>
      {name}, {age}, {active ? "active" : "not active"}
      <br />
      {powers.join(", ")}
    </>
  );
};
