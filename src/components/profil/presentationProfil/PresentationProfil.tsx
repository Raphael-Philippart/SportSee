import { FC } from 'react'
import { TUserInformation } from '../../../types/types'
import './PresentationProfil.scss'

interface IUserProfilProps {
  user: TUserInformation
}

const PresentationProfil: FC<IUserProfilProps> = (user: IUserProfilProps) =>
  <div className="presentation-profil">
    <div className="presentation-profil-infos">
      <p>Bonjour <span>{user.user.userInfos.firstName}</span></p>
    </div>
    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
  </div>

export default PresentationProfil
