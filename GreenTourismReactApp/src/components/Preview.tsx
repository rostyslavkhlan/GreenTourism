import * as React from "react";

export default function Preview(props: {imgURL?: string, name?: string, href: string, comment: string}) {

    let imgURL = "../img/test-img.png";
    if (typeof props.imgURL !== "undefined") {
        imgURL = props.imgURL;
    }

    let name = "Назва";
    if (typeof props.name !== "undefined") {
        name = props.name;
    }

   return(
        <div className="col-12 col-md-6 col-lg-3" style={{
        }}>
            <a href={props.href}>
                <div style={{
                    overflowY: "hidden",
                    textOverflow: "ellipsis",
                    boxShadow: "0px 0px 7px rgba(0, 0, 0, .4)",
                    borderRadius: "5px",
                    backgroundImage: `url('${imgURL}')`,
                    backgroundPosition: "center center",
                    backgroundSize: `cover`,
                    background: `url('${imgURL}') blue none repeat scroll 0 0`,
                    flex: "1 1 18%",
                    height: "auto",
                    margin: "10px",
                    width: "auto"
                }}>
                    <div className="lokmp" style={{height: "inherit", backgroundColor: "#3A3A3Ad0", marginBottom: "0px", borderRadius: "3px"}}><h5>{name}</h5>
                        {props.comment}
                    </div>
                </div>
            </a>
        </div>
    )
} 
