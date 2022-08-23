import React from "react";
import * as Icon from "../icon/assets";
import styled from "styled-components";

const BottomLine: React.FC = () => {
    return (
        <BottomLineLayout>
            <LineLayoutInner>
                <FirstGroup>
                    <Rec id={"d-1-0"} src={Icon.CornerLeftUp} style={{ width: "80%" }} />
                    <Rec id={"d-2-0"} src={Icon.RectangleVertical} />
                    <Rec id={"d-3-0"} src={Icon.RectangleVertical} />
                </FirstGroup>
                <SecondGroup>
                    <Rec id={"d-4-0"} src={Icon.RectangleVertical} />
                    <Rec id={"d-5-0"} src={Icon.RectangleVertical} />
                    <Rec id={"d-6-0"} src={Icon.RectangleVertical} />
                    <Rec id={"d-7-0"} src={Icon.RectangleVertical} />
                    <Rec id={"d-8-0"} src={Icon.RectangleVertical} />
                    <Rec id={"d-9-0"} src={Icon.RectangleVertical} />
                    <Rec id={"d-10-0"} src={Icon.RectangleVertical} />

                    <Rec id={"d-11-0"} src={Icon.RectangleVertical} />
                    <Rec id={"d-12-0"} src={Icon.RectangleVertical} />
                    <Rec id={"d-13-0"} src={Icon.RectangleVertical} />
                    <Rec id={"d-14-0"} src={Icon.RectangleVertical} />
                    <Rec id={"d-15-0"} src={Icon.RectangleVertical} />
                    <Rec id={"d-16-0"} src={Icon.RectangleVertical} />
                    <Rec id={"d-17-0"} src={Icon.RectangleVertical} />
                    <Rec id={"d-18-0"} src={Icon.CornerRightUp} />
                    <Rec id={"d-19-0"} src={Icon.RectangleHorizon} />
                </SecondGroup>
                <ThridGroup>
                    <ThirdRec id={"d-20-0"} src={Icon.RecVerticalLarge} style={{ width: "" }} />
                    <ThirdRec id={"d-21-0"} src={Icon.CornerRightUp} style={{ transform: "scaleX(-1)" }} />
                    <ThirdRec id={"d-22-0"} src={Icon.RectangleVertical} />
                    <ThirdRec id={"d-23-0"} src={Icon.RectangleVertical} />
                    <ThirdRec id={"d-24-0"} src={Icon.RectangleVertical} />
                    <ThirdRec id={"d-25-0"} src={Icon.RectangleVertical} />
                    <ThirdRec id={"d-26-0"} src={Icon.RectangleVertical} />
                    <ThirdRec id={"d-27-0"} src={Icon.RectangleVertical} />
                    <ThirdRec id={"d-28-0"} src={Icon.RectangleVertical} />
                    <ThirdRec id={"d-29-0"} src={Icon.RectangleVertical} />
                    <ThirdRec id={"d-30-0"} src={Icon.RectangleVertical} />
                    <ThirdRec id={"d-31-0"} src={Icon.RectangleVertical} />
                    <ThirdRec id={"d-32-0"} src={Icon.RectangleVertical} />
                    <ThirdRec id={"d-33-0"} src={Icon.RectangleVertical} />
                </ThridGroup>
                <ForthGroup>
                    <ThirdRec id={"d-34-0"} src={Icon.RectangleVertical} />
                    <ThirdRec id={"d-35-0"} src={Icon.RectangleVertical} />
                    <ThirdRec id={"d-36-0"} src={Icon.RectangleVertical} />
                </ForthGroup>
            </LineLayoutInner>
        </BottomLineLayout>
    );
};

export default BottomLine;

const BottomLineLayout = styled.div`
    position: absolute;
    top: 60%;
    left: 1px;
    width: fit-content;
`;

const LineLayoutInner = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    width: 100%;
`;

const SquaresLayout = styled.div`
    display: flex;
    align-items: flex-end;
    width: 2.4%;
    height: fit-content;
`;

const FirstGroup = styled(SquaresLayout)`
    margin-left: 0.8%;
`;

const SecondGroup = styled(SquaresLayout)`
    margin: 0 9%;
`;
const ThridGroup = styled(SquaresLayout)`
    margin: 0 5% 0 31.6%;
`;
const ForthGroup = styled(SquaresLayout)`
    margin-left: 29.8%;
`;

const Rec = styled.img`
    margin-left: 0.08em;
    width: 100%;
    // opacity: 0;
    &:hover {
        filter: invert(0.5) sepia(1) hue-rotate(200deg) saturate(4) brightness(1);
        opacity: 1;
    }
`;

const ThirdRec = styled.img`
    width: 94%;
    margin-left: 0.05em;

    //  opacity: 0;
    &:hover {
        filter: invert(0.5) sepia(1) hue-rotate(200deg) saturate(4) brightness(1);
        opacity: 1;
    }
`;
