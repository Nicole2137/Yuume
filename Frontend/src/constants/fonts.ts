import { Plus_Jakarta_Sans } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'
import { Quicksand } from 'next/font/google'
import { Single_Day } from 'next/font/google'
import { Gaegu } from 'next/font/google'

export const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-jakarta',
})

export const cormorantGaramond = Cormorant_Garamond({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-cormorant',
})

export const quickSand = Quicksand({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-quicksand',
})

export const singleDay = Single_Day({
	display: 'swap',
	weight: '400',
	variable: '--font-single-day',
})

export const gaegu = Gaegu({
	subsets: ['latin'],
	display: 'swap',
	weight: ['300', '400', '700'],
	variable: '--font-gaegu',
})
