import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

export default function IndexLineChart() {
  return (
    <LineChart
      className="mt-32 mx-auto"
      style={{
        width: '50%',
        maxWidth: 800,
        aspectRatio: 1.618,
      }}
      data={[
        { x: 1, y: 1 },
        { x: 2, y: 4 },
      ]}
    >
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <XAxis dataKey="x" />
      <YAxis />
      <Line type="monotone" dataKey="y" stroke="#8884d8" />
      <RechartsDevtools />
    </LineChart>
  );
}
