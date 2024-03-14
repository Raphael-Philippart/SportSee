import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './CustomLink.scss'

interface ICustomLinkProps {
  to: string,
  className?: string,
  children: ReactNode
}

const CustomLink: FC<ICustomLinkProps> = ({ to, className, children = '' }: ICustomLinkProps) =>
  <Link
    to={to}
    className={`CustomLink ${className}`}>
    {children}
  </Link>

export default CustomLink
