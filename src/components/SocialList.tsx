import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function SocialList({}) {
  return (
    <div style={{marginRight: 30}}>
      <a
        title="Facebook"
        href={`https://facebook.com`}
        target="_blank"
        rel="noopener"
      >
        <FontAwesomeIcon
          style={{ height: 28 }}
          icon={faFacebookSquare}
          color="#cc5de8"
        />
      </a>
    </div>
  );
}
