import React, { useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import './HorizontalRecycleList.css'; 

const data = [
  "/images/map1-1.png",
  "/images/map1-2.png",
  "/images/map2-4.png",
  "/images/map3-3.png",
]
const itemWidth = 400;

const HorizontalRecycleList = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const scrollLeft = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  const scrollRight = () => {
    if (scrollIndex < data.length - 1) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const Row = ({ index, style }) => (
    <button className="list-item" style={{ ...style, width: itemWidth }}>
        <img 
            src={data[index]} 
            alt={data[index]} 
            style={{
                border: "none",
                borderRadius: 20,
                width: "100%",
                height: 350,
            }}
        />
    </button>
  );

  return (
    <div className="list-container">
        <button className="scroll-button left-button" onClick={scrollLeft}>
            <img src="/images/left.png" alt="Left Arrow" style={{width: 50}}/>
        </button>
        <List
            className="list"
            height={400}
            width={itemWidth * 5} 
            itemCount={data.length}
            itemSize={itemWidth}
            layout="horizontal"
            initialScrollOffset={scrollIndex * itemWidth}
        >
            {Row}
        </List>
        <button className="scroll-button right-button" onClick={scrollRight}>
            <img src="/images/right.png" alt="Right Arrow" style={{width: 50}}/>
        </button>
    </div>
  );
};

export default HorizontalRecycleList;
