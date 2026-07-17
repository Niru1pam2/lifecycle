import { Button } from "@repo/ui";
import { formatCurrency } from "@repo/utils";

function App() {
  return (
    <>
      <h1>Complete lifecycle</h1>
      <Button
        onClick={() => {
          alert(formatCurrency(123456.78));
        }}
      />
      <p>Some new features!</p>
      <p>Again some new fixes</p>
    </>
  );
}

export default App;
