// @ts-ignore
import * as React from "react";

export default function Hotel(props: {hotelName:string}) {
    return (
        <div>
            <div className="ad mar-auto place-page-add">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                    quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                    laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui
                    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
                    quo voluptas nulla pariatur?</p>
            </div>

            <div className="ad pages-line mar-auto">
                <a href="./">Зелений туризм</a> > <b>{props.hotelName}</b>
            </div>

            <div className="ad place-hotels-list mar-auto">

                <div className="row">
                    <div className="col-12 place-hotel-outside">
                        <div className="row hotel-inside">
                            <div className="col-4 mar-auto">
                                <img src="./img/exmpl-2.png"/>
                            </div>
                            <div className="col-5">
                                <table className="tbl">
                                    <tr>
                                        <td> <h5>Lorem ipsum</h5> </td>
                                        <td className="cont-rg"><div className="btn btn-hotel-yellow">0000 грн.</div> <div className="btn btn-hotel-white">2 місця</div></td>
                                    </tr>
                                </table>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                            </div>
                            <div className="col-3">
                                <b>Зручності:</b>
                                <ul>
                                    <li>Телевізор</li>
                                    <li>Прасувальні приналежності</li>
                                    <li>Опалення</li>
                                    <li>Супутникові канали</li>
                                </ul>
                                <div className="float-right"><a href="./booking" className="btn place-hotel-btn" role="button">Бронювати</a></div></div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 place-hotel-outside">
                        <div className="row hotel-inside">
                            <div className="col-4 mar-auto">
                                <img src="./img/exmpl-2.png"/>
                            </div>
                            <div className="col-5">
                                <table className="tbl">
                                    <tr>
                                        <td> <h5>Lorem ipsum</h5> </td>
                                        <td className="cont-rg"><div className="btn btn-hotel-yellow">0000 грн.</div> <div className="btn btn-hotel-white">2 місця</div></td>
                                    </tr>
                                </table>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                            </div>
                            <div className="col-3">
                                <b>Зручності:</b>
                                <ul>
                                    <li>Телевізор</li>
                                    <li>Прасувальні приналежності</li>
                                    <li>Опалення</li>
                                    <li>Супутникові канали</li>
                                </ul>
                                <div className="float-right"><a href="./booking" className="btn place-hotel-btn" role="button">Бронювати</a></div></div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 place-hotel-outside">
                        <div className="row hotel-inside">
                            <div className="col-4 mar-auto">
                                <img src="./img/exmpl-2.png"/>
                            </div>
                            <div className="col-5">
                                <table className="tbl">
                                    <tr>
                                        <td> <h5>Lorem ipsum</h5> </td>
                                        <td className="cont-rg"><div className="btn btn-hotel-yellow">0000 грн.</div> <div className="btn btn-hotel-white">2 місця</div></td>
                                    </tr>
                                </table>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                            </div>
                            <div className="col-3">
                                <b>Зручності:</b>
                                <ul>
                                    <li>Телевізор</li>
                                    <li>Прасувальні приналежності</li>
                                    <li>Опалення</li>
                                    <li>Супутникові канали</li>
                                </ul>
                                <div className="float-right"><a href="./booking" className="btn place-hotel-btn" role="button">Бронювати</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

