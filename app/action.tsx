"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

//this means whatever is written is server directive

export const fetchanime = async (pages: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${pages}&limit=8&order=popularity`
  );
  const data = await response.json();

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
