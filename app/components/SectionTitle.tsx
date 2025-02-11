interface SectionTitleProps {
  title: string
  subtitle?: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-gray-300">{subtitle}</p>}
      <div className="w-20 h-1 bg-violet-500 mx-auto"></div>
    </div>
  )
}

