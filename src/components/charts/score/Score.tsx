import { FC } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import './Score.scss'

interface IScoreProps {
  score: number
}

const Score: FC<IScoreProps> = ({ score }: IScoreProps) => {
  const scoreData = [
    { name: 'c', value: score, fillColor: `red` },
    { name: 'n', value: 1 - score, fillColor: 'transparent' },
  ]

  return <div className="score">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={[{ name: 'bg', value: 1 }]}
          dataKey="value"
          innerRadius={0}
          outerRadius={70}
          fill="white"
        />
        <Pie
          data={scoreData}
          dataKey="value"
          innerRadius={70}
          outerRadius={80}
          startAngle={90}
          endAngle={450}
          cornerRadius={50}
        >
          {scoreData.map((p, index) => <Cell key={`cell-${index}`} fill={p.fillColor} />)}
        </Pie>
      </PieChart>
    </ResponsiveContainer>

    <div className="score-legend"><p>Score</p></div>
    <div className="score-score">
      <div>
        <h2>{`${100 * score}%`}</h2>
        <p>de votre</p>
        <p>objectif</p>
      </div>
    </div>
  </div>
}

export default Score
