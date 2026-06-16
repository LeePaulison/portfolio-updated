"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";

export default function ImageWithFallback({ src, alt, ...props }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <a
      href={imgSrc}
      target="_blank"
      rel="noopener noreferrer"
      className="block cursor-zoom-in"
    >
      <img
        src={imgSrc}
        alt={alt}
        onError={() => setImgSrc("/assets/images/placeholder-image.png")}
        {...props}
      />
    </a>
  );
}

ImageWithFallback.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
