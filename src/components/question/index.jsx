import React from "react";
import { Body } from "./body";
import { Header } from "./header";

function Question() {
  return (
    <div className="bg-red-200 flex flex-col border border-solid rounded-md p-4 mt-4">
      <Header />
      <Body />
    </div>
  );
}

export { Question };
