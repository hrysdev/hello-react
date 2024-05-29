// src/hooks/usePokemon
import useSWR from "swr";

type Result = {
  name: string;
  weight: number;
  height: number;
};

const fetcher = (key: string) =>
  fetch("https://pokeapi.co/api/v2/" + key)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((res) => res as Result);

export function usePokemon(id?: number) {
  const key = id ? `pokemon/${id}` : null;
  // このリクエストのためのユニークな文字列（または関数、配列、null）
  // key が falsy な場合、SWR はリクエストを開始しません

  return useSWR(key, fetcher);
}