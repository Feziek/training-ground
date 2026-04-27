import { Chart } from "@components"

export function Dashboard() {
  const salesData = {
    labels: [ "Jan", "Feb", "Mar", "Apr", "May" ],
    datasets: [
      {
        label: "Sales",
        data: [ 12, 19, 3, 5, 25 ],
        borderColor: "#3a3d42",
        backgroundColor: "rgba(128, 128, 128, 1)",
      }
    ]
  }

  return (
    <div className="min-h-screen mt-20 flex flex-col items-center p-6 gap-6">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        <div className="h-64">
          <Chart 
            type="line" 
            data={ salesData } 
          />
        </div>
        <div className="h-64">
          <Chart 
            type="bar" 
            data={ salesData } 
          />
        </div>
        <div className="h-64">
          <Chart 
            type="pie" 
            data={ salesData } 
          />
        </div>
        <div className="h-64">
          <Chart 
            type="doughnut" 
            data={ salesData } 
          />
        </div>
      </div>
    </div>
  )
}