import { z } from 'zod'

export const forgotPasswordSchema = z.object({
	email: z.email('Enter a valid email address.'),
})

export type ForgotPasswordFields = z.infer<typeof forgotPasswordSchema>
