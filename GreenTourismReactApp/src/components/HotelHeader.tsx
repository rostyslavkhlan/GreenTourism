import * as React from "react"

export default function HotelHeader(props:{backGroundImgURL?: string, logoImgURL?: string, hotelName: string}) {
    let backgrImgURL = "../img/header-other.png";
    if (typeof props.backGroundImgURL !== "undefined") {
        backgrImgURL = props.backGroundImgURL;
    }

    let hotelName = "Назва готелю";
    if (typeof props.hotelName !== "undefined") {
        hotelName = props.hotelName;
    }

    return (
        <div style={{}}>
            <header className="header-other" style={{backgroundImage: `url('${backgrImgURL}')`, background:`url('${backgrImgURL}')`, backgroundSize:"cover", backgroundPosition: "center center", width:"100%"}}>
                <div className="wd navigation">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <a className="logo-text" href="./">ЗЕЛЕНИЙ ТУРИЗМ</a>
                            <a href="./hotels">Готелі</a>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="float-right">
                                {/*<a href="./registration" className="btn btn-header btn-out" role="button">Зареєструватися</a>
                                <a href="./login" className="btn btn-header btn-out" role="button">Увійти</a>*/}
                                <a href="./account" className="btn btn-header btn-in" role="button">особистий кабінет</a>
                                <a href="./login" className="btn btn-header btn-out" role="button">Вийти</a>
                            </div>
                        </div>
                    </div>
                    <div className="ad mar-auto">
                        <div className="name-place">{hotelName}</div>
                        <div className="flag"><img src="./img/flag.png" alt={""}/></div>
                        <div className="flag-address">Address address address address address address address address
                            address
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}