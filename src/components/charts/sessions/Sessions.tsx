import { FC } from 'react'
import { TDataAverageSessions } from '../../../types/types'
import {
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Line,
  LineChart,
  Legend,
  Rectangle,
} from 'recharts'
import './Session.scss'

type SessionTooltipProps = {
  active: boolean | undefined
  payload: any | undefined
}

interface ISessions {
  sessions: TDataAverageSessions
}

const SessionTooltipCursor: FC = (props: any) => {
  const { points, width, height } = props
  const { x } = points[0]

  return <Rectangle
    fill="#000"
    stroke="#000"
    x={x}
    y={0}
    width={width}
    height={height * 500}
    opacity={.1}
  />
}

const SessionTooltip: FC<SessionTooltipProps> = ({ active, payload }: SessionTooltipProps) =>
  <div className="sessions-tooltip">
    {active && payload?.map((entry: any, index: number) => <div className="" key={`item-${index}`}>
      <span>{entry.value} min</span>
    </div>)}
  </div>

const Sessions: FC<ISessions> = ({ sessions }: ISessions) => <>
  <div className="sessions">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={sessions.sessions}
        outerRadius="75%"
        margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
      >
        <XAxis
          dataKey="day"
          stroke="rgba(255, 255, 255, 0.6)"
          dy={10}
          axisLine={false}
          tickLine={false}
          tick={{
            fontSize: 12,
            fontWeight: 500,
          }}
          padding={{ left: 4, right: 4 }}
        />
        <Legend
          verticalAlign="top"
          align="left"
          height={0}
          iconSize={0}
          content={<>Durée moyenne des sessions</>}
        />
        <YAxis
          dataKey="sessionLength"
          domain={[0, 'dataMax + 60']}
          hide={true}
        />
        <Line
          dataKey="sessionLength"
          type={`monotone`}
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth={2}
          dot={false}
          activeDot={{ stroke: 'rgba(255,255,255, 0.6)' }}
        />
        <Tooltip
          content={(props) =>
            <SessionTooltip payload={props.payload} active={props.active} />}
          cursor={<SessionTooltipCursor />}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</>

export default Sessions
