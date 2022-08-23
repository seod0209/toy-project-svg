import React from "react";
import "./styles.css";
import * as View from "./view";
import * as Icon from "./icon/assets";
//import * as CustomHooks from "./hooks";
import styled from "styled-components";

const App: React.FC = () => {
    //   const isMobile = CustomHooks.useIsMobile();
    return (
        <div className="App">
            <h1>청평화 쇼핑몰 1층 점포 배치도</h1>
            <h2>어디한번 그려보쟈</h2>
            <FloorPlanLayout>
                <FloorPlan src={Icon.FloorPlan} />
                <View.UpperLine />
                {/* <View.MiddleLine /> */}
                <View.BottomLine />
            </FloorPlanLayout>

            <FloorPlanImg src={Icon.FirstFloor} />
        </div>
    );
};
export default App;

const FloorPlanLayout = styled.div`
    position: relative;
    display: table;
    margin: 0 auto;
    width: 100%;
    @media (max-width: 786px) {
        transform: rotate(270deg);
    }
`;

const FloorPlan = styled.img`
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
`;

const FloorPlanImg = styled.img`
    display: table-row;
    width: 100%;
    height: auto;
    @media (max-width: 786px) {
        display: none;
    }
`;
