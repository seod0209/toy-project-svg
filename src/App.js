import "./styles.css";
import FirstFloor from "./F1.svg";
import Copy from "./F1noname.svg";
import Cells from "./F1cells.svg";
import TrapezoidMedium from "./Trapezoid_medium.svg";
import RectangleBasic from "./Rectangle_Basic.svg";
import RectangleDivided from "./Rectangle_Divided.svg";
import SqaureBasic from "./Sqaure_Basic.svg";
import TrapezoidSmall from "./Trapezoid_small.svg";
//import SqaureBasic from "Sqaure_Basic.svg";
import styled from "styled-components";

export default function App() {
    return (
        <div className="App">
            <h1>청평화 쇼핑몰 1층 점포 배치도</h1>
            <h2>어디한번 그려보쟈</h2>

            <FloorPlanImg src={Copy} />

            <FloorPlanImg src={Cells} />
            <SqaureList>
                <Sqaure src={TrapezoidMedium} />
                <Sqaure src={RectangleBasic} />
                <Sqaure src={RectangleDivided} />
                <Sqaure src={SqaureBasic} />
                <Sqaure src={TrapezoidSmall} />
            </SqaureList>
            <FloorPlanImg src={FirstFloor} />
        </div>
    );
}

const FloorPlanImg = styled.img`
    width: 100%;
    height: auto;
`;

const SqaureList = styled.div`
    display: flex;
    align-items: center;
`;
const Sqaure = styled.img`
    width: 20px;
`;
