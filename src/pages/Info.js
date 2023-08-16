import React from "react";
import { styled } from "styled-components";
import TopBanner from "../components/TopBanner";

const Container = styled.div`
	background: linear-gradient(to bottom, #000000, #ffffff);
    width: 100%;
    height: 120vh; 
    display: flex;
	flex-direction: column;
    color: black;
`;

const Box = styled.div`
    width: 45%;
    background-color: #F2F2F2;
    opacity: 0.5;
    margin-top: 30px;
    margin-left: 60px;
    border-radius: 20px;
    padding-left: 20px;
    padding-right: 20px;
`;

const Text = styled.p`
    font-size: 20px;
    font-weight: 600;
`;

export default function Info(){
    return(
        <Container>
            <TopBanner />
            <p style={{
                marginLeft: 60,
                fontSize: 30,
                fontWeight: 600,
                color: "white"
            }}>어떤 서비스인가요?</p>
            <Box>
                <Text>맵 등록 서비스 및 NFT 전환 프로세스를 제공합니다</Text>
            </Box>
            <Box>
                <Text>비트코인을 통한 거래가 가능하게 하여 보안을 강화하였습니다</Text>
            </Box>
            <Box>
                <Text>환경에 관심이 많은 Z세대들의 팬덤을 형성하기 위하여 온실가스 감축, 지속 가능한 자원관리, 폐기물 관리 등에 수익을 일부 기부합니다</Text>
            </Box>
            <Box>
                <Text>공익 기관이나 비영리 기관에는 무료로 맵을 제공합니다</Text>
            </Box>
            <Box>
                <Text>수수료와 기업 이익 등을 투명하게 공개합니다</Text>
            </Box>
        </Container>
    );
}