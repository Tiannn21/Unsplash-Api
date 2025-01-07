import { useState, useEffect } from "react";
import './responsiveImage.css'

// eslint-disable-next-line react/prop-types
export function ResponsiveImage ({ src, alt }){
  const [imageClass, setImageClass] = useState("")

  useEffect(() => {
    const img = new Image()
    img.src = src

    img.onload = () => {
      if (img.naturalHeight > img.naturalWidth) {
        setImageClass("tall")
      } else {
        setImageClass("wide")
      }
    }
  }, [src])

  return <img src={src} alt={alt} className={`responsive-img ${imageClass}`} />;
};