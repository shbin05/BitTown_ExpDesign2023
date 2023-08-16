import React from "react";
import { styled } from "styled-components";
import TopBanner from "../components/TopBanner";
import HorizontalRecycleList from "../components/RecycleList";
import MapRanking from "../components/MapRanking";
import TopUser from "../components/TopUser";

const Container = styled.div`
	background: linear-gradient(to bottom, #000000, #ffffff);
    width: 100%;
    height: 140vh;
    display: flex;
	flex-direction: column;
    color: black;
`;

export default function Home() {
    return (
		<Container>
			<TopBanner />
			<HorizontalRecycleList />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignSelf: "center",
                    alignItems: "center",
                    width: "80%",
                    height: 80,
                }}
            >
                <p style={{
                    position: "absolute",
                    fontSize: 30,
                    fontWeight: "bold",
                }}>Today's Map</p>
                <p style={{
                    position: "absolute",
                    fontSize: 30,
                    fontWeight: "bold",
                    left: "52%"
                }}>Top User</p>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                }}
            >
                <MapRanking/>
                <div style={{width: "2%"}}></div>
                <TopUser />
            </div>
           
		</Container>
    );
}

