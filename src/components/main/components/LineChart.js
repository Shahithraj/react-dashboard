import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";

const LineCharts = () => {

    const data = [
        {
          "name": "",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "",
          "uv": 3000,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "",
          "uv": 1890,
          "pv": 4800,
          "amt": 2181
        },
        {
          "name": "",
          "uv": 2390,
          "pv": 3800,
          "amt": 2500
        },
        {
          "name": "",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        }
      ]

  return (
    <div style={{marginTop:"20px"}}>
    <LineChart width={730} height={250} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>
    </div>
  )
}

export default LineCharts