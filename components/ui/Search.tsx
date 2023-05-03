import { DetailedHTMLProps, HTMLAttributes } from 'react'
import cn from 'classnames'

import { BsSearch } from 'react-icons/bs'

interface SearchProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	value: string
	onInput: () => void
	placeholder?: string
}

export const Search = ({value, onInput, placeholder='Search...', className, ...props}: SearchProps): JSX.Element => {
	return (
		<div
			className={cn('h-[4.8rem] px-[1.5rem] py-[1rem] flex items-center bg-white text-base', className)}
			{...props}
		>
			<input
				type="text"
				className="outline-none border-none w-full italic"
				placeholder={placeholder}
				value={value}
				onInput={(e) => onInput(e.target.value)}
			/>
			<BsSearch className="text-base" />
		</div>
	)
}