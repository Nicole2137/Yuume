import { z } from 'zod'

export const passwordResetSchema = z
	.object({
		password: z
			.string()
			.min(8, 'Password must contain at least 8 characters.')
			.max(100, 'Password is too long')
			.regex(/\p{Lu}/u, 'Password must contain an uppercase letter.')
			.regex(/[0-9]/, 'Password must contain a number')
			.regex(/[\p{P}\p{S}]/u, 'Password must contain a special character.'),
		repeatedPassword: z.string().min(1, 'Enter your password.'),
	})
	.refine(data => data.password === data.repeatedPassword, {
		error: 'Passwords do not match',
		path: ['repeatedPassword'],
	})

export type PasswordResetFields = z.infer<typeof passwordResetSchema>
