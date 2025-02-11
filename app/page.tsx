import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Experiences from "./components/Experiences"
import ResearchProjects from "./components/ResearchProjects"
import AwardsHonors from "./components/AwardsHonors"
import GetInTouch from "./components/GetInTouch"

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-black">
        <Hero />
        <About />
        <Education />
        <Experiences />
        <ResearchProjects />
        <AwardsHonors />
        <GetInTouch />
      </main>
    </>
  )
}

