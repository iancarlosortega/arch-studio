import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import arrowIcon from '../assets/icons/icon-arrow.svg';

interface Props {
	title: string;
	body: string;
	projectName: string;
}

export const Slide: FC<Props> = ({ title, body, projectName }) => {
	const [desktopImage, setDesktopImage] = useState();
	const [tabletImage, setTabletImage] = useState();
	const [mobileImage, setMobileImage] = useState();

	useEffect(() => {
		import(`../assets/home/desktop/image-hero-${projectName}.jpg`).then(img => {
			setDesktopImage(img.default);
		});
	}, [desktopImage]);

	useEffect(() => {
		import(`../assets/home/tablet/image-hero-${projectName}.jpg`).then(img => {
			setTabletImage(img.default);
		});
	}, [tabletImage]);

	useEffect(() => {
		import(`../assets/home/mobile/image-hero-${projectName}.jpg`).then(img => {
			setMobileImage(img.default);
		});
	}, [mobileImage]);

	return (
		<div className='h-[34rem] md:h-[45rem] bg-black-custom'>
			<picture className='opacity-40'>
				<source media='(min-width: 992px)' srcSet={desktopImage} />
				<source media='(min-width: 768px)' srcSet={tabletImage} />
				<img className='object-cover h-full w-full' srcSet={mobileImage} />
			</picture>
			<div className='lg:w-[80%] lg:pl-[190px] p-10 md:p-20 h-full flex flex-col justify-center absolute top-0 z-10'>
				<h2
					className='
					text-[white] text-[48px] font-bold leading-[48px] tracking-[-1.2px] 
						md:leading-[80px] md:text-[80px] md:tracking-[-2px]'>
					{title}
				</h2>
				<p className='my-5 text-[white] font-medium'>{body}</p>
				<Link to='portfolio'>
					<button
						className='
						bg-black-custom text-[white] flex gap-2 items-center mt-10 px-10 py-5 font-medium
						hover:bg-gray transition duration-1000
						'>
						See Our Portfolio
						<img src={arrowIcon} alt='Arrow icon' />
					</button>
				</Link>
			</div>
		</div>
	);
};
