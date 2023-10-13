import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,
  Legend, } from 'recharts';


const Graph = ({graphdata,name}) => {

  const formatMonthName = (monthNumber) => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return monthNames[monthNumber - 1]; // JavaScript months are 0-based
  };
  return (
    <div className="">
    
    
    <LineChart width={600} height={300} data={graphdata}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="_id.month" tickFormatter={formatMonthName}  />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#8884d8"
          name={name}
        />
         {/* <Line
          type="monotone"
          dataKey="anotherCount"
          stroke="#82ca9d"
          name="venue Registration"
          data={venue} // Pass the new data
        /> */}
      </LineChart>
    </div>
    
  )
}

export default Graph