import { useQuery } from "@tanstack/react-query";
import type { Filmdetails } from "../types/types";

const fetchFilmDetails = async (id: string): Promise<Filmdetails> => {
    const response = await fetch(`https://ghibliapi.vercel.app/films/${id}`);

    if(!response.ok) throw new Error("Error searching for movie details");

    return await response.json();
}

export function useFilmDetails(id: string){
    return useQuery<Filmdetails>(
        {
            queryKey:["filmDetails", id],
            queryFn: ()=> fetchFilmDetails(id),
            refetchOnWindowFocus:false,
            refetchOnReconnect:false,
        }
    )
}