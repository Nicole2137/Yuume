const iconsFolder = '/img/icons/mobile-nav'

export const navItems = [
	{ href: '/', label: 'Home', iconPath: `${iconsFolder}/home.svg` },
	// { href: "/about", label: "About", iconPath: `${iconsFolder}/about.svg` },
	{
		href: '/gallery',
		label: 'Gallery',
		iconPath: `${iconsFolder}/gallery.svg`,
	},
	{ href: '/shop', label: 'Shop', iconPath: `${iconsFolder}/shop.svg` },
	{
		href: '/journal',
		label: 'Journal',
		iconPath: `${iconsFolder}/journal.svg`,
	},
	{
		href: '/community',
		label: 'Community',
		iconPath: `${iconsFolder}/community.svg`,
	},
] as const
