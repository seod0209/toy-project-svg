import React from "react";
import "./styles.css";
import * as View from "./view";
import * as Icon from "./icon/assets";
import styled from "styled-components";

export default function App() {
    return (
        <div className="App">
            <h1>청평화 쇼핑몰 1층 점포 배치도</h1>
            <h2>어디한번 그려보쟈</h2>

            <FloorPlan url={Icon.FloorPlan}>
                <View.UpperLine />
                <MiddleLineLayout></MiddleLineLayout>
                <BottomLineLayout></BottomLineLayout>
            </FloorPlan>

            <FloorPlanImg src={Icon.FirstFloor} />
        </div>
    );
}

const FloorPlan = styled.div<{ url: string }>`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 500px;
    background-image: url(${(props) => props.url});
    background-repeat: no-repeat;
    background-size: contain;
    /* svg:hover {
        filter: invert(0.5) sepia(1) hue-rotate(200deg) saturate(4) brightness(1);
    } */
`;

const MiddleLineLayout = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: fit-content;
`;
const BottomLineLayout = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: fit-content;
`;

const LineLayoutInner = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

interface SqaureStyleProps {
    top: number;
    left: number;
}

const Sqaure = styled.img<SqaureStyleProps>`
    position: absolute;
    top: ${(props) => `${props.top}px`};
    left: ${(props) => `${props.left}px`};
    width: 19px;
    &:hover {
        filter: invert(0.5) sepia(1) hue-rotate(200deg) saturate(4) brightness(1);
    }
`;

const FloorPlanImg = styled.img`
    width: 100%;
    height: auto;
`;
