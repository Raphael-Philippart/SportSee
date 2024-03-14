'use server'

import {
  TActivity,
  TDataAverageSessions,
  TPerformance,
  TUserInformation
} from '../../types/types'

/**
 * Fetches the user's information from API.
 *
 * @param userId The ID of the user.
 * @returns {Promise<TUserInformation | undefined>} A Promise that resolves to user's information.
 */
export const getInformation = async (userId: string): Promise<TUserInformation | undefined> => {
  try {
    const response = await fetch(`http://localhost:3000/user/${userId}`)
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error(`Error: ${error}`)
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
    const response = await fetch(`http://localhost:3000/user/${userId}/activity`)
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error(`Error: ${error}`)
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
    const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error(`Error: ${error}`)
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
    const response = await fetch(`http://localhost:3000/user/${userId}/performance`)
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error(`Error: ${error}`)
  }
}
