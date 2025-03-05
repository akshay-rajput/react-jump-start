import { createFileRoute } from '@tanstack/react-router';
import RJSLogo from '/logo.svg';
import { Link } from '@tanstack/react-router';

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

			<div className='card text-slate-500 font-medium text-lg flex items-center flex-wrap gap-2'>
				<Link
					to='https://react.dev/learn/installation'
					target='_blank'
					className='hover:text-blue-300 hover:underline'
				>
					React 19
				</Link>

				<span className=''>•</span>
				<Link
					to='https://tanstack.com/router/latest/docs/framework/react/installation'
					target='_blank'
					className='hover:text-blue-300 hover:underline'
				>
					Tanstack Router
				</Link>
				<span className=''>•</span>
				<Link
					to='https://tailwindcss.com/docs/installation/using-vite'
					target='_blank'
					className='hover:text-blue-300 hover:underline'
				>
					TailwindCSS v4
				</Link>
				<span className=''>•</span>
				<Link
					to='https://tailwindcss.com/docs/installation/using-vite'
					target='_blank'
					className='hover:text-blue-300 hover:underline'
				>
					Vite
				</Link>
			</div>
		</div>
	);
}
