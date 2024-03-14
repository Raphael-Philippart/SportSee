import { z, ZodObject } from 'zod'

/**
 * Defines the schema for keyData
 *
 * @typedef {Object} KeyDataSchema
 * @name KeyDataSchema
 * @property {z.ZodNumber} calorieCount - A number representing the calorie count.
 * @property {z.ZodNumber} proteinCount - A number representing the protein count.
 * @property {z.ZodNumber} carbohydrateCount - A number representing the carbohydrate count.
 * @property {z.ZodNumber} lipidCount - A number representing the lipid count.
 */
const KeyDataSchema = z.object({
  calorieCount: z.number(),
  proteinCount: z.number(),
  carbohydrateCount: z.number(),
  lipidCount: z.number(),
})

/**
 * Defines the common part of the user information schema
 */
const commonUserInformationPart = {
  id: z.number(),
  userInfos: z.object({
    firstName: z.string(),
    lastName: z.string(),
    age: z.number(),
  }),
  keyData: KeyDataSchema,
};

/**
 * The schema for "score" field
 *
 * @type {z.ZodObject<typeof commonUserInformationPart>}
 */
const ScoreSchema: ZodObject<typeof commonUserInformationPart> = z.object({
  ...commonUserInformationPart,
  score: z.number(),
});

/**
 * The schema for "todayScore" field
 *
 * @type {z.ZodObject<typeof commonUserInformationPart>}
 */
const TodayScoreSchema: ZodObject<typeof commonUserInformationPart> = z.object({
  ...commonUserInformationPart,
  todayScore: z.number(),
});

/**
 * The union schema accepting either an object matching ScoreSchema or an object matching TodayScoreSchema
 *
 * @type {z.ZodUnion<[z.ZodTypeAny, z.ZodTypeAny]>}
 */
const UserInformationSchema: z.ZodUnion<[z.ZodTypeAny, z.ZodTypeAny]> = ScoreSchema.or(TodayScoreSchema);

/**
 * Defines the schema for DataActivity
 *
 * @typedef {Object} DataActivitySchema
 * @name DataActivitySchema
 * @property {z.ZodString} day - A string representing the day.
 * @property {z.ZodNumber} kilogram - A number representing the kilogram.
 * @property {z.ZodNumber} calories - A number representing the calories.
 */
const DataActivitySchema = z.object({
  day: z.string(),
  kilogram: z.number(),
  calories: z.number(),
})

/**
 * Defines the schema for DataAverageSessions
 *
 * @typedef {Object} DataAverageSessionsSchema
 * @name DataAverageSessionsSchema
 * @property {z.ZodNumber} day - A number representing the day.
 * @property {z.ZodNumber} sessionLength - A number representing the session length.
 */
const DataAverageSessionsSchema = z.object({
  day: z.number(),
  sessionLength: z.number(),
})

/**
 * Defines the schema for AverageSessionsSchema
 *
 * @typedef {Object} AverageSessionsSchema
 * @name AverageSessionsSchema
 * @property {z.ZodNumber} day - A number representing the day.
 * @property {z.ZodArray} session - A number representing the session .
 */
const AverageSessionsSchema = z.object({
  userId: z.number(),
  sessions: z.array(DataAverageSessionsSchema),
})

/**
 * Defines the schema for Activity data in the application.
 *
 * Uses the Zod data validation library to specify the expected structure and types of the data.
 * @typedef {Object} ActivitySchema
 * @name ActivitySchema
 * @property {z.ZodNumber} userId - A number representing the user's id.
 * @property {z.ZodArray} sessions - An array of session data objects, each conforming to the DataActivitySchema.
 * @returns {z.ZodObject} - Returns the structure of the Activity data object after assertion of schema.
 */
const ActivitySchema = z.object({
  userId: z.number(),
  sessions: z.array(DataActivitySchema),
})

/**
 * Defines a schema for an item in the data array.
 *
 * @typedef {Object} dataItemSchema
 * @name dataPerformanceItemSchema
 * @property {z.ZodNumber} value - The value associated with the item.
 * @property {z.ZodNumber} kind - Indicates the type of the item.
 */
const DataPerformanceItemSchema = z.object({
  value: z.number(),
  kind: z.number(),
})

/**
 * Defines a schema for the kind object that holds the different kind types.
 *
 * @typedef {Object} kindPerformanceSchema
 * @name kindPerformanceSchema
 * @property {z.ZodString} 1 - Represents "cardio".
 * @property {z.ZodString} 2 - Represents "energy".
 * @property {z.ZodString} 3 - Represents "endurance".
 * @property {z.ZodString} 4 - Represents "strength".
 * @property {z.ZodString} 5 - Represents "speed".
 * @property {z.ZodString} 6 - Represents "intensity".
 */
const kindPerformanceSchema = z.object({
  1: z.literal('cardio'),
  2: z.literal('energy'),
  3: z.literal('endurance'),
  4: z.literal('strength'),
  5: z.literal('speed'),
  6: z.literal('intensity'),
})

/**
 * Defines a schema for the kind object that holds the different kind types.
 *
 * @typedef {Object} kindPerformanceFrenchSchema
 * @name kindPerformanceSchema
 * @property {z.ZodString} 1 - Represents "cardio".
 * @property {z.ZodString} 2 - Represents "energy".
 * @property {z.ZodString} 3 - Represents "endurance".
 * @property {z.ZodString} 4 - Represents "strength".
 * @property {z.ZodString} 5 - Represents "speed".
 * @property {z.ZodString} 6 - Represents "intensity".
 */
const kindPerformanceFrenchSchema = z.object({
  1: z.literal('cardio'),
  2: z.literal('énergie'),
  3: z.literal('endurance'),
  4: z.literal('force'),
  5: z.literal('vitesse'),
  6: z.literal('intensité'),
})

/**
 * Main schema that defines the structure of the primary object.
 *
 * @typedef {Object} PerformanceSchema
 * @name PerformanceSchema
 * @property {z.ZodNumber} userId - Unique identifier for the user.
 * @property {z.ZodObject} kind - A set of different kind types.
 * @property {z.ZodArray} data - An array of data items.
 */
const PerformanceSchema = z.object({
  userId: z.number(),
  kind: kindPerformanceSchema,
  data: z.array(DataPerformanceItemSchema),
})

/**
 * Main schema that defines the structure of the primary object.
 *
 * @typedef {Object} PerformanceFrenchSchema
 * @name PerformanceFrenchSchema
 * @property {z.ZodNumber} userId - Unique identifier for the user.
 * @property {z.ZodObject} kind - A set of different kind types.
 * @property {z.ZodArray} data - An array of data items.
 */
const PerformanceFrenchSchema = z.object({
  userId: z.number(),
  kind: kindPerformanceFrenchSchema,
  data: z.array(DataPerformanceItemSchema),
})

export {
  UserInformationSchema,
  ActivitySchema,
  KeyDataSchema,
  AverageSessionsSchema,
  PerformanceSchema,
  PerformanceFrenchSchema,
  DataPerformanceItemSchema
}
