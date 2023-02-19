import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
	projectName: string;
	projectNumber: number;
	image: string;
}

export const PortfolioCard: FC<Props> = ({
	projectName,
	projectNumber,
	image,
}) => {
	return (
		<div className='bg-black-custom relative'>
			<picture className='opacity-50'>
				<source
					media='(min-width: 992px)'
					srcSet={`src/assets/portfolio/desktop/image-${image}.jpg`}
				/>
				<source
					media='(min-width: 768px)'
					srcSet={`src/assets/portfolio/tablet/image-${image}.jpg`}
				/>
				<img
					className='object-cover h-full w-full'
					srcSet={`src/assets/portfolio/mobile/image-${image}.jpg`}
				/>
			</picture>
			<div className='absolute bottom-5 left-5 md:bottom-10 md:left-10'>
				<h4 className='font-bold capitalize mb-2 text-[white] text-lg'>
					{projectName}
				</h4>
				<Link to='portfolio'>
					<button className='opacity-75 font-medium text-[white] text-[15px]'>
						View All Projects
					</button>
				</Link>
			</div>
			<div className='hidden md:block absolute right-5 top-0 opacity-75 text-[white] text-[200px] font-bold'>
				{projectNumber}
			</div>
		</div>
	);
};
