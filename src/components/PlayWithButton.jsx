import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";

const PlayWithButton = () => {
  const [AlertVisible, setAlertVisible] = useState(false);
  
  return (
    <div>
      {AlertVisible &&  (<Alert color="success" onClose={() => setAlertVisible(false)}>You Clicked This Button</Alert>)}
      <Button handleClick={() => setAlertVisible(true)} bgColor={"danger"}>Click Me</Button>
    </div>
  );
};

export default PlayWithButton;