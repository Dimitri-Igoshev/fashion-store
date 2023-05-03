import { DetailedHTMLProps, HTMLAttributes } from 'react'
import cn from 'classnames'

import { Advantages } from '@/components'

interface HeroProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const Hero = ({ className, ...props }: HeroProps): JSX.Element => {
	return (
		<div className={cn('pt-[13.8rem] relative flex flex-col justify-center', className)} {...props}>
			<img src="/hero.png" alt="hero" />
			<div className="bg-black-transparent absolute px-[7rem] py-[3rem]">
				<h1 className="-mt-[2rem] text-xxl text-primary uppercase font-semibold">Summer Sale</h1>
				<p className="text-xl text-white uppercase">Don't compromise on style!<br/>Get flat 30% off for new arrivals.</p>
			</div>
			<Advantages className="flex" />
		</div>
	)
}