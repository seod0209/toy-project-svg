import React from "react";
import * as Icon from "../icon/assets";
//import { ReactComponent as CornerLeftDown } from "../icon/assets/Corner_left_down.svg";
import styled from "styled-components";

interface UpperLineProps {
    clickCell: (id: string, x: number, y: number) => void;
}

const UpperLine: React.FC<UpperLineProps> = (props) => {
    return (
        <UpperLineLayout>
            <LineLayoutInner>
                <FirstGroup>
                    <Rec id={"a-1-0"} src={Icon.CornerLeftDown} style={{ width: "70%" }} />
                    <Rec
                        id={"a-2-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    {/* <Layout>
                        <Rec id={"a-8-1"} src={Icon.RectangleHorizon}                         onClick={(e) => props.clickCell(e.currentTarget.id,e.clientX, e.clientY)}
/>
                        <Rec id={"a-8-0"} src={Icon.SqaureBasic}                         onClick={(e) => props.clickCell(e.currentTarget.id,e.clientX, e.clientY)}
/>
                    </Layout> */}
                    <Rec
                        id={"a-3-0"}
                        src={Icon.SqaureBasic}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                </FirstGroup>
                <SecondGroup>
                    <Rec
                        id={"a-4-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"a-5-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"a-6-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"a-7-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    {/* <Layout>
                        <Rec id={"a-8-1"} src={Icon.RectangleHorizon}                         onClick={(e) => props.clickCell(e.currentTarget.id,e.clientX, e.clientY)}
/>
                        <Rec id={"a-8-0"} src={Icon.SqaureBasic}                         onClick={(e) => props.clickCell(e.currentTarget.id,e.clientX, e.clientY)}
/>
                    </Layout> */}
                    <Rec
                        id={"a-8-0"}
                        src={Icon.SqaureBasic}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"a-9-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"a-10-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"a-11-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"a-12-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"a-13-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"a-14-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"a-15-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"a-16-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"a-17-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"a-18-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"a-19-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                </SecondGroup>
                <ThridGroup>
                    <ThirdRec
                        id={"a-20-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    {/* <Layout>
                        <ThirdRec id={"a-21-1"} src={Icon.RectangleHorizon}                         onClick={(e) => props.clickCell(e.currentTarget.id,e.clientX, e.clientY)}
/>
                        <ThirdRec id={"a-21-0"} src={Icon.SqaureBasic}                         onClick={(e) => props.clickCell(e.currentTarget.id,e.clientX, e.clientY)}
/>
                    </Layout> */}
                    <ThirdRec
                        id={"a-21-0"}
                        src={Icon.SqaureBasic}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <ThirdRec
                        id={"a-22-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <ThirdRec
                        id={"a-23-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <ThirdRec
                        id={"a-24-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <ThirdRec
                        id={"a-25-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <ThirdRec
                        id={"a-26-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <ThirdRec
                        id={"a-27-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <ThirdRec
                        id={"a-28-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <ThirdRec
                        id={"a-29-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <ThirdRec
                        id={"a-30-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <ThirdRec
                        id={"a-31-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <ThirdRec
                        id={"a-32-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                </ThridGroup>
                <ForthGroup>
                    <Rec
                        id={"a-33-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"a-34-0"}
                        src={Icon.RectangleVertical}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                    <Rec
                        id={"a-35-0"}
                        src={Icon.TrigangleUp}
                        onClick={(e) => props.clickCell(e.currentTarget.id, e.clientX, e.clientY)}
                    />
                </ForthGroup>
            </LineLayoutInner>
        </UpperLineLayout>
    );
};

export default UpperLine;

const UpperLineLayout = styled.div`
    position: absolute;
    top: 3px;
    left: 0;
    width: 100%;
`;

const LineLayoutInner = styled.div`
    position: relative;
    display: flex;
    width: 100%;
`;

const SquaresLayout = styled.div`
    position: absolute;
    top: 0.2em;
    display: flex;
    width: 2.4%;
`;

const FirstGroup = styled(SquaresLayout)`
    left: 1%;
    align-items: flex-start;
`;

const SecondGroup = styled(SquaresLayout)`
    left: 10.2%;
`;
const ThridGroup = styled(SquaresLayout)`
    left: 57.7%;
`;
const ForthGroup = styled(SquaresLayout)`
    left: 90%;
`;

const Rec = styled.img`
    margin-left: 0.08em;
    width: 95%;
    opacity: 0.5;
    &:hover {
        filter: invert(0.5) sepia(1) hue-rotate(200deg) saturate(4) brightness(1);
        opacity: 1;
    }
`;

const ThirdRec = styled.img`
    width: 94%;
    margin-top: 0.2em;
    margin-left: 0.05em;

    opacity: 0.5;
    &:hover {
        filter: invert(0.5) sepia(1) hue-rotate(200deg) saturate(4) brightness(1);
        opacity: 1;
    }
`;
