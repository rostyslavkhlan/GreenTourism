import * as React from "react";

export default function (props: {children: React.Component}) {
    return (
        <div className="main-page">
            <div style={{
                background: "#AAAAAA30 none repeat scroll 0 0",
                display: "flex",
                justifyContent: "space-evenly",
                flexFlow: "row wrap",
                position: "relative",
                padding: "16px",
                width: "auto"}}>
                {props.children}
            </div>
        </div>
    )
}