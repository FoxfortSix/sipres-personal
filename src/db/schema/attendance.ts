import { pgTable, timestamp, unique, text, serial, integer } from 'drizzle-orm/pg-core'
import { user } from './auth'
import { meetings } from './academic'

export const attendances = pgTable(
	'attendances',
	{
		id: serial('id').primaryKey(),
		userId: text('user_id')
			.references(() => user.id, { onDelete: 'cascade' })
			.notNull(),
		meetingId: integer('meetings_id')
			.references(() => meetings.id, { onDelete: 'cascade' })
			.notNull(),
		scannedAt: timestamp('scanned_at').defaultNow(),
		deviceFingerprint: text('device_fingerprint')
	},
	(t) => ({
		unq: unique().on(t.userId, t.meetingId)
	})
)
