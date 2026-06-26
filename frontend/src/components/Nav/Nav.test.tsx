import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useMobileNav } from '@/hooks/useMobileNav'
import { motionValue } from 'motion/react'
import { navItems } from '@/constants/nav'
import Nav from './Nav'

vi.mock('@/hooks/useMobileNav')

describe('Nav component', () => {
	it('closes mobile nav after clicking an overlay', async () => {
		const mockSetIsOpen = vi.fn()
		const user = userEvent.setup()

		vi.mocked(useMobileNav).mockReturnValue({
			isOpen: true,
			setIsOpen: mockSetIsOpen,
			mobileNavRef: { current: null },
			dragX: motionValue(0),
		})

		render(<Nav />)
		const overlay = screen.getByTestId('overlay')

		await user.click(overlay)

		expect(mockSetIsOpen).toHaveBeenCalledTimes(1)
		expect(mockSetIsOpen).toHaveBeenCalledWith(false)
	})

	it('closes mobile nav after clicking a burger button', async () => {
		const mockSetIsOpen = vi.fn()
		const user = userEvent.setup()

		vi.mocked(useMobileNav).mockReturnValue({
			isOpen: true,
			setIsOpen: mockSetIsOpen,
			mobileNavRef: { current: null },
			dragX: motionValue(0),
		})

		render(<Nav />)
		const burgerBtn = screen.getByRole('button')

		await user.click(burgerBtn)

		const updaterFunction = mockSetIsOpen.mock.calls[0][0]

		expect(mockSetIsOpen).toHaveBeenCalledTimes(1)
		expect(updaterFunction(true)).toBe(false)
		expect(updaterFunction(false)).toBe(true)
	})

	it('renders every link', () => {
		render(<Nav />)

		const navListItems = screen.getAllByRole('listitem')

		expect(navListItems).toHaveLength(navItems.length * 2)
	})

	it('shows overlay when mobile nav is active', () => {
		vi.mocked(useMobileNav).mockReturnValue({
			isOpen: true,
			setIsOpen: () => {},
			mobileNavRef: { current: null },
			dragX: motionValue(0),
		})

		render(<Nav />)

		const overlay = screen.getByTestId('overlay')

		expect(overlay).toHaveClass('overlay--active')
	})

    it('hides overlay when mobile nav is not active',()=>{
        vi.mocked(useMobileNav).mockReturnValue({
			isOpen: false,
			setIsOpen: () => {},
			mobileNavRef: { current: null },
			dragX: motionValue(0),
		})

		render(<Nav />)

		const overlay = screen.getByTestId('overlay')

		expect(overlay).not.toHaveClass('overlay--active')
    })
})
