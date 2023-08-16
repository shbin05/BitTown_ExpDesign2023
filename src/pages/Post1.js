import React from "react";
import { styled } from "styled-components";
import TopBanner from "../components/TopBanner";

const Container = styled.div`
	background: linear-gradient(to bottom, #000000, #ffffff);
    width: 100%;
    height: 140vh;
    display: flex;
	flex-direction: column;
    color: black;
`;

export default function Post1(){
    return(
        <Container>
            <TopBanner />
            <div style={{
                display: "flex",
                flexDirection: 'row',
                width: "90%",
                alignSelf: "center",
                backgroundColor: "white",
                borderRadius: 20,
                padding: 20
            }}>
                <img src="/images/map1-1.png" alt="map" style={{width: 320, height: 320, borderRadius: 20}}/>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '5%'
                }}>
                    <p style={{fontSize: 20, fontWeight: 700}}>Party House</p>
                    <p style={{fontSize: 20, fontWeight: 700}}>Description: </p>
                    <div style={{width: 800, height: 160, backgroundColor: "lightgray", padding: 10, borderRadius: 20}}>
                        여러 친구들과 여러 테마의 방을 즐길 수 있는 맵
                    </div>
                </div>
                <p style={{fontSize: 30, fontWeight: 700, marginLeft: 200, marginTop: 120, textDecoration: "underline"}}>Download</p>
            </div>
            <p style={{marginLeft: "5%", fontSize: 30, fontWeight: 700}}>Images</p>
            <div style={{
                display: "flex",
                flexDirection: "row",
                width: "90%",
                alignSelf: "center"
            }}> 
                <img src="/images/map1-1.png" alt="map" style={{width: 320, height: 320, borderRadius: 20, marginRight: 30}} />
                <img src="/images/map1-2.png" alt="map" style={{width: 320, height: 320, borderRadius: 20, marginRight: 30}} />
                <img src="/images/map1-3.png" alt="map" style={{width: 320, height: 320, borderRadius: 20, marginRight: 30}} />
                <img src="/images/map1-4.png" alt="map" style={{width: 320, height: 320, borderRadius: 20, marginRight: 30}} />
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                width: "90%",
                alignSelf: "center",
                marginTop: 30
            }}> 
                <img src="/images/map1-5.png" alt="map" style={{width: 320, height: 320, borderRadius: 20, marginRight: 30}} />
                <img src="/images/map1-6.png" alt="map" style={{width: 320, height: 320, borderRadius: 20, marginRight: 30}} />
                <img src="/images/map1-7.png" alt="map" style={{width: 320, height: 320, borderRadius: 20, marginRight: 30}} />
                <img src="/images/map1-8.png" alt="map" style={{width: 320, height: 320, borderRadius: 20, marginRight: 30}} />
            </div>
        </Container>
    )
}