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

export default function Post3(){
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
                <img src="/images/map3-4.png" alt="map" style={{width: 320, height: 320, borderRadius: 20}}/>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '5%'
                }}>
                    <p style={{fontSize: 20, fontWeight: 700}}>Libarary</p>
                    <p style={{fontSize: 20, fontWeight: 700}}>Description: </p>
                    <div style={{width: 800, height: 160, backgroundColor: "lightgray", padding: 10, borderRadius: 20}}>
                    성균관대, 삼성학술정보관에 관심 있는 학생들을 위해 소개하고자 맵을 제작하였습니다. 멀리 떨어져 학교에 올 수 없는 학생들에게 접근할 수 있는 기회를 주었습니다. 멀리 떨어져 있는 학생들에 대해서는 맵이 무료입니다.<br/>
                    맵과 프로그램의 의사결정은 메타버스 공간에서 이루어질 예정입니다. 와서 누구나 참여할 수 있는 지배구조를 만들었습니다.
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
                <img src="/images/map3-1.png" alt="map" style={{width: 320, height: 320, borderRadius: 20, marginRight: 30}} />
                <img src="/images/map3-2.png" alt="map" style={{width: 320, height: 320, borderRadius: 20, marginRight: 30}} />
                <img src="/images/map3-3.png" alt="map" style={{width: 320, height: 320, borderRadius: 20, marginRight: 30}} />
                <img src="/images/map3-4.png" alt="map" style={{width: 320, height: 320, borderRadius: 20, marginRight: 30}} />
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                width: "90%",
                alignSelf: "center",
                marginTop: 30
            }}> 
                <img src="/images/map3-5.png" alt="map" style={{width: 320, height: 320, borderRadius: 20, marginRight: 30}} />
                <img src="/images/map3-6.png" alt="map" style={{width: 320, height: 320, borderRadius: 20, marginRight: 30}} />
                <img src="/images/map3-7.png" alt="map" style={{width: 320, height: 320, borderRadius: 20, marginRight: 30}} />
            </div>
        </Container>
    )
}