import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import Page from '../components/Page';

export default function EcommerceShop() {
  const [userIndex, setUserIndex] = useState(0);
  const userdeatils = async () => {
    const response1 = await fetch("http://localhost:8000/user/getuser", {
      method: "GET",
      headers: {
        "authToken": localStorage.getItem("usertoken")
      },
    });
    // eslint-disable-next-line
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

  return (
    <Page title="Dashboard: Products | Minimal-UI">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Virtual Cycle Trip
        </Typography>
        <button type="button" className="btn btn-dark">
          {((userIndex) === 3) ? <RouterLink to="/game/gameEnd">xyz</RouterLink> : <RouterLink to="/game/map">abc122</RouterLink>}
        </button>
      </Container>
    </Page>
  );
}
