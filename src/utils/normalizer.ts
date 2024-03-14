import { TDataPerformanceItem, TPerformance, TPerformanceFrench } from '../types/types'

/**
 * The object to map kind numbers to their French string representation
 *
 * @type {Record<number, string>}
 */
const kindMapping: Record<number, string> = {
  1: 'cardio',
  2: 'énergie',
  3: 'endurance',
  4: 'force',
  5: 'vitesse',
  6: 'intensité',
}

/**
 * A function to normalize a data item by replacing the kind number with its French string representation
 *
 * @returns {Object} The normalized item with the kind replaced by its French string representation
 * @param kind
 * @param data
 */
const normalizeDataItem = ({ kind, value }: TDataPerformanceItem): any => {
  const normalizedKind = kindMapping[kind]
  return { value, kind: normalizedKind }
}

/**
 * Normalize a data array by normalizing each item with normalizeDataItem
 *
 * @param {TPerformance | undefined} data - The array of data items to normalize
 * @returns {TPerformanceFrench[] | undefined} The normalized data array
 */
export const normalizeDataPerformance = (data: TPerformance | undefined): TPerformanceFrench[] | undefined =>
  data!.data.map(normalizeDataItem)
