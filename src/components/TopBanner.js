import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
    display: flex;
	flex-direction: row;
	align-items: center;
    height: 10%;
	width: 100%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	font-size: 40px;
	font-weight: 900;
	padding-left: 1%;
`;

const TopBanner = () => {
    return(
        <Container>
            <button 
                onClick={()=>window.location.href="/"}
                style={{
                    width: "20%", 
                    display: "flex", 
                    flexDirection: "row", 
                    alignItems: "center", 
                    marginLeft: 30,
                    border: "none",
                    background: "none"
                }}
            >
                <img 
                    src="/images/icon.png" 
                    alt="gather" 
                    style={{
                        width: 65, 
                        height: 65, 
                        marginRight: 10
                    }}
                />
                <p style={{fontSize: 40, fontWeight: 900, fontFamily: "Franklin Gothic Medium Arial Narrow Arial sans-serif", color: "white"}}>BitTown</p>
            </button>
            <input
                type="text"
                placeholder="Search items..."
                style={{
                    width: "50%",
                    height: 45,
                    borderColor: "black",
                    borderWidth: 6,
                    borderRadius: 20,
                    paddingLeft: 30,
                    marginLeft: -60,
                    marginRight: 60,
                    fontSize: 18,
                }}
            />
            <div style={{
                width: "30%",
                height: 65,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                overflow: "hidden",
                backgroundColor: "#F2F2F2",
                opacity: 0.3,
                borderRadius: 20,
                marginRight: 60,
                paddingLeft: 30,
                paddingRight: 30
            }}>
                <button 
                    onClick={()=>window.location.href = "/mypage"}
                    style={{alignSelf: "center", border: "none", marginLeft: "5%"}}
                >
                    <img 
                        src="/images/profile.png" 
                        alt="profile" 
                        style={{
                            width: 45,
                            height: 45,
                            objectFit: "cover", 
                            marginLeft: "5%"					
                        }}
                    />
                </button>
                <p style={{marginTop: 30}}>|</p>
                <button 
                    onClick={()=>window.location.href = "/connect_wallet"}
                    style={{alignSelf: "center", border: "none"}}
                >
                    <p style={{fontSize: 20, fontWeight: 900}}>Connect Wallet</p>
                </button>
                <p style={{marginTop: 30}}>|</p>
                <button 
                    onClick={()=>window.location.href = "/info"}
                    style={{alignSelf: "center", border: "none", marginRight: "5%"}}
                >
                    <p style={{fontSize: 20, fontWeight: 900}}>Info</p>
                </button>
            </div>
        </Container>
    )
}

export default TopBanner