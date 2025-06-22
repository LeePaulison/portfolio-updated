'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function ImageWithFallback({ src, alt, ...props }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc('/assets/images/placeholder-image.png')}
      {...props}
    />
  );
}

ImageWithFallback.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
