import { renderHook, act } from '@testing-library/react'
import { useMobileNav } from './useMobileNav'

describe('useMobileNavHook', () => {
	it('closes mobile nav after clicking escape key', () => {
		const { result } = renderHook(() => useMobileNav())

		act(() => {
			result.current.setIsOpen(true)
		})

		expect(result.current.isOpen).toBe(true)

		act(() => {
			const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' })
			document.dispatchEvent(escapeEvent)
		})

		expect(result.current.isOpen).toBe(false)
	})
})
