import React from "react";
import './card.css'
function cardEle(props){
 return <div className="cardEle">
     <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="robots" />
     <h2>{props.monster.name}</h2>
     <p>{props.monster.email}</p>
 </div>
};
export default cardEle;