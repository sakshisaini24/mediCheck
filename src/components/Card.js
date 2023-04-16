import React from 'react'
import {Link} from 'react-router-dom'

export default function Card(props) {
    const data={
        docname: props.docName,
        docdes: props.docDes,
        docImage: props.docImage,
        docyoe: props.docYoe,
        docspec: props.docSpec
    };
    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "500px" }}>
                <img src={props.docImage} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="text-center text-bold card-title">{props.docName}</h5>
                    <h6 className="text-center">{props.docSpec}</h6>
                    <div class="container w-100">
                        <Link to="/knowAboutDoc" state={data} className="btn m-2 h-100 w-100 bg-info" >Know About {props.docName}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
