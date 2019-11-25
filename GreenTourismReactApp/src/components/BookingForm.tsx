import * as React from "react";
import HotelModel from "../models/hotelModel";
import RoomModel from "../models/roomModel";
import moment from "moment";

export default function BookingForm(
    props:{
        hotel: HotelModel,
        room: RoomModel,
        placeName: string,
        arrivalDate: moment.Moment,
        leavingDate: moment.Moment,
    }) {
    const hotelName = "Готель Буковина"; // todo: must be derived from props
    const amountOfStars = 4; // todo: from props
    let stars = ""; for (let i = 0; i < amountOfStars; i++) { stars+="★"; }
    const placeName = "Chernivtsi"; // todo: from props
    const arrivalDate = moment("10:00", "HH:mm").add(24, "hours");
    const leavingDate = moment("9:00", "HH:mm").add(72, "hours");

    return(
        <div style={{display:"flex", flexDirection: "column", alignItems:"center"}}>
            <div className={"auth-form"}>
                <h1 style={{display: "flex"}}>БРОНЮВАННЯ</h1>
                <br/>
                <h3 style={{display: "flex"}}>{hotelName}</h3>
                <span>{stars}</span>
                <span>{placeName}</span>
                <div className={"light-card"} style={{display:"flex", width: "100%", fontSize:"13px"}}>
                    <div style={{display: "flex", alignItems:"center", justifyContent:"center", width:"50%", height: "70px", border: "none", borderWidth:"1px", borderRightWidth:"0.5px", borderTopLeftRadius:"5px", borderBottomLeftRadius:"5px"}}>
                        <span>{arrivalDate.format("YYYY-MM-DD HH:mm")}</span>
                    </div>
                    <div style={{display: "flex", alignItems:"center", justifyContent:"center", width:"50%", height: "70px", border: "none", borderWidth:"1px", borderLeftWidth:"0.5px", borderTopRightRadius:"5px", borderBottomRightRadius:"5px"}}>
                        <span>{leavingDate.format("YYYY-MM-DD HH:mm")}</span>
                    </div>
                </div>
                <br/>
                <input placeholder="Введіть своє ім'я" style={{margin: "2px", width:"100%"}}></input>
                <input placeholder="Введіть своє прізвище" style={{margin: "2px", width:"100%"}}></input>
                <br/>
                <div style={{display:"flex", flexDirection:"row", width:"100%", justifyContent:"space-between"}}>
                    <button className={"btn btn-auth-form"}>ЗАБРОНЮВАТИ</button>
                    <a href={"./hotel"}>
                        <button className={"btn btn-auth-form btn-auth-form-empty"} >НАЗАД</button>
                    </a>
                </div>
            </div>
        </div>
    )
}