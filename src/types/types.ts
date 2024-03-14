import { z } from 'zod'
import {
  UserInformationSchema,
  ActivitySchema,
  KeyDataSchema,
  AverageSessionsSchema,
  PerformanceSchema,
  PerformanceFrenchSchema,
  DataPerformanceItemSchema,
} from './schema'

export type TUserInformation = z.infer<typeof UserInformationSchema>;
export type TActivity = z.infer<typeof ActivitySchema>;
export type TKeyData = z.infer<typeof KeyDataSchema>;
export type TDataAverageSessions = z.infer<typeof AverageSessionsSchema>;
export type TPerformance = z.infer<typeof PerformanceSchema>;
export type TPerformanceFrench = z.infer<typeof PerformanceFrenchSchema>;
export type TDataPerformanceItem = z.infer<typeof DataPerformanceItemSchema>;
