// @ts-ignore
import * as React from "react";
import Carousel from "nuka-carousel";

export default function Place(props: {placeName:string}) {
    return (
        <div className="ad mar-auto place-page-add">
            <div className="row">
                <div className="col-5">
                    <Carousel autoplay wrapAround speed={2500} transitionMode={"scroll"}>
                        <div style={{
                            backgroundImage: `url("./img/test-img.png")`,
                            backgroundPosition: "center center",
                            backgroundSize: `cover`,
                            background: `url("./img/test-img.png") blue none repeat scroll 0 0`,
                            height: "300px",
                            width: "100%"}}>
                        </div>
                        <div style={{
                            backgroundImage: `url("./img/hotelPreviews/troyandaKarpat.jpg")`,
                            backgroundPosition: "center center",
                            backgroundSize: `cover`,
                            background: `url("./img/test-img.png") blue none repeat scroll 0 0`,
                            height: "300px",
                            width: "100%"}}>
                        </div>
                        <div style={{
                            backgroundImage: `url("./img/hotelPreviews/zakarpatskiyOazis.jpg")`,
                            backgroundPosition: "center center",
                            backgroundSize: `cover`,
                            background: `url("./img/test-img.png") blue none repeat scroll 0 0`,
                            height: "300px",
                            width: "100%"}}>
                        </div>
                    </Carousel>
                </div>
                <div className="col-7">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                    <p><b>Послуги:</b><br/> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                        aliquam quaerat voluptatem.</p>
                    <div className="btn btn-hotel-yellow">0 кімнат</div>
                </div>
            </div>

                <div className="ad pages-line mar-auto">
                    <a href="./">Зелений туризм</a> > <b>{props.placeName}</b>
                </div>

            <div>
                <div className="ad place-hotels-list mar-auto">
                    <div className="row">
                        <div className="col-12 col-md-6 place-hotel-outside">
                            <div className="row place-hotel-inside">
                                <div className="col-5 mar-auto"><img src="../img/hotelPreviews/zakarpatskiyOazis.jpg"/></div>
                                <div className="col-7">
                                    <h5>Lorem ipsum</h5>
                                    <div className="address">Address</div>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    veritatis.
                                    <div className="float-right">
                                        <a href="./hotel" className="btn place-hotel-btn"
                                           role="button">Детальніше</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 place-hotel-outside">
                            <div className="row place-hotel-inside">
                                <div className="col-5 mar-auto"><img src="./img/exmpl.png"/></div>
                                <div className="col-7">
                                    <h5>Lorem ipsum</h5>
                                    <div className="address">Address</div>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    veritatis.
                                    <div className="float-right">
                                        <a href="./hotel" className="btn place-hotel-btn"
                                           role="button">Детальніше</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-12 col-md-6 place-hotel-outside">
                            <div className="row place-hotel-inside">
                                <div className="col-5 mar-auto"><img src="./img/exmpl.png"/></div>
                                <div className="col-7">
                                    <h5>Lorem ipsum</h5>
                                    <div className="address">Address</div>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    veritatis.
                                    <div className="float-right">
                                        <a href="./hotel" className="btn place-hotel-btn"
                                           role="button">Детальніше</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 place-hotel-outside">
                            <div className="row place-hotel-inside">
                                <div className="col-5 mar-auto"><img src="../img/hotelPreviews/zakarpatskiyOazis.jpg"/></div>
                                <div className="col-7">
                                    <h5>Lorem ipsum</h5>
                                    <div className="address">Address</div>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    veritatis.
                                    <div className="float-right">
                                        <a href="./hotel" className="btn place-hotel-btn"
                                           role="button">Детальніше</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
