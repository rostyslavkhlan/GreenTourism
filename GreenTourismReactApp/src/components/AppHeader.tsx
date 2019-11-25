import * as React from "react"

export default function AppHeader(props:{backGroundImgURL?: string, logoImgURL?: string, authButtonsInVisible?: boolean}) {
    let logoImgURL = "../img/logo.png";
    if (typeof props.logoImgURL !== "undefined") {
        logoImgURL = props.logoImgURL;
    }

    let backgrImgURL = "../img/header-bg-image.png";
    if (typeof props.backGroundImgURL !== "undefined") {
        backgrImgURL = props.backGroundImgURL;
    }


    return (
        <div style={{}}>
            <header className="header-bg" style={{backgroundImage: `url('${backgrImgURL}')`, background:`url('${backgrImgURL}')`, backgroundSize:"cover", width:"100%"}}>
                <div className="wd navigation">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <a className="logo-text" href="./">ЗЕЛЕНИЙ ТУРИЗМ</a>
                            <a href="./hotels">Готелі</a>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="float-right"
                                // @ts-ignore
                                 style={{visibility: `${props.authButtonsInVisible? "hidden" : "visible"}`}}
                            >
                                <a href="./registration" className="btn btn-header btn-out"
                                   role="button">Зареєструватися</a>
                                <a href="./login" className="btn btn-header btn-out" role="button">Увійти</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "logo">
                    <img src = {logoImgURL} alt={""}/>
                </div>
            </header>
        </div>

    )
}