import { pgTable, text, timestamp, boolean, integer, serial } from 'drizzle-orm/pg-core'

export const meetings = pgTable('meetings', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	description: text('description'),
	startTime: timestamp('start_time').defaultNow().notNull(),
	endTime: timestamp('end_time'),
	currentQrToken: text('current_qr_token').notNull(),
	qrVersion: integer('qr_version').default(0).notNull(),
	isActive: boolean('is_active').default(true)
})
