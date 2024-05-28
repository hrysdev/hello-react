// src/App.tsx
import React from "react";
import Hello from "./components/Hello";

export default function App() {
  return <Hello name="world" />;

  // 補足: 以下と同等
  // return Hello({ name: "world" });

  // 補足: 以下と同等
  // const params = {
  //   name: "world",
  // };
  // return <Hello {...params} />;
}