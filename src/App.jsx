import './App.css'
import Search from './assets/Search'

function App() {
return (
   <>
  <section className='hero'>
    <div className="background-image">
    </div>
 <header className='flex flex-col items-center justify-center gap-4 text-center'>
  <img className='w-20 h-20' src="./logo.png" alt="" />
  <img className='relative z-10 mt-4' src="./hero.png" alt="" />
  <h1 className="text-4xl md:text-6xl font-semibold text-gray-100 italic mt-4">
    “Every great <span className='text-blue-900'>story</span> begins with a search.”
  </h1>
  <Search />
</header>

  </section>
   </>
  )

}

export default App
