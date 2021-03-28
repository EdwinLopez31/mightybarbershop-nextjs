

const SectionTitle = (props) => {
  return (
    <div className="bg-gradient-to-r from-[#a37a4b] to-[#433323] bg-clip-text">
    <h1 className={`text-2xl lg:text-3xl xl:text-4xl font-semibold text-center uppercase ${props.className}`}>
      {props.children}
    </h1>
  </div>

  )
}

export default SectionTitle
