# react-modal-component-hrnet

A simple modal React component created for the HRnet OpenClassrooms project

## Installation

```
npm install react-modal-component-hrnet
```

## Usage

Inside the page where you want to use the modal, import useState and the modal component with these lines

```
import { useState } from "react";
import Modal from "react-modal-component-hrnet";
```

Create a state that will be used to trigger the modal.

i.e. : ```
const [displayModal, setDisplayModal] = useState(false);

```

Use the state as a condition to the modal's display (if the state is true, then the modal shows up) and add props to the component

The available props are :
    - "title" for the modal header,
    - "body" for the modal body,
    - "closeButton" for the modal close button (can be a "X" or any other text you want),
    - "showModal" for the state used to display the modal,
    - "titleColor" for the title color,
    - "headerBackgroundColor" for the header background color,
    - "bodyColor" for the title color,
    - "bodyBackgroundColor" for the header background color

You can then add the component to your code as follows, i.e :

```
        {displayModal && (
        <Modal
          title="Employee Created!"
          body="New employee created, you may now proceed to the employees list page"
          showModal={setDisplayModal}
        />
```
