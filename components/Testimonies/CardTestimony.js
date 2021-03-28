const CardTestimony = props => {
	return (
		<div
			className={`w-full flex md:max-w-2xl container mx-auto p-4 transition-all duration-500 bg-white bg-opacity-[.85] rounded-tl-3xl rounded-br-3xl hover:rounded-br-none hover:rounded-tl-none hover:rounded-tr-3xl hover:rounded-bl-3xl ${props.className}`}
		>
			<div className="mx-auto">
				<div
					className="float-left m-2 bg-black rounded-full w-28 h-28"
					style={{ shapeOutside: 'circle(50%)' }}
				></div>
				<h5 className="text-sm font-bold uppercase lg:text-base">
					The Best Barbershop in town!
				</h5>
				<p className="text-sm lg:text-base max-w-prose">{props.children}</p>
			</div>
		</div>
	)
}

export default CardTestimony
