import React from 'react'
import Navbar from './Navbar'
import SeriesData from './components/SeriesData';
import Card from './components/Card'
import Counting from './components/Counting'

const App = ()=>(
    <>  
        <Navbar/>
        {/* Retuning the card component by using array map function */}
        
        
        {SeriesData.map((val,index) =>{
        // console.log(index);  
        return(
        <Card
            key={val.id}
            cast={val.cast}
            gener={val.gener}
            link={val.link}
            posterimage={val.posterimage}
            seriesname={val.seriesname}
            title={val.title}
        />
        );  
    })}
    <Counting />
    
    </>
);
export default App;
   