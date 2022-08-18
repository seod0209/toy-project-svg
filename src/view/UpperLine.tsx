import React from "react";
import * as Icon from "../icon/assets";
//import { ReactComponent as CornerLeftDown } from "../icon/assets/Corner_left_down.svg";
import styled from "styled-components";

const UpperLine: React.FC = () => {
    return (
        <UpperLineLayout>
            <LineLayoutInner>
                <FirstGroup>
                    <Sqaure src={Icon.CornerLeftDown} />
                    <Rec src={Icon.RectangleVertical} />
                    <RecLayout>
                        <Rec src={Icon.RectangleHorizon} />
                        <Rec src={Icon.SqaureBasic} />
                    </RecLayout>
                </FirstGroup>
                <SecondGroup>
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.RectangleVertical} />
                    <RecLayout>
                        <Rec src={Icon.RectangleHorizon} />
                        <Rec src={Icon.SqaureBasic} />
                    </RecLayout>
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.RectangleVertical} />
                </SecondGroup>
                <ThridGroup>
                    <Rec src={Icon.RectangleVertical} />
                    <RecLayout>
                        <Rec src={Icon.RectangleHorizon} />
                        <Rec src={Icon.SqaureBasic} />
                    </RecLayout>
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.RectangleVertical} />
                </ThridGroup>
                <ForthGroup>
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.RectangleVertical} />
                    <Rec src={Icon.TrigangleUp} />
                </ForthGroup>
            </LineLayoutInner>
        </UpperLineLayout>
    );
};

export default UpperLine;

const UpperLineLayout = styled.div`
    position: absolute;
    top: 9px;
    left: 4px;
    width: 100%;
`;

const LineLayoutInner = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
`;

const SquaresLayout = styled.div`
    position: absolute;
    display: flex;
    top: 0;
    align-items: flex-start;
`;

const FirstGroup = styled(SquaresLayout)`
    left: 11px;
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
    margin-right: 2px;
    width: 23px;

    &:hover {
        filter: invert(0.5) sepia(1) hue-rotate(200deg) saturate(4) brightness(1);
    }
`;
const RecLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 30px;
`;

const Rec = styled.img`
    margin-right: 1.7px;
    width: 32px;
    opacity: 0;
    &:hover {
        filter: invert(0.5) sepia(1) hue-rotate(200deg) saturate(4) brightness(1);
        opacity: 1;
    }
`;
