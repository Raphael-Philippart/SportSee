import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TActivity, TDataAverageSessions, TPerformance, TUserInformation } from '../../types/types'
import { getActivity, getAverageSessions, getInformation, getPerformance } from './actions'
import { normalizeDataPerformance } from '../../utils/normalizer'
import NewtonPendulum from '../pendulum/Pendulum'
import PresentationProfil from '../profil/presentationProfil/PresentationProfil'
import Activity from '../charts/activity/Activity'
import CardInfos from '../cardInfo/CardInfos'
import Sessions from '../charts/sessions/Sessions'
import Performance from '../charts/performance/Performance'
import Score from '../charts/score/Score'
import './UserProvider.scss'

const UserProvider: FC = () => {
  const { userId } = useParams()
  const [userData, setUserData]
    = useState<TUserInformation | undefined | boolean>(undefined)
  const [userSessionsData, setSessionsData]
    = useState<TActivity | undefined>(undefined)
  const [userAverageSessions, setAverageSessions]
    = useState<TDataAverageSessions | undefined>(undefined)
  const [userPerformance, setPerformance]
    = useState<TPerformance[] | undefined>(undefined)

  useEffect(() => {
    async function fetchUser() {
      const userData = await getInformation(userId!)
      // we set the user here anyway,
      // because if the user is false it means it comes from the catch, the api does not respond
      setUserData(userData)
      if (userData) {
        const activityData = await getActivity(userId!)
        const userAverageSessions = await getAverageSessions(userId!)
        const userPerformance = await getPerformance(userId!)

        setSessionsData(activityData)
        setAverageSessions(userAverageSessions)
        setPerformance(normalizeDataPerformance(userPerformance))
      }
    }

    if (userId) fetchUser().then()
  }, [userId])

  if (!userId) return <div className="pendulum-container">Désolé, aucun Id de profil n'a été trouvé.</div>
  if (userData === false) return <div className="pendulum-container">Désolé, notre API ne répond pas !!</div>
  if (userId && userData === undefined) return <div className="pendulum-container"><NewtonPendulum /></div>

  return <div className="user-profil">
    {userData && userSessionsData && userAverageSessions && userPerformance && <>
      <PresentationProfil user={userData} />
      <div className="user-profil-content">
        <div>
          <div><Activity activity={userSessionsData} /></div>
          <div className="user-profil-detail">
            <div className=""><Sessions sessions={userAverageSessions} /></div>
            <div className="bg-content"><Performance intensity={userPerformance} /></div>
            <div className="bg-content"><Score score={userData.score ? userData.score : userData.todayScore} /></div>
          </div>
        </div>
        <div className="user-profil-content-column">
          <CardInfos keyData={userData.keyData} />
        </div>
      </div>
    </>}
  </div>
}

export default UserProvider
