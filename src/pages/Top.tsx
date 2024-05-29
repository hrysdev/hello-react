// src/pages/Top.tsx
import React from "react";
import Hello from "../components/Hello";
import { useUser } from "../providers/UserProvider";
import { Link } from "react-router-dom";

export default function Top() {
  const { name, changeName } = useUser();
  return (
    <>
      <Hello />
      <input value={name || ""} onChange={(e) => changeName(e.target.value)} />
      <br />
      <Link to="/counter">カウンターページへ</Link>
    </>
  );
}
