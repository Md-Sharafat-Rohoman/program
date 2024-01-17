
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Home.css'
// eslint-disable-next-line no-unused-vars
import Cart from '../Cart/Cart';

const Home = () => {

    const[allActors,setAllActors]=useState([]);
    const[selectedActors,setSelectedActors]=useState([]);
    const[remaning,setRemaning]=useState(0);
    const[totalCost,setTotalCost]=useState(0);


    useEffect(()=>{
        fetch("../.././../public/Data.json")
        .then(res => res.json())
        .then(data =>setAllActors(data));

    },[])


    const handleSelectActor=(actor)=>{
        const isExist = selectedActors.find((item)=> item.ID==actor.ID);
        let count = actor.Salary;
        // console.log(isExist);
        if(isExist){
          return alert("already booked");
        }
        else{

            selectedActors.forEach((item)=>{
                count = count + item.Salary;
            });
            const totalRemaining =20000-count;
            setTotalCost(count);
            setRemaning(totalRemaining);

            setSelectedActors([...selectedActors,actor]);
        }
        

    };
    // console.log(selectedActors);


    // console.log(allActors);

    return (
        <div className='container'>
            <div className='home-container '>
                <div className="card-container">
                {
                    allActors.map((actor)=>(
                        <div key={actor.id} className='card'>
                    <div className="card-img">
                            <img className='photo' src={actor.Image} alt="" />
                            <h2>{actor.Name}</h2>
                            {/* "../.././../public/20220401_135525.jpg" */}
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, vel.</p>
                            <div className='info'>
                                <p>salary:{actor.Salary}$</p>
                                <p>{actor.Role}</p>
                            </div>
                            <button onClick={()=>handleSelectActor(actor)} className='card-btn'>select</button>
                    </div>

                </div>
                    ))
                }
                </div>
                <div className="cart">
                    <Cart selectedActors={selectedActors} remaning={remaning} totalCost={totalCost}></Cart>
                </div>
            </div>
            
        </div>
    );
};

export default Home;