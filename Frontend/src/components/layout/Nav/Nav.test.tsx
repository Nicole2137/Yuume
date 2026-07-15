import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useMobileNav } from '@/hooks/useMobileNav'
import { motionValue } from 'motion/react'
import { navItems, navVariants } from '@/constants/nav'
import Nav from './Nav'

vi.mock('@/hooks/useMobileNav')

describe('Nav component', () => {
	const mockSetIsOpen = vi.fn()

	beforeEach(() => {
		vi.mocked(useMobileNav).mockReturnValue({
			isOpen: true,
			setIsOpen: mockSetIsOpen,
			mobileNavRef: { current: null },
			dragX: motionValue(0),
			overlayOpacity: motionValue(1),
		})

		mockSetIsOpen.mockClear()
	})

	it('closes mobile nav after clicking an overlay', async () => {
		const user = userEvent.setup()

		render(<Nav variant='home' {...navVariants.home} />)
		const overlay = screen.getByTestId('overlay')

		await user.click(overlay)

		expect(mockSetIsOpen).toHaveBeenCalledTimes(1)
		expect(mockSetIsOpen).toHaveBeenCalledWith(false)
	})

	it('closes mobile nav after clicking a burger button', async () => {
		const user = userEvent.setup()

		render(<Nav variant='home' {...navVariants.home} />)
		const burgerBtn = screen.getByRole('button')

		await user.click(burgerBtn)

		const updaterFunction = mockSetIsOpen.mock.calls[0][0]

		expect(mockSetIsOpen).toHaveBeenCalledTimes(1)
		expect(updaterFunction(true)).toBe(false)
		expect(updaterFunction(false)).toBe(true)
	})

	it('renders every link', () => {
		render(<Nav variant='home' {...navVariants.home} />)

		const navListItems = screen.getAllByRole('listitem')

		expect(navListItems).toHaveLength(navItems.length * 2)
	})

	it('shows overlay when mobile nav is active', () => {
		render(<Nav variant='home' {...navVariants.home} />)

		const overlay = screen.getByTestId('overlay')

		expect(overlay).toHaveStyle({ pointerEvents: 'auto', opacity: '1' })
	})

	it('hides overlay when mobile nav is not active', () => {
		vi.mocked(useMobileNav).mockReturnValue({
			isOpen: false,
			setIsOpen: () => {},
			mobileNavRef: { current: null },
			dragX: motionValue(0),
			overlayOpacity: motionValue(0),
		})

		render(<Nav variant='home' {...navVariants.home} />)

		const overlay = screen.getByTestId('overlay')

		expect(overlay).toHaveStyle({ pointerEvents: 'none', opacity: 0 })
	})
})
