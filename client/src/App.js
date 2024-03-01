import React, { useEffect, useState } from 'react';
import { UilGithubAlt,UilBagAlt,UilLinkedinAlt,UilTwitterAlt} from '@iconscout/react-unicons';

import axios from 'axios';
import './App.css';

//import from files
import Header from './components/Header';
import Tabsrow from './components/Tabsrow';


function App() {
    //state to save data received from the server
    const [mainData, setMainData] = useState([]);    
    //asynchronous function to fetch data from server and updating the state
    const getDataFromDB = async() => {
        try{
          const response = await axios.get(`https://blackcoffer-ekw3.onrender.com/api/data/all`);
            setMainData(response.data.data)
        }
        catch(e){
            console.log(e)
        }
    }
    //calling the above function on first render
    useEffect(()=>{
        getDataFromDB();
    },[])
    //where a state is updated, we will print the length of data received just for the test purposes
    useEffect(()=>{
      console.log(mainData.length)
    },[mainData])

  return (
    
    <div className="font-inter bg-[#f1fada]">
      <Header />
        <Tabsrow data={mainData} setMainData={setMainData} />
      
       <footer className="py-4 bg-gray-900">
        <h2 className="text-center text-xl font-bold text-gray-400 mb-2">Contact Me</h2>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/iamshivanshyadav" target="_blank" rel="noopener noreferrer">
            <UilGithubAlt className="text-gray-300 hover:text-purple-300" size="24" />
          </a>
          <a href="https://www.linkedin.com/in/shivanshyadav27/" target="_blank" rel="noopener noreferrer">
            <UilLinkedinAlt className="text-gray-300 hover:text-purple-300" size="24" />
          </a>
          <a href="https://twitter.com/shivaayshivansh" target="_blank" rel="noopener noreferrer">
            <UilTwitterAlt className="text-gray-300 hover:text-purple-300" size="24" />
          </a>
          <a href="https://shivaay-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
            <UilBagAlt className="text-gray-300 hover:text-purple-300" size="24" />
          </a>
        </div>
        <p className="text-center mt-2 text-sm text-gray-400">
          Developed by Shivansh Yadav
        </p>
      </footer>
      </div>

  );
}

export default App;
