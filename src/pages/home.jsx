import Banner from '../component/banner'

const Home = () => {
	return (
		<section className='min-h-[90vh] pt-40 bg-gray-800 '>
			<div className='container'>
				<div className='w-full h-[70vh] flex items-center'>
					<Banner />
				</div>
			</div>
		</section>
	)
}

export default Home
