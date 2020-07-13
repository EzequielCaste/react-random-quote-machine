import React from "react";

function NewQuoteBtn(props) {
  return (
    <button id="new-quote" onClick={props.onClick}>
      New Quote
    </button>
  );
}

export default NewQuoteBtn;
