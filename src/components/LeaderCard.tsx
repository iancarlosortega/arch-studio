import { FC, useState } from 'react';

interface Props {
	leaderName: string;
	leaderJob: string;
	image: string;
}

export const LeaderCard: FC<Props> = ({ leaderName, leaderJob, image }) => {
	const [isHovered, setIsHovered] = useState(false);

	const toggleHovered = (value: boolean) => {
		if (window.innerWidth < 992) return;
		setIsHovered(value);
	};

	return (
		<div className='p-8 md:p-0'>
			<div
				className='relative lg:cursor-pointer'
				onMouseEnter={() => toggleHovered(true)}
				onMouseLeave={() => toggleHovered(false)}>
				<img
					src={`/src/assets/about/desktop/avatar-${image}.jpg`}
					alt={leaderName}
				/>
				{isHovered && (
					<div className='absolute bg-[#c7c7c7a8] flex items-center w-full h-full gap-6 top-0 left-0 justify-center'>
						<a href='https://www.linkedin.com/' target='_blank'>
							<img
								src='src/assets/icons/icon-linkedin.svg'
								alt='LinkedIn Icon'
							/>
						</a>
						<a
							className='flex items-center'
							href='https://www.twitter.com/'
							target='_blank'>
							<img src='src/assets/icons/icon-twitter.svg' alt='Twitter Icon' />
						</a>
					</div>
				)}
			</div>
			<h5 className='text-black-custom text-lg font-bold mt-6'>{leaderName}</h5>
			<p className='text-gray font-medium my-2 text-[15px]'>{leaderJob}</p>
			<div className='flex gap-6 lg:hidden'>
				<a href='https://www.linkedin.com/' target='_blank'>
					<img src='src/assets/icons/icon-linkedin.svg' alt='LinkedIn Icon' />
				</a>
				<a
					className='flex items-center'
					href='https://www.twitter.com/'
					target='_blank'>
					<img src='src/assets/icons/icon-twitter.svg' alt='Twitter Icon' />
				</a>
			</div>
		</div>
	);
};