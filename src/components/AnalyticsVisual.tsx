import { motion } from 'framer-motion'
import { Area, AreaChart, Bar, BarChart, ResponsiveContainer, XAxis } from 'recharts'

const trend = [{ v: 24 }, { v: 35 }, { v: 29 }, { v: 48 }, { v: 43 }, { v: 62 }, { v: 58 }, { v: 76 }]
const bars = [{ v: 48 }, { v: 72 }, { v: 58 }, { v: 84 }, { v: 68 }]

export default function AnalyticsVisual() {
  return (
    <motion.div className="analytics-visual" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
      <div className="visual-grid" />
      <motion.div className="kpi-card kpi-one" animate={{ y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
        <span>INSIGHT SCORE</span>
        <strong>92.4</strong>
        <small>+12.8% trend</small>
      </motion.div>
      <div className="chart-card">
        <div className="chart-header">
          <div><span>DATA TREND</span><strong>Sample analytics</strong></div>
          <span className="live-dot">Live</span>
        </div>
        <div className="trend-chart">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trend}>
              <XAxis dataKey="v" hide />
              <Area type="monotone" dataKey="v" stroke="#39765c" strokeWidth={3} fill="#a8c5a8" fillOpacity={0.35} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <motion.div className="kpi-card kpi-two" animate={{ y: [0, 6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
        <span>DATA QUALITY</span>
        <div className="quality-row"><strong>98%</strong><div className="quality-ring">✓</div></div>
      </motion.div>
      <motion.div className="bar-card" animate={{ x: [0, 5, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
        <span>Distribution</span>
        <div className="bar-chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={bars}><Bar dataKey="v" fill="#39765c" radius={[5, 5, 0, 0]} /></BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
      <span className="sample-label">ILLUSTRATIVE DATA</span>
    </motion.div>
  )
}
