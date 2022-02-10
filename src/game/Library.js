// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Importhumai from './Importhumai';


export default function MB() {
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
    console.log(userIndex, "userIndex--mainB--")
  }
  useEffect(() => {
    userdeatils();
    // eslint-disable-next-line
  }, [userIndex, setUserIndex]);

  // -************************

  const UserRiddleupdatecount = async (score) => {
    const response = await fetch("http://localhost:8000/user/updatecount", {
      method: "PUT",
      headers: {
        "authToken": localStorage.getItem("usertoken"),
        "userScore": score
      },
    });
    // eslint-disable-next-line
    const json = await response.json();
    // console.log(json, "jiii");
  }
  // --------------------
  const navigate = useNavigate();
  const handlebacktomap = () => {
    navigate("/game/map", { replace: true });
  }
  const handlecorrect = () => {
    if (userIndex === 15) {
      alert("shi ans");
      const score = userIndex + 1;
      console.log("score---> ", score)
      // localStorage.setItem("userScore", score);
      UserRiddleupdatecount(score);
      setTimeout(() => {
        navigate("/game/map", { replace: true });
      }, 2000);
    }
    else {
      alert("glt ans")
    }
  }
  const handlewrong1 = () => {
    alert("w1 ans");
  }
  const handlewrong2 = () => {
    alert("w2 ans");
  }
  const handlewrong3 = () => {
    alert("w3 ans");
  }


  return (
    <>
      <Importhumai />
      <div>
      m hu <h1>Library</h1>
        <br />
        <p>
          {/* {`${riddles}`} */}
        </p>
        {/* <br /> */}
        <button type="button" className="btn btn-dark" onClick={handlebacktomap}>
          back to map
        </button>
        <button type="button" className="btn btn-dark" onClick={handlecorrect}>
          shi ans
        </button>
        <button type="button" className="btn btn-dark" onClick={handlewrong1}>
          wrng ans1
        </button>
        <button type="button" className="btn btn-dark" onClick={handlewrong2}>
          wrng ans2
        </button>
        <button type="button" className="btn btn-dark" onClick={handlewrong3}>
          wrng ans3
        </button>
      </div>
    </>

  )
}
