import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import ConnectWallet from "./pages/ConnectWallet";
import Info from "./pages/Info";
import Post1 from "./pages/Post1";
import Post2 from "./pages/Post2";
import Post3 from "./pages/Post3";


export default function App() {
	return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/connect_wallet" element={<ConnectWallet />} />
                <Route path="/info" element={<Info />} />
                <Route path="/post1" element={<Post1 />} />
                <Route path="/post2" element={<Post2 />} />
                <Route path="/post3" element={<Post3 />} />
            </Routes>
        </div>
        
    )
}
