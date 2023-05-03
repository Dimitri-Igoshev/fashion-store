import { DetailedHTMLProps, HTMLAttributes } from 'react'
import cn from 'classnames'
import { TfiGift } from 'react-icons/tfi'
import { FaShippingFast } from 'react-icons/fa'

interface AdvantagesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const Advantages = ({ className, ...props }: AdvantagesProps): JSX.Element => {
	return (
		<div className={cn('flex items-center justify-around bg-primary text-base py-[3rem] px-[3rem]', className)} {...props}>
			<div className="flex items-center">
				<TfiGift className="text-[2rem]" />
				<span className="ml-[1rem] uppercase">10 for new clients</span>
			</div>
			<div className="flex items-center">
				<FaShippingFast className="text-lg" />
				<span className="ml-[1rem] uppercase">Free delivery</span>
			</div>
			<div className="flex items-center">
				<span className="uppercase">100 Day return policy</span>
			</div>
		</div>
	)
}