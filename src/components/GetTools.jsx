import React from "react";

export default function GetTools(props) {
  return (
    <>
      <li>
        <img
          src={props.image}
          width={props.width}
          height={props.height}
          alt={props.alt}
          loading={props.loading}
          decoding={props.decoding}
        />
        <span title="National Aeronautics and Space Administration">
          {props.title}
        </span>
      </li>
    </>
  );
}
