import { Header } from '@/components'
import { Hero } from '@/components/sections'

const menu = [
	{ id: 1, title: 'Women', path: '/' },
	{ id: 2, title: 'Men', path: '/' },
	{ id: 3, title: 'Kids', path: '/' },
]

const submenu = [
	{ id: 1, title: 'New', path: '/' },
	{ id: 2, title: 'Clothing', path: '/' },
	{ id: 3, title: 'Shoes', path: '/' },
	{ id: 4, title: 'Sports', path: '/' },
	{ id: 5, title: 'Streetwear', path: '/' },
	{ id: 6, title: 'Accessories', path: '/' },
	{ id: 7, title: 'Brands', path: '/' },
	{ id: 8, title: 'SALE%', path: '/' },
]

export default function Home() {
	return (
		<main>
			<Header logo="FASHION STORE" menu={menu} submenu={submenu} />
			<Hero />
		</main>
	)
}
