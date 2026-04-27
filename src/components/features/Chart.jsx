import { memo } from "react"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js"

import { CHART_MAP } from "@lib/constants"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
)

export const Chart = memo(function Chart(props) {
  const { type, data, options = {}, className = "", ...chart } = props
  
  const ChartComponent = CHART_MAP[ type ]

    return (
      <div 
        { ...chart }
        className={`w-full bg-white p-4 rounded-xl shadow ${ className }`}
      >
        <ChartComponent 
          data={ data } 
          options={ options } 
        />
      </div>
    )
  }
)