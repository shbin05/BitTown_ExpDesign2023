import React from 'react';
import { styled } from 'styled-components';

const Box = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background: linear-gradient(to right, silver, #ffffff);
	border-radius: 20px;
	border: none;
	padding: 20px;
	margin-bottom: 30px;
`;

const MapRanking = () => {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: "40%",
        height: 450,
        border: "none"
      }}>
        <Box onClick={()=>window.location.href="/post1"}>
          <div style={{display: 'flex'}}>
            <img src="/images/map1-1.png" alt="map" style={{width: 100, height: 100, borderRadius: 20}}/>
            <p style={{fontSize: 30, fontWeight: 600, marginLeft: 30}}>Party House</p>
          </div>
          <p style={{fontSize: 20, fontWeight: 600}}>Likes: 1909</p>
        </Box>
        <Box onClick={()=>window.location.href="/post2"}>
          <div style={{display: 'flex'}}>
            <img src="/images/map2-2.png" alt="map" style={{width: 100, height: 100, borderRadius: 20}}/>
            <p style={{fontSize: 30, fontWeight: 600, marginLeft: 30}}>New Jeans</p>
          </div>
          <p style={{fontSize: 20, fontWeight: 600}}>Likes: 1782</p>
        </Box>
        <Box onClick={()=>window.location.href="/post3"}>
          <div style={{display: 'flex'}}>
            <img src="/images/map3-4.png" alt="map" style={{width: 100, height: 100, borderRadius: 20}}/>
            <p style={{fontSize: 30, fontWeight: 600, marginLeft: 30}}>Library</p>
          </div>
          <p style={{fontSize: 20, fontWeight: 600}}>Likes: 1666</p>
        </Box>
        <Box>
          <div style={{display: 'flex'}}>
            <img src="/images/map1-4.png" alt="map" style={{width: 100, height: 100, borderRadius: 20}}/>
            <p style={{fontSize: 30, fontWeight: 600, marginLeft: 30}}>Party Pool</p>
          </div>
          <p style={{fontSize: 20, fontWeight: 600}}>Likes: 1660</p>
        </Box>
      </div>
    );
};

export default MapRanking;
