import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab);

function TweetButton(props) {
  let url = "https://twitter.com/intent/tweet?text=";
  let text = `'' ${props.quote.text} '' %0a- ${props.quote.author}`;
  const style = {
    color: props.color,
    fontSize: "50px"
  };
  return (
    <a target="_blank" href={url + text} id="tweet-quote">
      <FontAwesomeIcon style={style} icon={["fab", "twitter-square"]} />
    </a>
  );
}

export default TweetButton;
