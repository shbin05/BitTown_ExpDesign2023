import React from 'react';
import { styled } from 'styled-components';

const Box = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background: linear-gradient(to right, silver, #ffffff);
	border-radius: 20px;
	padding: 20px;
	margin-bottom: 30px;
`;

const TopUser = () => {
	return (
		<div style={{
			display: 'flex',
			flexDirection: 'column',
			width: "40%",
			height: 450,
			border: "none"
		}}>
			<Box>
				<div style={{display: 'flex'}}>
					<img src="/images/Profile4.png" alt="profile" style={{width: 100, height: 100, borderRadius: 20}}/>
					<p style={{fontSize: 30, fontWeight: 900, marginLeft: 30}}>youngna</p>
				</div>
				<div style={{display: 'flex', flexDirection: 'column'}}>
					<p style={{fontSize: 20, fontWeight: 600, marginBottom: -10}}>Followers: 1509</p>
					<p style={{fontSize: 20, fontWeight: 600}}>posts: 29</p>
				</div>
			</Box>
			<Box>
				<div style={{display: 'flex'}}>
					<img src="/images/Profile1.png" alt="profile" style={{width: 100, height: 100, borderRadius: 20}}/>
					<p style={{fontSize: 30, fontWeight: 900, marginLeft: 30}}>seungjae</p>
				</div>
				<div style={{display: 'flex', flexDirection: 'column'}}>
					<p style={{fontSize: 20, fontWeight: 600, marginBottom: -10}}>Followers: 1280</p>
					<p style={{fontSize: 20, fontWeight: 600}}>posts: 21</p>
				</div>
			</Box>
			<Box>
				<div style={{display: 'flex'}}>
					<img src="/images/Profile2.png" alt="profile" style={{width: 100, height: 100, borderRadius: 20}}/>
					<p style={{fontSize: 30, fontWeight: 900, marginLeft: 30}}>eunchan</p>
				</div>
				<div style={{display: 'flex', flexDirection: 'column'}}>
					<p style={{fontSize: 20, fontWeight: 600, marginBottom: -10}}>Followers: 1211</p>
					<p style={{fontSize: 20, fontWeight: 600}}>posts: 24</p>
				</div>
			</Box>
			<Box>
				<div style={{display: 'flex'}}>
					<img src="/images/Profile3.png" alt="profile" style={{width: 100, height: 100, borderRadius: 20}}/>
					<p style={{fontSize: 30, fontWeight: 900, marginLeft: 30}}>waniboyy</p>
				</div>
				<div style={{display: 'flex', flexDirection: 'column'}}>
					<p style={{fontSize: 20, fontWeight: 600, marginBottom: -10}}>Followers: 1090</p>
					<p style={{fontSize: 20, fontWeight: 600}}>posts: 31</p>
				</div>
			</Box>
		</div>
	);
};

export default TopUser;
