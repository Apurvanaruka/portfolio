import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Technologies from './components/Technologies'
import Experience from "./components/Experience"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Education from "./components/Education"

function App() {

  return (

    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 lg:selection:bg-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">

        <div class="relative h-full w-full bg-slate-950">
          <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
        {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div> */}
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Education />
        <Experience />
        <Project />
        <Contact />
      </div>

    </div>
  )
}

export default App
