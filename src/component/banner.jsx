import img from '../assets/portfolio-img.jpg'
import github from '../assets/github.png'
import linkedin from '../assets/Linkedin.png'
import telegram from '../assets/telegram.png'

const Banner = () => {
	return (
		<div className='flex flex-col '>
			<div className='flex items-center justify-between'>
				<div>
					<h2 className='text-[#fff] font-bold text-5xl font-sans'>
						Sayfuddinov Jasurbek
					</h2>
					<p className='my-1.5 text-[#bb13e9]  font-normal text-4xl font-sans'>
						Web developer
					</p>
					<div className='flex items-center gap-4 mt-4'>
						<a href='https://github.com/Jasur-coder'>
							<img src={github} alt='github' width={40} height={40} />
						</a>
						<a href='https://t.me/+998934692330'>
							<img src={telegram} alt='telegram' width={30} height={30} />
						</a>
						<a href='https://www.linkedin.com/in/%D0%B6%D0%B0%D1%81%D1%83%D1%80%D0%B1%D0%B5%D0%BA-%D1%81%D0%B0%D0%B9%D1%84%D1%83%D0%B4%D0%B4%D0%B8%D0%BD%D0%BE%D0%B2-4b90ab35b/'>
							<img src={linkedin} alt='linkedin' width={30} height={30} />
						</a>
					</div>
					<p className='text-[#fff] my-7 text-xl/normal tracking-[0.4px] w-96'>
						I create modern and responsive websites using HTML, CSS, JavaScript,
						and React. Open to exciting projects and new challenges!
					</p>
				</div>
				<img
					src={img}
					alt='my photo'
					className='w-[140px] h-[140px] rounded-full'
				/>
			</div>
		</div>
	)
}

export default Banner


