import { FC } from 'react'
import { Link } from 'react-router-dom'
import './IconButton.scss'

interface IIconButtonProps {
  iconSrc: string;
  link: string;
  alt: string;
}

const IconButton: FC<IIconButtonProps> = ({ iconSrc, link, alt }: IIconButtonProps) =>
  <Link to={link} className="icon-button">
    <img src={iconSrc} alt={alt} />
  </Link>

export default IconButton
