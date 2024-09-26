import { Bar } from "react-chartjs-2";
import { BarElement,  CategoryScale,Chart as ChartJS,Legend, LinearScale,Title, Tooltip } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend);

export function BarData() {    
    const option = {
        responsive: true,
        plugins: {
          legend: { position: "chartArea" },
          title: {
            display: true,
            text: "Growth Over the Years",
          },
        },
      };
      const data = {
      labels:["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug"],
      datasets: [
      {
      label: "2023",
      data: [ 10, 12, 20, 40, 50,55,56,60],
      backgroundColor: "green",
      },
      {
      label:'2024',
      data:[15,20,25,45,55,60,63,65],
      backgroundColor:'blue'
      },
      
      
      ],
      
      
      };
    return (
        <div className="mx-4 sm:mx-[5%] py-10">
            <div className="bg-white rounded-lg grid lg:grid-cols-12 px-4 py-4">
                <div className="mr-auto place-self-center lg:col-span-7 w-full h-64 sm:h-96 lg:h-[500px]">                    
                <Bar options={option} data={data} />
                </div>
                <div className="hidden lg:col-span-5 lg:flex lg:justify-center lg:pt-10">
                    <p className="text-gray-900 mb-4 text-4xl font-extrabold">Growing <br/> Better<br/> Each day. <br /><br/>
                        Reaching <br/>the World.</p>
                </div>
                    
            </div>
           
        </div>
    )
}


