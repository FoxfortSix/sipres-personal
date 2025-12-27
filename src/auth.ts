import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { InferSelectModel } from 'drizzle-orm'
import { db } from '@/db/'
import * as schema from '@/db/schema'
import { admin, openAPI, username } from 'better-auth/plugins'

type User = InferSelectModel<typeof schema.user>
type Account = InferSelectModel<typeof schema.account>
type Session = InferSelectModel<typeof schema.session>

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'pg',
		schema
	}),

	plugins: [admin(), openAPI(), username()],

	emailAndPassword: {
		enabled: true,
		requireEmailVerification: false
	},

	socialProviders: {
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!
		}
	},

	callbacks: {
		signIn: async ({ user, account }: { user: User; account: Account }) => {
			if (account.providerId === 'google') {
				if (!user.email.endsWith('@upi.edu')) {
					return false
				}
			}
			return true
		},

		session: async ({ session, user }: { session: Session; user: User }) => {
			return {
				...session,
				user: {
					...user,
					nim: user.username,
					role: user.role,
					status: user.verificationStatus,
					ktmUrl: user.ktmUrl
				}
			}
		}
	}
})
