export const mobileNavDragProperties = {
	openedPosition: 0,
	closedPosition: 100,
	closeOffset: 50,
	openOffset: 50,
	verticalScrollThreshold: 20,
	horizontalDragThreshold: 20,
} as const

export const mobileNavAnimation = {
	type: 'tween',
	duration: 0.3,
	ease: 'easeOut',
} as const
