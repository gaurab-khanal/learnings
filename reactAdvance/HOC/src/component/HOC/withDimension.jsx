import React, { useEffect, useRef, useState } from "react";

const withDimension = (Element) => {
  const WithDimension = (props) => {
    const compRef = useRef(null);
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);

    useEffect(() => {
      if (compRef.current) {
        setWidth(compRef.current.offsetWidth);
        console.log(compRef.current.offsetWidth)
        setHeight(compRef.current.offsetHeight);
      }
    }, [compRef]);
    return <Element {...props} ref={compRef} width={width} height={height} />;
  };
  return WithDimension; 
};

export default withDimension;
