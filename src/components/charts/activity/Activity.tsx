import { FC } from 'react'
import { TActivity } from '../../../types/types'
import { Payload } from 'recharts/types/component/DefaultLegendContent'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import './Activity.scss'

type ActivityLegendProps = {
  payload: Payload[] | undefined
}

type ActivityTooltipProps = {
  active: boolean | undefined
  payload: any | undefined
}

interface IActivityProps {
  activity: TActivity
}

const dateNormalize = (date: Date) => String((new Date(date)).getDate())

const ActivityLegend: FC<ActivityLegendProps> = ({ payload }: ActivityLegendProps) =>
  <div className="activity-legend">
    <div>Activité quotidienne</div>
    <div>
      {payload?.map((entry, index) =>
        <div key={`item-${index}`}>
          <div className={`activity-legend-icon-${index + 1}`}></div>
          <span>{entry.value}</span>
        </div>)}
    </div>
  </div>

const ActivityTooltip: FC<ActivityTooltipProps> = ({ active, payload }: ActivityTooltipProps) =>
  <div className="activity-tooltip">
    {active && payload?.map((entry: any, index: number) =>
      <div className="" key={`item-${index}`}>
        <span>{entry.value} {entry.unit}</span>
      </div>)}
  </div>

const Activity: FC<IActivityProps> = ({ activity }: IActivityProps) =>
  <div className="bg-content activity">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={activity.sessions}
        margin={{ top: 10, bottom: 15, right: 0, left: 0 }}
        barGap={1}
        barCategoryGap="32%"
      >
        <Legend
          verticalAlign="top" height={60}
          content={(props) =>
            <ActivityLegend payload={props.payload} />}
        />
        <CartesianGrid
          strokeDasharray={`3 3`}
          vertical={false}
        />
        <XAxis
          dataKey="day"
          padding={{ left: -30, right: -30 }}
          tickLine={false}
          dy={4}
          tick={{ fontSize: 14, fontWeight: 500 }}
          stroke="#9f9f9f"
          tickFormatter={dateNormalize}
        />
        <YAxis
          yAxisId="kg"
          dx={25}
          dataKey="kilogram"
          domain={['dataMin - 1', 'dataMax + 5']}
          allowDecimals={false}
          orientation="right"
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          yAxisId="cal"
          dataKey="calories"
          domain={[0, 'dataMax + 50']}
          allowDecimals={false}
          hide={true}
        />
        <Bar
          yAxisId="kg"
          dataKey="kilogram"
          fill="black"
          radius={[50, 50, 0, 0]}
          maxBarSize={8}
          name="Poids (kg)"
          unit="kg"
        />
        <Bar
          yAxisId="cal"
          dataKey="calories"
          fill="#E60000"
          radius={[50, 50, 0, 0]}
          maxBarSize={8}
          name="Calories brûlées (kCal)"
          unit="kCal"
        />
        <Tooltip
          cursor={{
            fill: 'rgba(0, 0, 0, 0.1)',
          }}
          offset={50}
          content={(props) =>
            <ActivityTooltip payload={props.payload} active={props.active} />}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>

export default Activity
