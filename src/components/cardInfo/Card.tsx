import { FC } from 'react'

interface ICardProps {
  icon: string,
  alt: string,
  data: number,
  unit: string,
  title: string
}

const Card: FC<ICardProps> = (
  {
    icon,
    alt,
    data,
    unit,
    title,
  }: ICardProps) =>
  <div className="card-infos">
    <div className="card-infos-container"><img className="card-infos-img" src={icon} alt={alt} /></div>
    <div>
      <p className="card-infos-data">{data}{unit}</p>
      <p className="card-infos-title">{title}</p>
    </div>
  </div>

export default Card
