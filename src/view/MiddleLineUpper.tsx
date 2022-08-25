import React from "react";
import * as Icon from "../icon/assets";
import styled from "styled-components";

interface MiddleLineProps {
    clickCell: (id: string, x: number, y: number) => void;
}
const MiddleLineUpper: React.FC<MiddleLineProps> = (props) => {
    return (
        <MiddleLineUpperLayout>
            <LineLayoutInner>
                <FirstGroup>
                    <Rec
                        id={"b-1-0"}
                        src={Icon.RectangleVertical}
                        style={{ transform: "rotate(90deg)", marginTop: "-20%" }}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"b-2-0"}
                        src={Icon.CornerLDM}
                        style={{ width: "90%" }}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                </FirstGroup>
                <SquaresLayout style={{ marginLeft: "7%" }}>
                    <Rec
                        id={"b-3-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"b-4-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"b-5-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"b-6-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"b-7-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                </SquaresLayout>
                <SquaresLayout style={{ marginLeft: "10%" }}>
                    <Rec
                        id={"b-8-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"b-9-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"b-10-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"b-11-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"b-12-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                </SquaresLayout>
                <SquaresLayout style={{ marginLeft: "9.8%" }}>
                    <Rec
                        id={"b-13-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"b-14-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"b-15-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"b-16-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"b-17-0"}
                        src={Icon.SqaureM}
                        style={{ width: "80%" }}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                </SquaresLayout>
                <SquaresLayout style={{ marginLeft: "18.5%" }}>
                    <ThirdRec
                        id={"b-18-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <ThirdRec
                        id={"b-19-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <ThirdRec
                        id={"b-20-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <ThirdRec
                        id={"b-21-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                </SquaresLayout>
                <SquaresLayout style={{ marginLeft: "7%" }}>
                    <ThirdRec
                        id={"b-22-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <ThirdRec
                        id={"b-23-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <ThirdRec
                        id={"b-24-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <ThirdRec
                        id={"b-25-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                </SquaresLayout>
                <SquaresLayout style={{ marginLeft: "7%" }}>
                    <ThirdRec
                        id={"b-26-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <ThirdRec
                        id={"b-27-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <ThirdRec
                        id={"b-28-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <ThirdRec
                        id={"b-29-0"}
                        src={Icon.SqaureM}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <ThirdRec
                        id={"b-30-0"}
                        src={Icon.RectangleVertical}
                        style={{ width: "80%", transform: "rotate(90deg)", marginLeft: "22%" }}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                </SquaresLayout>
                <SquaresLayout style={{ marginLeft: "12.5%", marginTop: "0.1%" }}>
                    <ThirdRec
                        id={"b-31-0"}
                        src={Icon.SqaureM}
                        style={{ width: "80%" }}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <ThirdRec
                        id={"b-32-0"}
                        src={Icon.SqaureM}
                        style={{ width: "80%" }}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <ThirdRec
                        id={"b-33-0"}
                        src={Icon.SqaureM}
                        style={{ width: "80%" }}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                </SquaresLayout>
            </LineLayoutInner>
        </MiddleLineUpperLayout>
    );
};

export default MiddleLineUpper;

const MiddleLineUpperLayout = styled.div`
    position: absolute;
    top: 33%;
    left: 0;
    padding: 0 2.4%;
    width: 100%;
`;

const LineLayoutInner = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
`;

const SquaresLayout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 2.3%;
`;

const FirstGroup = styled(SquaresLayout)`
    margin-left: 0.9%;
`;

const Rec = styled.img`
    width: 100%;
    margin-right: 1%;
    opacity: 0.5;
    &:hover {
        filter: invert(0.5) sepia(1) hue-rotate(200deg) saturate(4) brightness(1);
        opacity: 1;
    }
`;

const ThirdRec = styled.img`
    width: 90%;
    margin: 0 2%;
    opacity: 0.5;
    &:hover {
        filter: invert(0.5) sepia(1) hue-rotate(200deg) saturate(4) brightness(1);
        opacity: 1;
    }
`;
