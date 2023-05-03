import { DetailedHTMLProps, HTMLAttributes } from 'react'
import cn from 'classnames'

interface XProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const X = ({ className, ...props }: XProps): JSX.Element => {
	return (
		<div className={cn('', className)} {...props}>

		</div>
	)
}