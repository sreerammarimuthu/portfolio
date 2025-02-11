import { Button } from "@/components/ui/button"

export default function Intro() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl mb-8">I'm a web developer passionate about creating amazing digital experiences.</p>
      <Button asChild>
        <a href="#contact">Get in Touch</a>
      </Button>
    </section>
  )
}

