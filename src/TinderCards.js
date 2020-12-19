/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react';
import "./TinderCards.css"
import TinderCard from "react-tinder-card";
import axios from './axios';
function TinderCards() { 
    const[people,setPeople]=useState([
    
    {    name:"Elon Musk",
        imgUrl:"https://ethereumworldnews.com/wp-content/uploads/2019/04/Transpo-Elon-Musk-RTX6P9YW.jpg",
    },
    {
        name:"Jeff Bezos",
        imgUrl:"https://pyxis.nymag.com/v1/imgs/da6/730/7547e7203e6aa5a5965e0ea9a16d5ce3f7-07-jeff-bezos.rsquare.w700.jpg",
    },
    {
        name:"Ellen Barkin",
        imgUrl:"https://vignette.wikia.nocookie.net/disney/images/d/d0/Ellen_DeGeneres.jpg/revision/latest?cb=20180125231207",
    },


]);
useEffect(()=>{
async function fetchData(){
    const req=await axios.get('/tinder/cards');

    setPeople(req.data);
}
fetchData();
},[]);

const swipped =(_direction,nameToDelete)=>{
    console.log("removing:"+nameToDelete);
};

const outOfFrame=(name)=>{
    console.log(name+"left the screen!");
}
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
               {people.map((person)=>(
                < TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir)=>swipped(dir,person.name)}
                onCardLeftScreen={()=>outOfFrame(person.name)}>
                
                <div                                                   
                    style={{backgroundImage:`url(${person.imgUrl})`}}                                                                                                           
                    className="card">
                        <h3>{person.name}</h3>
                </div>

                </ TinderCard>
                
            ))
        }
        </div>
        </div>
    );
}

export default TinderCards
