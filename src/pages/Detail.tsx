// src/pages/Detail
import React from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  return <div>id: {id}</div>;
}