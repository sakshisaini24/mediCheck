import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function KnowAbout(props) {
    const location = useLocation();
    const propsData = location.state;
    return (
        <div className='container text-center'>
            <div className="h1 text-center text-bold mb-3">{propsData.docname}</div>
            <div className="h4 text-center text-italic mb-3">Years of Experience: {propsData.docyoe}</div>
            <div className="h5 text-center text-italic mb-3">Speciality: {propsData.docspec}</div>
            <img src={propsData.docImage} className="rounded mx-auto h-50 w-50 d-block hover-zoom mb-3" alt="..." />
            
            <div className="text-center">{propsData.docdes}</div>
            <div class="container w-100">
                <Link to="/pay" state={propsData} className=" btn m-2 h-70 w-50 bg-info">Consult from {propsData.docname} Now!</Link>
            </div>
        </div>
    )
}
