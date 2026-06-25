import { render, screen } from '@testing-library/react'
import BurgerButton from './BurgerButton'

describe('BurgerButton Component', () => {
	it('shows "Open navigation" label when closed', () => {
		render(<BurgerButton isOpen={false} onClick={() => {}} />)
		const button = screen.getByRole('button', { name: /open navigation/i })
		expect(button).toBeInTheDocument()
	})

	it('shows "Close navigation" label when opened', () => {
		render(<BurgerButton isOpen={true} onClick={() => {}} />)
		const button = screen.getByRole('button', { name: /close navigation/i })
		expect(button).toBeInTheDocument()
	})

	it('calls onClick function when clicked', () => {
		const mockOnClick = vi.fn()
		render(<BurgerButton isOpen={true} onClick={mockOnClick} />)

		const button = screen.getByRole('button')
		button.click()

		expect(mockOnClick).toHaveBeenCalledTimes(1)
	})
})
