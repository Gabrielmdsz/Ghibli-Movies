import { Films } from "../../components/Films"

export const HomePage = () => {

  return (
    <div className="min-h-screen bg-stone-100 selection:bg-emerald-200 selection:text-emerald-900">
      <header className="pt-20 pb-12 px-4 flex flex-col items-center justify-center text-center">

        <span className="text-emerald-600 font-medium tracking-[0.2em] text-sm uppercase mb-4 animate-fade-in">
          A magical journey
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-800 tracking-tight relative inline-block">
          Studio Ghibli Movies
          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-emerald-500/80 rounded-full"></span>
        </h1>

        <p className="max-w-2xl mx-auto mt-12 text-stone-600 text-lg leading-relaxed">
          Explore animated works where the power of nature meets the magic of everyday life.
        </p>
      </header>
      <main className="pb-24">
        <Films />
      </main>
    </div>
  )
}
