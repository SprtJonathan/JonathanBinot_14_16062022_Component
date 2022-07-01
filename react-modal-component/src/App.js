import { useState } from "react";
import Modal from "./components/Modal/Modal";

import "./App.css";

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setDisplayModal(true)}>Open Modal</button>

      {/* Use the state as a condition to the modal's display (if the state is true, then the modal shows up) and add props to the component */}
      {/* The available props are 
      "title" for the modal header, 
      "body" for the modal body 
      "showModal" for the state used to display the modal,*
      "titleColor" for the title color, 
      "headerBackgroundColor" for the header background color 
      "bodyColor" for the title color, 
      "bodyBackgroundColor" for the header background color */}
      {displayModal && (
        <Modal
          title="Employee Created!"
          body="New employee created, you may now proceed to the employees list page"
          showModal={setDisplayModal}
        />
      )}
    </div>
  );
}

export default App;
