import Navbar from '../Navbar/Navbar'
import Logo from '../Logo/Logo'
const Layout = props => {
	return (
		<div className="mx-auto">
			<nav className="fixed inset-x-0 z-50 w-full mx-auto bg-[#1e1e1e] bg-opacity-20 md:bg-transparent ">
				<Navbar />
			</nav>
			<main>{props.children}</main>
			<footer></footer>
		</div>
	)
}
export default Layout
{
	//<Logo className="absolute w-20 h-20 top-5" />
}
