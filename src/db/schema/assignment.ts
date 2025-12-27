import { pgTable, text, timestamp, serial, integer } from 'drizzle-orm/pg-core'
import { user } from './auth'
import { meetings } from './academic'

export const resumes = pgTable('resumes', {
	id: serial('id').primaryKey(),
	userId: text('user_id')
		.references(() => user.id, { onDelete: 'cascade' })
		.notNull(),
	meetingId: integer('meetings_id')
		.references(() => meetings.id, { onDelete: 'cascade' })
		.notNull(),
	fileUrl: text('file_url').notNull(),
	fileType: text('file_type', { enum: ['pdf', 'docx'] }).notNull(),
	originalName: text('original_name'),
	submittedAt: timestamp('submitted_at').defaultNow()
})

export const makeupAssignments = pgTable('makeup_assignments', {
	id: serial('id').primaryKey(),
	userId: text('user_id')
		.references(() => user.id, { onDelete: 'cascade' })
		.notNull(),
	title: text('title').notNull(),
	reason: text('reason'),
	submissionUrl: text('submission_url'),
	status: text('status', { enum: ['assigned', 'submitted', 'approved', 'rejected'] }).default('assigned'),
	assignedAt: timestamp('assigned_at').defaultNow(),
	submittedAt: timestamp('submitted_at')
})
