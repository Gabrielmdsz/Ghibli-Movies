import { useParams, Link } from "react-router-dom"
import { useFilmDetails } from "../../hooks/useFilmDetails"

export const FilmsDetails = () => {
  const { id } = useParams()
  const { data: filmDetail, isLoading, error } = useFilmDetails(id || "")

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>An error occurred while searching for the movie details</p>
  }

  if (!filmDetail) return <p>Filme não encontrado</p>

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8 selection:bg-emerald-200 selection:text-emerald-900">
      <div className="max-w-5xl mx-auto">

        <Link
          to="/"
          className="group inline-flex items-center gap-2 mb-8 text-stone-500 hover:text-emerald-700 font-medium transition-colors duration-300">
          <span className="transform transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Back to catalog
        </Link>

        <article className="bg-white rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100 overflow-hidden flex flex-col md:flex-row">

          <div className="w-full md:w-2/5 relative">
            <img
              src={filmDetail.image}
              alt={`Pôster do filme ${filmDetail.title}`}
              className="w-full h-full object-cover min-h-100"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent md:bg-linear-to-r opacity-60"></div>
          </div>

          <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col">
            <h2 className="text-stone-400 uppercase tracking-[0.3em] text-xs font-bold mb-2">
              Movie Details
            </h2>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-stone-800 mb-6">
              {filmDetail.title}
            </h3>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-stone-100 text-stone-600 px-4 py-1.5 rounded-full text-sm font-medium border border-stone-200">
                Release: {filmDetail.release_date}
              </span>
              <span className="bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium border border-emerald-100 flex items-center gap-1">
                ⭐ RT Score: {filmDetail.rt_score}%
              </span>
            </div>

            <div className="text-stone-600 mb-8 leading-relaxed">
              <strong className="text-emerald-800 uppercase text-xs tracking-wider block mb-2">
                Synopsis
              </strong>
              <p>{filmDetail.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-auto pt-6 border-t border-stone-100">
              <div>
                <strong className="text-emerald-800 uppercase text-xs tracking-wider block mb-1">
                  Director
                </strong>
                <span className="text-stone-700 font-medium">{filmDetail.director}</span>
              </div>
              <div>
                <strong className="text-emerald-800 uppercase text-xs tracking-wider block mb-1">
                  Producer
                </strong>
                <span className="text-stone-700 font-medium">{filmDetail.producer}</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}