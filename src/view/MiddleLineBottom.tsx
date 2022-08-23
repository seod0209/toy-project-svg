import React from "react";
import * as Icon from "../icon/assets";
import styled from "styled-components";

const MiddleLineBottom: React.FC = () => {
    return (
        <MiddleLineBottomLayout>
            <LineLayoutInner>
                <FirstGroup>
                    <Rec
                        id={"c-1-0"}
                        src={Icon.RectangleVertical}
                        style={{ transform: "rotate(90deg)", marginTop: "-20%" }}
                    />
                </FirstGroup>
                <SquaresLayout style={{ marginLeft: "7%" }}>
                    <Rec id={"c-3-0"} src={Icon.CornerRight} />
                    <Rec id={"c-4-0"} src={Icon.SqaureM} />
                    <Rec id={"c-5-0"} src={Icon.SqaureM} />
                    <Rec id={"c-6-0"} src={Icon.SqaureM} />
                    <Rec id={"c-7-0"} src={Icon.SqaureM} />
                </SquaresLayout>
                <SquaresLayout style={{ marginLeft: "10%" }}>
                    <Rec id={"c-8-0"} src={Icon.SqaureM} />
                    <Rec id={"c-9-0"} src={Icon.SqaureM} />
                    <Rec id={"c-10-0"} src={Icon.SqaureM} />
                    <Rec id={"c-11-0"} src={Icon.SqaureM} />
                    <Rec id={"c-12-0"} src={Icon.SqaureM} />
                </SquaresLayout>
                <SquaresLayout style={{ marginLeft: "9.8%" }}>
                    <Rec id={"c-13-0"} src={Icon.SqaureM} />
                    <Rec id={"c-14-0"} src={Icon.SqaureM} />
                    <Rec id={"c-15-0"} src={Icon.SqaureM} />
                    <Rec id={"c-16-0"} src={Icon.SqaureM} />
                    <Rec id={"c-17-0"} src={Icon.CornerLeftDownSmall} style={{ width: "80%" }} />
                </SquaresLayout>
                <SquaresLayout style={{ marginLeft: "18.5%" }}>
                    <ThirdRec id={"c-18-0"} src={Icon.CornerRightDownSmall} />
                    <ThirdRec id={"c-19-0"} src={Icon.SqaureM} />
                    <ThirdRec id={"c-20-0"} src={Icon.SqaureM} />
                    <ThirdRec id={"c-21-0"} src={Icon.SqaureM} />
                </SquaresLayout>
                <SquaresLayout style={{ marginLeft: "7%" }}>
                    <ThirdRec id={"c-22-0"} src={Icon.SqaureM} />
                    <ThirdRec id={"c-23-0"} src={Icon.SqaureM} />
                    <ThirdRec id={"c-24-0"} src={Icon.SqaureM} />
                    <ThirdRec id={"c-25-0"} src={Icon.SqaureM} />
                </SquaresLayout>
                <SquaresLayout style={{ marginLeft: "7%" }}>
                    <ThirdRec id={"c-26-0"} src={Icon.SqaureM} />
                    <ThirdRec id={"c-27-0"} src={Icon.SqaureM} />
                    <ThirdRec id={"c-28-0"} src={Icon.SqaureM} />
                    <ThirdRec id={"c-29-0"} src={Icon.SqaureM} />
                    <ThirdRec id={"c-30-0"} src={Icon.TrigangleDown} />
                </SquaresLayout>
                <SquaresLayout style={{ marginLeft: "12.5%", marginTop: "0.1%" }}>
                    <ThirdRec id={"c-31-0"} src={Icon.CornerRight} style={{ width: "80%" }} />
                    <ThirdRec id={"c-32-0"} src={Icon.SqaureM} style={{ width: "80%" }} />
                </SquaresLayout>
            </LineLayoutInner>
        </MiddleLineBottomLayout>
    );
};

export default MiddleLineBottom;

const MiddleLineBottomLayout = styled.div`
    position: absolute;
    top: 45%;
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
    // opacity: 0;
    &:hover {
        filter: invert(0.5) sepia(1) hue-rotate(200deg) saturate(4) brightness(1);
        opacity: 1;
    }
`;

const ThirdRec = styled.img`
    width: 90%;
    margin: 0 2%;
    //  opacity: 0;
    &:hover {
        filter: invert(0.5) sepia(1) hue-rotate(200deg) saturate(4) brightness(1);
        opacity: 1;
    }
`;
