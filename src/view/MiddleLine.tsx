import React from "react";
import * as Icon from "../icon/assets";
import styled from "styled-components";

const MiddleLine: React.FC = () => {
    return (
        <MiddleLineLayout>
            <LineLayoutInner>
                <FirstGroup>
                    <Rec
                        id={"a-2-0"}
                        src={Icon.RectangleVertical}
                        style={{ transform: "rotate(90deg)", gridArea: "rec1" }}
                    />
                    <Sqaure src={Icon.CornerLeftDown} style={{ gridArea: "square" }} />
                    <Rec
                        id={"a-2-0"}
                        src={Icon.RectangleVertical}
                        style={{ transform: "rotate(90deg)", gridArea: "rec2" }}
                    />
                </FirstGroup>
                <SecondGroup></SecondGroup>
                <ThridGroup></ThridGroup>
                <ForthGroup></ForthGroup>
            </LineLayoutInner>
        </MiddleLineLayout>
    );
};

export default MiddleLine;

const MiddleLineLayout = styled.div`
    position: absolute;
    top: 31%;
    left: 0;
    padding: 0 2%;
    width: 100%;
`;

const LineLayoutInner = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const SquaresLayout = styled.div`
    position: absolute;
    display: grid;
    top: 0;
    align-items: flex-start;
`;

const FirstGroup = styled(SquaresLayout)`
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
        "rec1 square"
        "rec2 square";
    grid-column-gap: 10px;
    width: 3%;
`;

const SecondGroup = styled(SquaresLayout)`
    left: 139px;
`;

const ThridGroup = styled(SquaresLayout)`
    top: 2px;
    right: 164px;
`;
const ForthGroup = styled(SquaresLayout)`
    top: 2px;
    right: 44px;
`;

const Sqaure = styled.img`
    width: 100%;
    &:hover {
        filter: invert(0.5) sepia(1) hue-rotate(200deg) saturate(4) brightness(1);
    }
`;

const Rec = styled.img`
    width: 100%;
    border: 1px solid red;
    &:hover {
        filter: invert(0.5) sepia(1) hue-rotate(200deg) saturate(4) brightness(1);
        opacity: 1;
    }
`;
