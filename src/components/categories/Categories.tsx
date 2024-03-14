import { FC } from 'react'
import MeditationSVG from './img/meditation.svg'
import SwimmingSVG from './img/swimming.svg'
import CyclingSVG from './img/cycling.svg'
import BodyBuildingSVG from './img/bodybuilding.svg'
import IconButton from './iconButton/IconButton'
import './Categories.scss'

const Categories: FC = () => <div className='categories'>
  <div className='categories-menu'>
    <IconButton iconSrc={MeditationSVG} link='/' alt={'Meditation'} />
    <IconButton iconSrc={SwimmingSVG} link='/' alt={'Natation'}/>
    <IconButton iconSrc={CyclingSVG} link='/' alt={'Cyclisme'}/>
    <IconButton iconSrc={BodyBuildingSVG} link='/' alt={'Musculation'}/>
  </div>
  <p className='categories-copyright'>Copyright, SportSee 2020</p>
</div>

export default Categories
