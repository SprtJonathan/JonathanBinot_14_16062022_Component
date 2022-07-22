import React from "react";
import "./modal.css";

/* This component is a customizable modal component that displays a block on top of the page when triggered by a state */
var Modal = function Modal(props) {
  var modalTitle = props.title; // The title / header of the modal
  var modalBody = props.body; // The body of the modal
  var showModal = props.showModal; // The state that displays the modal
  var titleColor = props.titleColor; // The color of the modal title
  var headerBackgroundColor = props.headerBackgroundColor; // The color of the modal header background
  var bodyColor = props.bodyColor; // The color of the modal title
  var bodyBackgroundColor = props.bodyBackgroundColor; // The color of the modal header background
  var modalBackgroundColor = props.modalBackgroundColor; // The color of the modal header background

  console.log(headerBackgroundColor);

  /* Returning a modal component that is customizable. */
  return React.createElement(
    "div",
    { className: "modal-blur-background" },
    React.createElement(
      "div",
      {
        className: "modal",
        id: "modal",
        style: {
          color: "" + modalBackgroundColor
        }
      },
      React.createElement(
        "div",
        {
          className: "modal-header",
          style: {
            backgroundColor: "" + headerBackgroundColor
          }
        },
        React.createElement(
          "span",
          {
            className: "modal-title",
            style: {
              color: "" + titleColor
            }
          },
          modalTitle
        ),
        React.createElement(
          "span",
          { className: "modal-close-button", onClick: function onClick() {
              return showModal(false);
            } },
          "X"
        )
      ),
      modalBody && React.createElement(
        "div",
        {
          className: "modal-body",
          style: {
            backgroundColor: "" + bodyBackgroundColor
          }
        },
        React.createElement("hr", { className: "modal-separation-line" }),
        React.createElement(
          "div",
          {
            className: "modal-body-text",
            style: {
              color: "" + bodyColor
            }
          },
          modalBody
        )
      )
    )
  );
};

export default Modal;