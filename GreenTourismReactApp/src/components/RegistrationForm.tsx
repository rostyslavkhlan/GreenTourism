import * as React from "react"

export default function RegistrationForm(props:{backGroundImgURL?: string, logoImgURL?: string}) {
    return(
        <div className={"auth-form"}>
            <h1 style={{display: "flex"}}>РЕЄСТРАЦІЯ</h1>
            <br/>
            <input placeholder="Введіть свій e-mail" style={{margin: "2px", width:"100%"}}></input>
            <input type="password" placeholder="Введіть свій пароль" style={{margin: "2px", width:"100%"}}></input>
            <input type="password" placeholder="Повторіть свій пароль" style={{margin: "2px", width:"100%"}}></input>
            <br/>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", width:"100%"}}>
                <button className={"btn btn-auth-form"}>ЗАРЕЄСТРУВАТИСЯ</button>
                <a href={"./login"}>
                    <button className={"btn btn-auth-form btn-auth-form-empty"}>УВІЙТИ</button>
                </a>
            </div>
        </div>
    )
}