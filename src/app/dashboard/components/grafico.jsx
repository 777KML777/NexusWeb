'use client'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"
const data = [
    {
      "date": "JAN",
      "name": "Janeiro",
      "Leonardo": 9000,
      "Kleber": 7000,
      "Ana": 5000,
      "Augusto": 4000,
      "João": 2400,
      "amt": 2400
    },
    {
      "date": "FEV",
      "name": "Fevereiro",
      "Leonardo": 8000,
      "Kleber": 6000,
      "Ana": 4000,
      "Augusto": 3000,
      "João": 1398,
      "amt": 2210
    },
    {
      "date": "MAR",
      "name": "Março",
      "Leonardo": 7000,
      "Kleber": 5000,
      "Ana": 4000,
      "Augusto": 3000,
      "João": 800,
      "amt": 2290
    },
    {
      "date": "ABR",
      "name": "Abril",
      "Leonardo": 6780,
      "Kleber": 4000,
      "Ana": 3000,
      "Augusto": 2000,
      "João": 9908,
      "amt": 2000
    },
    {
      "date": "MAI",
      "name": "Maio",
      "Leonardo": 5890,
      "Kleber": 3000,
      "Ana": 2000,
      "Augusto": 1000,
      "João": 8800,
      "amt": 2181
    },
    {
      "date": "JUN",
      "name": "Junho",
      "Leonardo": 4578,
      "Kleber": 2000,
      "Ana": 1000,
      "Augusto": 200,
      "João": 7800,
    },
    {
      "date": "JUL",
      "name": "Julho",
      "Leonardo": 4578,
      "Kleber": 2000,
      "Ana": 1000,
      "Augusto": 200,
      "João": 7800,
    },
    {
      "date": "AGO",
      "name": "Agosto",
      "Leonardo": 3490,
      "Kleber": 1000,
      "Ana": 400,
      "Augusto": 9000,
      "João": 6300,
      "amt": 2100
    },
    {
      "date": "SET",
      "name": "Setembro",
      "Leonardo": 3390,
      "Kleber": 900,
      "Ana": 9000,
      "Augusto": 8000,
      "João": 5800,
    },
    {
      "date": "OUT",
      "name": "Outubro",
      "Leonardo": 2235,
      "Kleber": 9000,
      "Ana": 8000,
      "Augusto": 7000,
      "João": 4800,
    },
    {
      "date": "NOV",
      "name": "Novembro",
      "Leonardo": 1320,
      "Kleber": 8000,
      "Ana": 7000,
      "Augusto": 6000,
      "João": 3800,
    },
    {
      "date": "DEZ",
      "name": "Dezembro",
      "Leonardo": 580,
      "Kleber": 7000,
      "Ana": 6000,
      "Augusto": 5000,
      "João": 2800,
    },
  ]
const barPoints = [
    {
      "name": "Leonardo",
      "points": 5879,
      "cor": "#370634"
    },
    {
      "name": "Kleber",
      "points": 2135,
      "cor": "#6ed875"
    },
    {
      "name": "Ana",
      "points": 6948,
      "cor": "#576a70"
    },
    {
      "name": "Augusto",
      "points": 6568,
      "cor": "#455bd3"
    },
    {
      "name": "João",
      "points": 3164,
      "cor": "#9f8304"
    },
    {
      "name": "Empresário 1",
      "points": 7865,
      "cor": "#9f8304"
    },
    {
      "name": "Empresário 2",
      "points": 3124,
      "cor": "#9f8304"
    },
    {
      "name": "Empresário 3",
      "points": 1364,
      "cor": "#9f8304"
    },
  ]

export function Grafico(){
    return(
        <LineChart width={1500} height={450} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} className="text-black">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="João" stroke="#8884d8" />
            <Line type="monotone" dataKey="Leonardo" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Kleber" stroke="#ca8282" />
            <Line type="monotone" dataKey="Ana" stroke="#1bdaf3" />
            <Line type="monotone" dataKey="Augusto" stroke="#c62daf" />
        </LineChart>
    )
}

export function GraficoBar(){
  return(
  <BarChart width={1500} height={400} data={barPoints} className="text-black" >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="points" fill="#07510A" />
  </BarChart>
  )
}