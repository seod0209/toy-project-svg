import React from "react";
import styled from "styled-components";
import * as Icon from "./assets";

interface IconImplementProps {
    name: IconTypes;
    size: number;
    color?: string;
    hoverColor?: string;
    activeColor?: string;
    onClick?: () => void;
}

const IconImpl: React.FC<IconImplementProps> = (props) => {
    return (
        <Svg_Style
            size={props.size}
            hoverColor={props.hoverColor}
            activeColor={props.activeColor}
            color={props.color}
            style={{ cursor: props.onClick ? "pointer" : undefined }}>
            {Icons[props.name]}
        </Svg_Style>
    );
};

export default IconImpl;

interface SVG_Props {
    size: number;
    color?: string;
    hoverColor?: string;
    activeColor?: string;
}

const Svg_Style = styled.div<SVG_Props>`
    display: inline-block;

    svg {
        vertical-align: middle;
        width: ${(props) => props.size};
        height: ${(props) => props.size};
    }

    &:hover {
        background-color: ${(props) => (props.hoverColor ? props.hoverColor : "initial")};
    }
    &:active {
        background-color: ${(props) => (props.activeColor ? props.activeColor : "initial")};
    }
`;

export enum IconTypes {
    FirstFloor = "FirstFloor",
    FloorPlan = "FloorPlan",
    SqaureBasic = "SqaureBasic",
    RectangleVertical = "RectangleVertical",
    RectangleHorizon = "RectangleHorizon",
    TrigangleDown = "TrigangleDown",
    TrigangleUp = "TrigangleUp",
    CornerLeftDown = "CornerLeftDown",
    CornerLeftDownSmall = "CornerLeftDownSmall",
    CornerLeftUp = "CornerLeftUp",
    CornerLeftUpSmall = "CornerLeftUpSmall",
    CornerRightDownSmall = "CornerRightDownSmall",
    CornerRightUp = "CornerRightUp",
    CornerRight = "CornerRight",
    CornerRightSmall = "CornerRightSmall",
    FloorPlanImg = "FloorPlanImg",
}

const Icons = {
    FirstFloor: <Icon.FirstFloor viewBox={"0 0 28 28"} />,
    FloorPlan: <Icon.FloorPlan viewBox={"0 0 28 28"} />,
    SqaureBasic: <Icon.SqaureBasic viewBox={"0 0 28 28"} />,
    RectangleVertical: <Icon.RectangleVertical viewBox={"0 0 28 28"} />,
    RectangleHorizon: <Icon.RectangleHorizon viewBox={"0 0 28 28"} />,
    TrigangleDown: <Icon.TrigangleDown viewBox={"0 0 28 28"} />,
    TrigangleUp: <Icon.TrigangleUp viewBox={"0 0 28 28"} />,
    CornerLeftDown: <Icon.CornerLeftDown viewBox={"0 0 28 28"} />,
    CornerLeftDownSmall: <Icon.CornerLeftDownSmall viewBox={"0 0 28 28"} />,
    CornerLeftUp: <Icon.CornerLeftUp viewBox={"0 0 28 28"} />,
    CornerLeftUpSmall: <Icon.CornerLeftUpSmall viewBox={"0 0 28 28"} />,
    CornerRightDownSmall: <Icon.CornerRightDownSmall viewBox={"0 0 28 28"} />,
    CornerRightUp: <Icon.CornerRightUp viewBox={"0 0 28 28"} />,
    CornerRight: <Icon.CornerRight viewBox={"0 0 28 28"} />,
    CornerRightSmall: <Icon.CornerRightSmall viewBox={"0 0 28 28"} />,
    FloorPlanImg: <Icon.FloorPlanImg viewBox={"0 0 28 28"} />,
};
