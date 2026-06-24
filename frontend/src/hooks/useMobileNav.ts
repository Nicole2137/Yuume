import { useState, useEffect, useRef, useCallback } from 'react'
import { useMotionValue, animate } from 'motion/react'
import { mobileNavDragProperties, mobileNavAnimation } from '@/constants/mobileNav'

export const useMobileNav = () => {
	const [isOpen, setIsOpen] = useState(false)
	const mobileNavRef = useRef<HTMLElement>(null)
	const dragX = useMotionValue<number>(mobileNavDragProperties.closedPosition)

	useEffect(() => {
		if (!isOpen) return

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setIsOpen(false)
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [isOpen])

	const animateNavToState = useCallback(() => {
		animate(dragX, isOpen ? mobileNavDragProperties.openedPosition : mobileNavDragProperties.closedPosition, {
			type: mobileNavAnimation.type,
			duration: mobileNavAnimation.duration,
			ease: mobileNavAnimation.ease,
		})
	}, [isOpen])

	useEffect(() => animateNavToState(), [animateNavToState])

	useEffect(() => {
		let [touchStartX, touchStartY] = [0, 0]
		let isDragging = false
		let navWidth = 0
		let mobileNav: HTMLElement | null = null

		const handleTouchStart = (event: TouchEvent) => {
			mobileNav = mobileNavRef.current
			const currentTouch = event.changedTouches[0]
			;[touchStartX, touchStartY] = [currentTouch.screenX, currentTouch.screenY]

			isDragging = true

			if (mobileNav) {
				navWidth = mobileNav.getBoundingClientRect().width
			}
		}

		const handleTouchMove = (event: TouchEvent) => {
			mobileNav = mobileNavRef.current

			if (!isDragging || !mobileNav) return

			const currentX = event.touches[0].screenX
			const currentY = event.touches[0].screenY
			const deltaX = currentX - touchStartX
			const deltaY = Math.abs(currentY - touchStartY)

			if (deltaY > Math.abs(deltaX)) {
				isDragging = false
				return
			}

			const dragOffsetPercent = (deltaX / navWidth) * 100

			const newTargetPositionPercent = Math.max(0, Math.min(100, isOpen ? dragOffsetPercent : 100 + dragOffsetPercent))

			dragX.set(newTargetPositionPercent)
		}

		const handleTouchEnd = () => {
			mobileNav = mobileNavRef.current

			if (!isDragging || !mobileNav) return

			isDragging = false

			const currentPercent = dragX.get()

			const pixelsMoved = Math.abs(((isOpen ? currentPercent : 100 - currentPercent) / 100) * navWidth)

			if (!isOpen && pixelsMoved >= mobileNavDragProperties.openOffset) {
				setIsOpen(true)
			} else if (isOpen && pixelsMoved >= mobileNavDragProperties.closeOffset) {
				setIsOpen(false)
			} else {
				animateNavToState()
			}
		}

		document.addEventListener('touchstart', handleTouchStart)
		document.addEventListener('touchmove', handleTouchMove)
		document.addEventListener('touchend', handleTouchEnd)

		return () => {
			document.removeEventListener('touchstart', handleTouchStart)
			document.removeEventListener('touchmove', handleTouchMove)
			document.removeEventListener('touchend', handleTouchEnd)
		}
	}, [isOpen, animateNavToState])

	return {
		isOpen,
		setIsOpen,
		mobileNavRef,
		dragX,
	}
}
