// import { Icon } from '@iconify/react';
// import androidFilled from '@iconify/icons-ant-design/android-filled';
// material
/* eslint-disable camelcase */
import React, { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line
import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
// import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter
}));

// const IconWrapperStyle = styled('div')(({ theme }) => ({
//   margin: 'auto',
//   display: 'flex',
//   borderRadius: '50%',
//   alignItems: 'center',
//   width: theme.spacing(8),
//   height: theme.spacing(8),
//   justifyContent: 'center',
//   marginBottom: theme.spacing(3),
//   color: theme.palette.primary.dark,
//   backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
//     theme.palette.primary.dark,
//     0.24
//   )} 100%)`
// }));

// ----------------------------------------------------------------------

// const TOTAL = 714000;





export default function AppWeeklySales() {
  const [days, setdays] = useState("00");
  const [hrs, sethrs] = useState("00");
  const [min, setmin] = useState("00");
  const [sec, setsec] = useState("00");
  let interval = useRef();
  const countdown = () => {
    const Vct_date = new Date("jan 30, 2023 4:32:00").getTime();
    interval = setInterval(() => {
      const Now_vctDate = new Date().getTime();
      const diff = Vct_date - Now_vctDate;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const sec = Math.floor((diff % (1000 * 60)) / (1000));
      if (diff < 0) {
        clearInterval(interval.current);
      } else {
        setdays(days);
        sethrs(hrs);
        setmin(min);
        setsec(sec);
      }
    }, 1000);
  };

  useEffect(() => {
    countdown();
    return () => {
      // eslint-disable-next-line
      clearInterval(interval.current);
    };
  });

  return (
    <RootStyle>
      <Typography variant="subtitle2" sx={{ opacity: 0.99999, fontSize: "20px" }}>
        TAdS Virtual Cycle Trip will commence in...
        <br />
        {days} days : {hrs} hours : {min} Minutes : {sec} Seconds
      </Typography>
    </RootStyle>
  );
}
