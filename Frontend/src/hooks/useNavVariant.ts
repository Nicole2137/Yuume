import { usePathname } from 'next/navigation'
import { navVariants } from '@/constants/nav'

export const useNavVariant = () => {
	const pathName = usePathname()

	const matchedKey = Object.keys(navVariants).find(key => {
		if (key === '/') return pathName === '/'

		return pathName.startsWith(key)
	})

	const navConfig = matchedKey ? navVariants[matchedKey] : navVariants['/']

	const { variant, logoSrc } = navConfig

	return {
		variant,
		logoSrc,
	}
}
