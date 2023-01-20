import React from "react";

function Button({ variant, children, ...props }) {
  return <button {...props}>{children}</button>;
}

export { Button };
