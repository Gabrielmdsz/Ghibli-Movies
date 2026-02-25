import { useQuery } from "@tanstack/react-query";
import type { Film } from "../types/types";

const fetchFilms = async (limit: number = 10): Promise<Film[]> =>{
    const response = await fetch(`https://ghibliapi.vercel.app/films?_limit=${limit}`);

    if(!response.ok) throw new Error("Error searching for movies");

    const films = await response.json()

    return films.sort((a: Film, b: Film) => a.title.localeCompare(b.title));
}

export function useFilms(limit: number){
    return useQuery<Film[]>(
        {
            queryKey:["film", limit],
            queryFn: ()=> fetchFilms(limit),
            refetchOnWindowFocus:false,
            refetchOnReconnect:false,
        }
    )
}