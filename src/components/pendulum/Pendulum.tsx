import { FC } from 'react'
import './Pendulum.scss';

const Pendulum: FC = () => <div className="pendulum">
  {Array.from({ length: 3 }).map((_, i) => (
    <div key={i} className={`pendulum-ball ball-${i + 1}`} />
  ))}
</div>

export default Pendulum
