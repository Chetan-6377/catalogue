import React, { useState } from 'react'
import "./App.css"
import PieChart from './PieChart';
import Shop from './Shop';

const App = () => {
  const [isPreview, setIsPreview] = useState(true);
  return (
    <>
        {isPreview? 
          <Shop />
        :
          <PieChart />
        }
      <button className='analyse_btn' onClick={() => setIsPreview(!isPreview)}>Analyse</button>
     </>
  )
      }
export default App
