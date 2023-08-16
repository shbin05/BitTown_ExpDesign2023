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

export default function Post2(){
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
                <img src="/images/map2-2.png" alt="map" style={{width: 320, height: 320, borderRadius: 20}}/>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '5%'
                }}>
                    <p style={{fontSize: 20, fontWeight: 700}}>New Jeans</p>
                    <p style={{fontSize: 20, fontWeight: 700}}>Description: </p>
                    <div style={{width: 800, height: 160, backgroundColor: "lightgray", padding: 10, borderRadius: 20}}>
                    처음 파란공간 Z세대 뉴진스 팬덤을 위한 공간. 뉴진스와 함께 떠나는 휴가 컨셉, Z세대 환경 보호를 위한 위버스 앨범과 키트 앨범.<br/>
                    위버스 앨범: CD 대신 음원 정보가 담긴 QR코드가 새겨진 종이가 담긴 앨범. QR코드를 등록할 수 있는 음반 애플리케이션을 스마트폰에 설치한 후 QR코드로 앨범을 내려받으면 된다. CD 사용을 줄여서 낭비되는 플라스틱을 줄일 수 있다.<br/>
                    키트 앨범: 가방에 뉴진스 멤버들의 모습이 담긴 포토북, 가사지, 포토카드, 스티커, 엽서, 북마크, CD가 들어있다. 앨범 자체를 가방으로 활용할 수 있어서 친환경적이다.
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
                <img src="/images/map2-1.png" alt="map" style={{width: 320, height: 320, borderRadius: 20, marginRight: 30}} />
                <img src="/images/map2-2.png" alt="map" style={{width: 320, height: 320, borderRadius: 20, marginRight: 30}} />
                <img src="/images/map2-3.png" alt="map" style={{width: 320, height: 320, borderRadius: 20, marginRight: 30}} />
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                width: "90%",
                alignSelf: "center",
                marginTop: 30
            }}> 
                <img src="/images/map2-4.png" alt="map" style={{width: 320, height: 320, borderRadius: 20, marginRight: 30}} />
                <img src="/images/map2-5.png" alt="map" style={{width: 320, height: 320, borderRadius: 20, marginRight: 30}} />
            </div>
        </Container>
    )
}