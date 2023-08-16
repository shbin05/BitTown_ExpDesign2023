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

export default function MyPage(){
    return(
        <Container>
            <TopBanner />
            <div style ={{
                display: "flex",
                flexDirection: "row",
                width: "90%",
                alignSelf: "center"
            }}>
                <div style={{display: "flex", flexDirection: "column", width: "60%"}}>
                    <p style={{fontSize: 40, fontWeight: 800, color: "white"}}>Profile</p>
                    <div 
                        style={{
                            height: 250,
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            backgroundColor: "white",
                            padding: 20,
                            borderRadius: 20,
                        }}
                    >
                        <img 
                            src="/images/Profile1.png" 
                            alt="Profile" 
                            style={{    
                                width: 250, 
                                height: 250,
                                borderRadius: 20,
                            }}
                        />
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <p style={{
                                fontSize: 40,
                                fontWeight: 800,
                                marginLeft: 60,
                                marginTop: -3
                            }}>hyunbin</p>
                            <p style={{
                                fontSize: 25,
                                fontWeight: 500,
                                marginLeft: 60,
                                marginTop: -10,
                                textDecoration: "underline"
                            }}>shbin0519@gmail.com</p>
                            <p style={{
                                fontSize: 20,
                                fontWeight: 800,
                                marginLeft: 60,
                                marginTop: 80,
                                color: "gray",
                                textDecoration: "underline"
                            }}>Edit Profile</p>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column", width: "50%", marginLeft: "7%"}}>
                    <p style={{fontSize: 40, fontWeight: 800, color: "white"}}>My Wallet</p>
                    <div 
                        style={{
                            display: "flex",
                            height: 250,
                            width: "40%",
                            backgroundColor: "white",
                            padding: 20,
                            borderRadius: 20,
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <img src="/images/MetaMask.png" alt="MetaMask" style={{width: "70%", height: "90%"}}/>
                    </div>
                </div>
            </div>
            <div style ={{
                display: "flex",
                flexDirection: "row",
                width: "90%",
                alignSelf: "center"
            }}>
                <div style={{display: "flex", flexDirection: "column", width: "60%"}}>
                    <p style={{fontSize: 40, fontWeight: 800, color: "white"}}>My Producs</p>
                    <div 
                        style={{
                            height: 250,
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center", 
                            justifyContent: "center",
                            backgroundColor: "white",
                            padding: 20,
                            borderRadius: 20,
                        }}
                    >
                        <p style={{fontSize: 20, fontWeight: 700}}>아직 Product가 없습니다</p>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column", width: "50%", marginLeft: "7%"}}>
                    <p style={{fontSize: 40, fontWeight: 800, color: "white"}}>Add</p>
                    <div 
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            height: 250,
                            width: "40%",
                            backgroundColor: "white",
                            padding: 20,
                            borderRadius: 20,
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <button style={{fontSize: 150, background: 'none', border: 'none'}}>+</button>
                        <p style={{fontWeight: 700, marginTop: -10}}>Add Own Product</p>
                    </div>
                </div>
            </div>
        </Container>
    );
}