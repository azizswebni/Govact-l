import React, { Suspense } from "react";
import { useImage } from "react-image";

function MyComponent() {
  const { src } = useImage({
    srcList: "https://www.dynamique-mag.com/wp-content/uploads/reclamation.jpg",
  });

  return <img src={src} alt="azaz" />;
}

export default function MyImageComponent() {
  return (
    <Suspense>
      <MyComponent />
    </Suspense>
  );
}
