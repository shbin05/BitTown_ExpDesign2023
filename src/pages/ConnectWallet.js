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
    width: 50%;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const MiniBox = styled.button`
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    background-color: white;
    border: none;
    border-radius: 20px;
    padding-top: 20px;
`;

const Logo = styled.img`
    width: 100px;
    height: 100px;
`;

const Text = styled.p`
    font-size: 20px;
    font-weight: 800;
`;

export default function ConnectWallet(){
    return(
        <Container>
            <TopBanner />
            <Box style={{marginTop: "5%"}}>
                <MiniBox>
                    <Logo src="/images/MetaMask.png" alt="MetaMask" />
                    <Text>MetaMask</Text>
                </MiniBox>
                <MiniBox>
                    <Logo src="/images/CoinBase.png" alt="CoinBase" />
                    <Text>CoinBase</Text>
                </MiniBox>
                <MiniBox>
                    <Logo src="/images/WalletConnect.png" alt="WalletConnect" />
                    <Text>WalletConnect</Text>
                </MiniBox>
            </Box>
            <Box style={{marginTop: "3%"}}>
                <MiniBox>
                    <Logo src="/images/Ledger.png" alt="Ledger" />
                    <Text>Ledger</Text>
                </MiniBox>
                <MiniBox>
                    <Logo src="/images/Phantom.png" alt="Phantom" />
                    <Text>Phantom</Text>
                </MiniBox>
                <MiniBox>
                    <Logo src="/images/BitKeep.png" alt="BitKeep" />
                    <Text>BitKeep</Text>
                </MiniBox>
            </Box>
        </Container>
    );
}