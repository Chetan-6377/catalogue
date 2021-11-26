import React, { useState } from 'react'
import { Pie } from 'react-chartjs-2'
import Shop from './Shop'
import "./App.css"


function PieChart() {
    const [exit, setexit] = useState(false)
   if(exit){
       return(
           <>
           <Shop />
           </>
       )
   }
    return (
        <>
            <Pie
                data={
                    {
                        labels: ['electronics', 'jewelery', "men's clothing", "women's clothing"],
                        datasets: [{
                            label: '# of Votes',
                            data: [19, 19, 3, 20],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        },],
                        
                    }}
                width={160}
                height={550}
                options={{maintainAspectRatio:false,
                scales:{
                    yAxes:[
                        {
                            ticks:{
                                beginAtZero:true,
                            },
                        },
                    ],
                }}}

            />
            <button className="analyse_btn exit_btn" onClick={() => setexit(true)}>close</button>

        </>
    )
}

export default PieChart
