import { FC } from 'react'
import { TPerformance } from '../../../types/types'
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts'
import './Performance.scss'

interface IPerformanceProps {
  intensity: TPerformance[]
}

const Performance: FC<IPerformanceProps> = ({ intensity }: IPerformanceProps) =>
  <div className="performance">
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        data={intensity}
        outerRadius={window.innerWidth >= 1024 ? '60%' : '20%'}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dy={1}
          dx={1}
          dataKey="kind"
          stroke="#FFF"
          tickLine={false}
          tick={{
            fontSize: 12,
            fontWeight: 500,
          }}
        />
        <Radar
          dataKey="value"
          fill="#ff0000"
          fillOpacity={0.6}
          stroke="transparent"
        />
      </RadarChart>
    </ResponsiveContainer>
  </div>

export default Performance
