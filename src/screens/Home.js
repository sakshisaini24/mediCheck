import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

export default function Home() {
    const [search, setSearch] = useState('');
    const [doctorData, setDoctors] = useState([]);
    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/doctorData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json();
        setDoctors(response);
        console.log(response)
    }
    useEffect(() => {
        loadData()
    }, [])
    return (
        <div>
            <div><Navbar></Navbar></div>
            <div><Carousel></Carousel></div>
            <div className="m-3">
                <div className="container-fluid">
                    <form className="d-flex justify-content-center" style={{ zIndex: "10" }}>
                        <input className="form-control me-2" type="search" placeholder="Search By Doctor's Speciality.." aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />

                    </form>
                </div>
            </div>
            <div className="h1 m-3 text-center text-bold ">Meet our Doctors!</div>
            <div className="container">
                {
                    doctorData.map((data) => {
                        return (
                            <div className='row row-cols-3'>
                                {
                                    data.filter((k) => (k.specialityName.toLowerCase().includes(search.toLocaleLowerCase())))
                                    .map(item => {
                                        return (
                                            <div key={item._id} className="col">
                                                <Card docName={item.name} docDes={item.description} docImage={item.img}
                                                    docSpec={item.specialityName} docYoe={item.yearsOfExp}></Card>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div><Footer></Footer></div>
        </div>
    )
}
