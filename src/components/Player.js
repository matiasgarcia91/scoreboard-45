import React from "react";

export default function Player(props) {
  return (
    <div>
      {props.name} - score: {props.score}
    </div>
  );
}
