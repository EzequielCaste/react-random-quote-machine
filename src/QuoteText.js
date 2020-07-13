import React from "react";

function QuoteText(props) {
  if (props.quote) {
    let text = props.quote.text;
    let author = props.quote.author;

    return (
      <div>
        <div id="text">
          <p>{text}</p>
        </div>
        <div id="author">
          <p>{author}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default QuoteText;
