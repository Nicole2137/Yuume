import { render, screen } from '@testing-library/react'
import { motionValue } from 'motion/react'
import userEvent from '@testing-library/user-event'
import MobileNav from './MobileNav'

describe('MobileNav component', () => {
	it('has aria-hidden and inert attributes set to false while visible', () => {
		render(<MobileNav isOpen={true} onClose={() => {}} dragX={motionValue(0)} mobileNavRef={{ current: null }} />)

		const navElement = screen.getByRole('navigation')

		expect(navElement).toHaveAttribute('aria-hidden', 'false')
		expect(navElement).not.toHaveAttribute('inert')
	})

	it('has aria-hidden and inert attributes set to true while hidden', () => {
		render(<MobileNav isOpen={false} onClose={() => {}} dragX={motionValue(100)} mobileNavRef={{ current: null }} />)

		const navElement = screen.getByRole('navigation', { hidden: true })

		expect(navElement).toHaveAttribute('aria-hidden', 'true')
		expect(navElement).toHaveAttribute('inert')
	})

	it('calls onClose after clicking a link', async () => {
		const user = userEvent.setup()
		const mockOnClose = vi.fn()

		render(<MobileNav isOpen={true} onClose={mockOnClose} dragX={motionValue(100)} mobileNavRef={{ current: null }} />)
		const navLinks = screen.getAllByRole('link')

		for (const link of navLinks) {
			await user.click(link)
		}

		expect(mockOnClose).toHaveBeenCalledTimes(navLinks.length)
	})
})
