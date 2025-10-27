import { Link, NavLink } from "react-router-dom";
import { headerLinks } from "../data";

const Header = () => {
  return (
		<header className='py-5 bg-gray-900  '>
			<div className='container '>
				<div className='flex items-center justify-between'>
					<Link
						to={'/home'}
						className='text-3xl font-bold duration-300 hover:scale-105 text-[#fff]'
					>
						Sayfuddinov Jasurbek Blog
					</Link>

					<nav className='flex items-center gap-5'>
						{headerLinks.map(el => (
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'text-white'
										: 'text-[#fff] hover:text-gray-500 hover:scale-110 duration-300 text-[18px] '
								}
								key={el.id}
								to={el.to}
							>
								{el.text}
							</NavLink>
						))}
					</nav>
				</div>
			</div>
		</header>
	)
};

export default Header;
