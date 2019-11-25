import * as React from "react"

export default function LoginForm(props:{backGroundImgURL?: string, logoImgURL?: string}) {
    return(
        <div style={{display:"flex", flexDirection: "column", alignItems:"center"}}>
            <div className={"auth-form"}>
                <h1 style={{display: "flex"}}>ВХІД</h1>
                <br/>
                <input placeholder="Введіть свій e-mail" style={{margin: "2px", width:"100%"}}></input>
                <input type="password" placeholder="Введіть свій пароль" style={{margin: "2px", width:"100%"}}></input>
                <br/>
                <div style={{display:"flex", flexDirection:"row", width:"100%", justifyContent:"space-between"}}>
                    <button className={"btn btn-auth-form"}>УВІЙТИ</button>
                    <a href={"./registration"}>
                        <button className={"btn btn-auth-form btn-auth-form-empty"} >ЗАРЕЄСТРУВАТИСЯ</button>
                    </a>
                </div>
            </div>
        </div>
    )
}