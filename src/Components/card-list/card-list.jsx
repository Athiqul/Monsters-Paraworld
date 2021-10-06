import React from "react";
import "./card-list.css";
import CardEle from "../card/card";
function Card(props){
    return <div className="card">
        {props.Monsters.map(monster=>(
            <CardEle key={monster.id} monster={monster}/>
        ))}
    </div>;
}
export default Card;