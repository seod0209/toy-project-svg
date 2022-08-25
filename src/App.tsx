import React, { useState, useEffect } from "react";
import "./styles.css";
import * as View from "./view";
import * as Components from "./view/components";
import * as Icon from "./icon/assets";
import * as Mocks from "./api/Mocks";
import useIsMobile from "hooks/useIsMobile";
import styled from "styled-components";

const App: React.FC = () => {
    const isMobile = useIsMobile();
    const [id, setId] = useState<string>();
    const [position, setPosition] = useState<{ x: number; y: number }>();

    useEffect(() => {
        Mocks.BLD000001_1f.forEach((cell) => {
            const cellEle = document.getElementById(cell.mapId);
            if (cellEle) {
                cell.state === "ONGOING" ? "invert(0.5) sepia(1) hue-rotate(2deg) saturate(10) brightness(1)" : "";
                //  cellEle.style.opacity = cell.state === "ONGOING" ? "0.5" : "0.3";
            }
        });
    }, []);

    useEffect(() => {
        const tooltipEle = document.getElementById("tooltip");
        if (tooltipEle && position) {
            tooltipEle.style.transformOrigin = `${position.x}%,${position.y}%`;
            tooltipEle.style.transform = `translate(${position.x}px,${position.y}%) rotate(${
                isMobile ? "270deg" : "0deg"
            })`;
        }
    }, [id, position]);

    const clickCell = (id: string, x: number, y: number) => {
        setId(id);
        setPosition({ x, y });
    };

    return (
        <AppLayout className="App">
            <h1>청평화 쇼핑몰 1층 점포 배치도</h1>
            <h2>어디한번 그려보쟈: bld000001</h2>
            <Components.Tooltip name={id ? id : "-"} addressDetail={id ? id : "-"} taskTypes={["RETURN", "PICKUP"]} />
            <FloorPlanLayout>
                <FloorPlan src={Icon.FloorPlan} />
                <View.UpperLine clickCell={clickCell} />
                <View.MiddleLineUpper clickCell={clickCell} />
                <View.MiddleLineBottom clickCell={clickCell} />
                <View.BottomLine clickCell={clickCell} />
            </FloorPlanLayout>

            <FloorPlanImg src={Icon.FirstFloor} />
        </AppLayout>
    );
};
export default App;

const AppLayout = styled.div`
    @media (max-width: 786px) {
        h1 {
            position: fixed;
            top: 0;
            margin: 0 auto;
            width: 100%;
            font-size: 28px;

            background-color: #fff;
            z-index: 10;
        }
        h2 {
            display: none;
        }
    }
`;

const FloorPlanLayout = styled.div`
    position: relative;

    display: table;
    margin: 0 auto;
    width: 100%;
    @media (max-width: 786px) {
        top: 700px;
        left: -170%;
        transform: rotate(270deg);
    }
`;

const FloorPlan = styled.img`
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    @media (max-width: 786px) {
        width: 1600px;
    }
`;

const FloorPlanImg = styled.img`
    display: table-row;
    width: 100%;
    height: auto;
    @media (max-width: 786px) {
        display: none;
    }
`;
