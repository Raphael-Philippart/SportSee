import { FC } from 'react'
import { TKeyData } from '../../types/types'
import calories from './img/calories.svg'
import protein from './img/protein.svg'
import glucides from './img/glucides.svg'
import lipides from './img/lipides.svg'
import Card from './Card'
import './CardInfos.scss'

interface ICardInfoProps {
  keyData: TKeyData
}

const CardInfos: FC<ICardInfoProps> = ({ keyData }: ICardInfoProps) => {
  const cards = Object.entries(keyData).map(([dataKey, dataValue], index) => {
    switch (dataKey) {
      case 'calorieCount':
        return <Card key={index} icon={calories} alt={'calories'} data={dataValue} unit={'Kcal'} title="calories" />
      case 'proteinCount':
        return <Card key={index} icon={protein} alt={'protein'} data={dataValue} unit={'g'} title="proteines" />
      case 'carbohydrateCount':
        return <Card key={index} icon={glucides} alt={'glucides'} data={dataValue} unit={'g'} title="glucides" />
      case 'lipidCount':
        return <Card key={index} icon={lipides} alt={'lipides'} data={dataValue} unit={'g'} title="lipides" />
      default:
        return <div key={index}></div>
    }
  })

  return <>{cards}</>
}

export default CardInfos
