import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  let items = ["New Yorks", "Tokyo", "Bangkok", "Paris", "London"];
  return (
    <>
      <div className="container-lg">
        {alertVisible && (
          <ListGroup
            items={items}
            heading="Cities"
            onClose={() => setAlertVisible(false)}
          />
        )}
        <div className="d-flex justify-content-center">
          <Button color="primary" onClick={() => setAlertVisible(true)}>
            Show Cities
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
