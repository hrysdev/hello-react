// src/components/Pokemon.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { usePokemon } from "../hooks/usePokemon";

export default function Pokemon() {
  const { id } = useParams();
  const { data: pokemon, isLoading, error } = usePokemon(Number(id));

  if (isLoading) {
    return <div>ローディング中 ...</div>;
  }

  if (error) {
    return <div>エラーが発生しました!</div>;
  }

  if (pokemon === undefined) {
    return <div>値を参照することができませんでした!</div>
  }

  return (
    <div>
      <p>id: {id}</p>
      <p>name: {pokemon.name}</p>
      <p>weight: {pokemon.weight}</p>
      <p>height: {pokemon.height}</p>
    </div>
  );
}