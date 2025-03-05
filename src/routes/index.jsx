import { createFileRoute } from '@tanstack/react-router';
import RJSLogo from '/logo.svg';

export const Route = createFileRoute('/')({
	component: Index,
});

function Index() {
	return (
		<div className='pt-36 pb-12 flex flex-col gap-6 items-center justify-center text-white'>
			<div>
				<img src={RJSLogo} className='logo' alt='RJS logo' />
			</div>

			<h1 className='text-3xl font-bold'>React Jump Start</h1>

			<div className='card'>
				list of included things - tailwind v4 - react 19 - react-router v7
			</div>
		</div>
	);
}
