import './chart.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';




const Chart = ({ title, data }) => {
  return (
    <div className='chart'>
      <div className="title">{ title }</div>
       <ResponsiveContainer width="100%" aspect={2/1}>
       <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#0971B8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#0971B8" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" stroke='gray'/>
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
  <Tooltip />
  <Area
   type="monotone"
    dataKey="Total" 
    stroke="#2c8896" 
    fillOpacity={1} 
    fill="url(#colorUv)" />
</AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
//1:21:44