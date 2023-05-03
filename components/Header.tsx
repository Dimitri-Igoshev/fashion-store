import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import { MdLanguage } from 'react-icons/md'
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { SlHandbag } from 'react-icons/sl'

import { Search } from '@/components/ui'

export interface Menu {
	id: number
	title: string
	path: string
}

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	logo: string
	menu: Menu[]
	submenu: Menu[]
}

export const Header = ({ logo, menu, submenu, className, ...props }: HeaderProps): JSX.Element => {
	const [search, setSearch] = useState('')

	return (
		<div className={cn('fixed w-full z-50', className)} {...props}>
			<div className="flex items-center justify-between px-[3rem] py-[1.7rem] bg-white">
				<ul className="flex text-lg uppercase">
					{menu.map(item => (
						<li key={item.id} className="mr-[3rem] transition-all duration-500 hover:text-primary">
							<Link href={item.path}>{item.title}</Link>
						</li>
					))}
				</ul>
				<div className="text-[3.6rem] font-semibold tracking-widest">{logo}</div>
				<div className="flex text-lg">
					<div className="flex cursor-pointer transition-all duration-500 hover:text-primary">
						<span className="text-base">EN</span>
						<MdLanguage className="ml-[.5rem]" />
					</div>
					<AiOutlineUser className="ml-[1.5rem] cursor-pointer transition-all duration-500 hover:text-primary" />
					<AiOutlineHeart className="ml-[1.5rem] cursor-pointer transition-all duration-500 hover:text-primary" />
					<SlHandbag className="ml-[1.5rem] cursor-pointer transition-all duration-500 hover:text-primary" />
				</div>
			</div>
			<div className="bg-black px-[3rem] flex items-center justify-between h-[5rem]">
				<ul className="flex text-white text-base">
					{submenu.map(item => (
						<li key={item.id} className="mr-[2.5rem] transition-all duration-300 hover:text-primary">
							<Link href={item.path}>{item.title}</Link>
						</li>
					))}
				</ul>
				<Search value={search} onInput={value => setSearch(value)} className="w-[40rem]"/>
			</div>
		</div>
	)
}