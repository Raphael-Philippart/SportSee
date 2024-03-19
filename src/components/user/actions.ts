'use server'

import {
  TActivity,
  TDataAverageSessions,
  TPerformance,
  TUserInformation,
} from '../../types/types'
import users from '../../mock/users'
import activity from '../../mock/activity'
import average_sessions from '../../mock/average-sessions'
import performance from '../../mock/performance'

const host = process.env.REACT_APP_API_HOST
const mocked = process.env.REACT_APP_MOCKED === 'true'

/**
 * Fetches the user's information from API.
 *
 * @param userId The ID of the user.
 * @returns {Promise<TUserInformation | undefined>} A Promise that resolves to user's information.
 */
export const getInformation = async (userId: string): Promise<TUserInformation | undefined> => {
  try {
    if(mocked) return users.find(user => user.id === parseInt(userId))
    const response = await fetch(`${host}/user/${userId}`)
    const data = await response.json()
    return data.data
  } catch (error) {
    //console.error(`Error OK: ${error}`)
    return false
  }
}

/**
 * Fetches the user's activity from API.
 *
 * @param userId The ID of the user.
 * @returns {Promise<TActivity | undefined>} A Promise that resolves to user's activity.
 */
export const getActivity = async (userId: string): Promise<TActivity | undefined> => {
  try {
    if(mocked) return activity.find(user => user.userId === parseInt(userId))
    const response = await fetch(`${host}/user/${userId}/activity`)
    const data = await response.json()
    return data.data
  } catch (error) {
    //console.error(`Error: ${error}`)
  }
}

/**
 * Fetches the user's average sessions from API.
 *
 * @param userId The ID of the user.
 * @returns {Promise<TDataAverageSessions | undefined>} A Promise that resolves to user's average sessions.
 */
export const getAverageSessions = async (userId: string): Promise<TDataAverageSessions | undefined> => {
  try {
    if(mocked) return average_sessions.find(user => user.userId === parseInt(userId))
    const response = await fetch(`${host}/user/${userId}/average-sessions`)
    const data = await response.json()
    return data.data
  } catch (error) {
    //console.error(`Error: ${error}`)
  }
}

/**
 * Fetches the user's performance from API.
 *
 * @param userId The ID of the user.
 * @returns {Promise<TPerformance | undefined>} A Promise that resolves to user's performance.
 */
export const getPerformance = async (userId: string): Promise<TPerformance | undefined> => {
  try {
    if (mocked) return performance.find(user => user.userId === parseInt(userId))
    const response = await fetch(`${host}/user/${userId}/performance`)
    const data = await response.json()
    return data.data
  } catch (error) {
    //console.error(`Error: ${error}`)
  }
}
