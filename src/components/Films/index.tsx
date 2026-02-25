import { useFilms } from "../../hooks/useFilms";
import { Link } from "react-router-dom";

export function Films(){
    const { data, isLoading, error} = useFilms(10);

    if(isLoading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>An error occurred while searching for the movies:{error.message}</p>
    }

    return(
        <ul className="flex flex-wrap justify-center gap-8 p-8 max-w-7xl mx-auto bg-stone-100 min-h-screen">
  {data?.map((film) => (
    <li 
      key={film.id}
      className="w-full sm:w-[calc(50%-2rem)] md:w-64 lg:w-72 group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-emerald-900/20 transition-all duration-500 transform hover:-translate-y-2 border border-stone-200">
      <Link to={`/${film.id}`} className="flex flex-col h-full">

        <div className="overflow-hidden relative">
          <img 
            src={film.image} 
            alt={film.title} 
            className="w-full h-80 object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition-colors duration-500"></div>
        </div>
        
        <div className="p-3 grow flex items-center justify-center bg-stone-50">
          <h2 className="text-lg font-bold text-stone-700 text-center line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300">
            {film.title}
          </h2>
        </div>
      </Link>
    </li>
  ))}
</ul>
    )
}