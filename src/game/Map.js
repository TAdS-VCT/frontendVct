import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mapvct from './mapvct.png'
import pointervct from './pointer.png'
// import img1 from './img1.webp'
import './map.css';


export default function Map() {

    const [userIndex, setUserIndex] = useState(0);
    const userdeatils = async () => {
        const response1 = await fetch("http://localhost:8000/user/getuser", {
            method: "GET",
            headers: {
                "authToken": localStorage.getItem("usertoken")
            },
        });
        const json = await response1.json();
        // console.log(json);
        const name01 = json.userRiddleIndex;
        setUserIndex(name01);
        // console.log(userIndex, "userIndex Map")
    }
    useEffect(() => {
        userdeatils();
        // eslint-disable-next-line
    }, []);

    // -------------------
    const navigate = useNavigate();
    const [riddles, setRiddles] = useState(" ");
    const riddledeatils = async () => {
        const response = await fetch("http://localhost:8000/riddle/getriddle2", {
            method: "GET",
            headers: {
                "riddleIndex": userIndex
            }
        });
        const json = await response.json();
        setRiddles(json.Result[0].riddle)
        // console.log(riddles);
    }
    useEffect(() => {
        riddledeatils();
        // eslint-disable-next-line 
    }, [riddles, setRiddles]);

    if (userIndex === 3) {
        setTimeout(() => {
            alert("game completed")
            navigate("/", { replace: true })
        }, 2000);
    }



    return (
        <>
            <button type="button" className="btn btn-dark" onClick={() => navigate("/", { replace: true })} aria-hidden="true" >  Exit Game </button>
            <div className="container">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            </div>
                            <div className="modal-body">
                                {`${riddles}`}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            score:{`${userIndex}`}/19
            {/* ----------------------------- */}

            <img src={mapvct} alt="hii" className='mapvct' id='mapvct' />
            <div className="box" id='map'>
                <img className="MAIN_BUILDING" id="00MB" data-image="kv1.jpg" src={pointervct} alt="pointer" onClick={() => navigate("/game/mb", { replace: true })} aria-hidden="true" />
                <img className="HELIPAD" id="01helipad" data-image="heli.jpg" src={pointervct} alt="pointer" onClick={() => navigate("/game/helipad", { replace: true })} aria-hidden="true" />
                <img className="LAKE" id="02lake" data-image="s4.jpg" src={pointervct} alt="pointer" onClick={() => navigate("/game/lake", { replace: true })} aria-hidden="true" />
                <img className="NALANDA" id="03nalanda" data-image="tsc1.jfif" src={pointervct} alt="pointer" onClick={() => navigate("/game/nalanda", { replace: true })} aria-hidden="true" />
                <img className="NEHRU_MUSEUM" id="04NehruMuseum" data-image="tsc1.jfif" src={pointervct} alt="pointer" onClick={() => navigate("/game/nehru", { replace: true })} aria-hidden="true" />
                {/* <img className="TWOPOINTTWO" id="05TWOPOINTTWO" data-image="tsc1.jfif" src={pointervct} alt="pointer" onClick={() => navigate("/game/twopoint", { replace: true })} aria-hidden="true" />
                <img className="CLOCK_TOWER" id="06tower" data-image="clock.jpg" src={pointervct} alt="pointer" onClick={() => navigate("/game/clock", { replace: true })} aria-hidden="true" />
                <img className="SHIRU_CAFE" id="07shiru" data-image="shiru.jpg" src={pointervct} alt="pointer" onClick={() => navigate("/game/shiru", { replace: true })} aria-hidden="true" />
                <img className="TECH_MARKET" id="08TechMarket" data-image="tech.png" src={pointervct} alt="pointer" onClick={() => navigate("/game/techm", { replace: true })} aria-hidden="true" />
                <img className="JNAN_GHOSH" id="09jnan" data-image="station.jpg" src={pointervct} alt="pointer" onClick={() => navigate("/game/jg", { replace: true })} aria-hidden="true" />
                <img className="AGRICULTURE_DEPARTMENT" id="10agri" data-image="agri.jpg" src={pointervct} alt="pointer" onClick={() => navigate("/game/agri", { replace: true })} aria-hidden="true" />
                <img className="ADDA" id="11adda" data-image="station.jpg" src={pointervct} alt="pointer" onClick={() => navigate("/game/adda", { replace: true })} aria-hidden="true" />
                <img className="GYMKHANA" id="12gym" data-image="mb.jpg" src={pointervct} alt="pointer" onClick={() => navigate("/game/gym", { replace: true })} aria-hidden="true" />
                <img className="OLD_ARCHI" id="13old" data-image="old.jpg" src={pointervct} alt="pointer" onClick={() => navigate("/game/old", { replace: true })} aria-hidden="true" />
                <img className="TOAT" id="14Toat" data-image="ccd1.jpg" src={pointervct} alt="pointer" onClick={() => navigate("/game/toat", { replace: true })} aria-hidden="true" />
                <img className="LIBRARY" id="15lib" data-image="lib.jfif" src={pointervct} alt="pointer" onClick={() => navigate("/game/lib", { replace: true })} aria-hidden="true" />
                <img className="PFC" id="16Pfc" data-image="math.jpg" src={pointervct} alt="pointer" onClick={() => navigate("/game/pfc", { replace: true })} aria-hidden="true" />
                <img className="SBI" id="17Sbi" data-image="tennis.jpg" src={pointervct} alt="pointer" onClick={() => navigate("/game/sbi", { replace: true })} aria-hidden="true" />
                <img className="PURI_GATE" id="18puri" data-image="station.jpg" src={pointervct} alt="pointer" onClick={() => navigate("/game/puri", { replace: true })} aria-hidden="true" /> */}
                {/* <img className="TAKSHASHILA" id="tak" data-image="takshashila.jpeg" src={pointervct} alt="pointer" onClick={() => navigate("/", { replace: true })} aria-hidden="true" /> */}
            </div>
            {/* ---------------------- */}

        </>
    )
}

