import React from "react";
import IconImpl, { IconTypes } from "./IconImpl";

interface IconHocProps {
    size?: "XXXS" | "XXS" | "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
    fill?: boolean;
    color?: string;
    hover?: boolean;
    active?: boolean;
    selected?: boolean;
    onClick?: () => void;
}

const IconHOC = (iconType: IconTypes) => {
    const Inner: React.FC<IconHocProps> = (props) => {
        const size = {
            XXXS: 12,
            XXS: 16,
            XS: 20,
            S: 24,
            M: 28,
            L: 32,
            XL: 36,
            XXL: 40,
            XXXL: 48,
        };

        const setSize = () => {
            switch (props.size) {
                case "XXXS":
                    return size.XXXS;
                case "XXS":
                    return size.XXS;
                case "XS":
                    return size.XS;
                case "S":
                    return size.S;
                case "M":
                    return size.M;
                case "L":
                    return size.L;
                case "XL":
                    return size.XL;
                case "XXL":
                    return size.XXL;
                case "XXXL":
                    return size.XXXL;
                default:
                    return size.M;
            }
        };

        const setHoverCover = (color: string) => {
            return props.hover ? color : undefined;
        };

        const setActiveColor = (color: string) => {
            return props.active ? color : undefined;
        };

        return (
            <IconImpl
                name={iconType}
                size={setSize()}
                color={
                    props.selected
                        ? "primary-orange-default"
                        : props.selected === false
                        ? "neutral-gray-50"
                        : props.color
                        ? props.color
                        : "neutral-gray-100"
                }
                hoverColor={setHoverCover("var(--neutral-gray-10)")}
                activeColor={setActiveColor("var(--neutral-gray-20)")}
                onClick={props.onClick}
            />
        );
    };

    return Inner;
};

const Icon = {
    FirstFloor: IconHOC(IconTypes.FirstFloor),
    FloorPlan: IconHOC(IconTypes.FloorPlan),
    SqaureBasic: IconHOC(IconTypes.SqaureBasic),
    RectangleVertical: IconHOC(IconTypes.RectangleVertical),
    RectangleHorizon: IconHOC(IconTypes.RectangleHorizon),
    TrigangleDown: IconHOC(IconTypes.TrigangleDown),
    TrigangleUp: IconHOC(IconTypes.TrigangleUp),
    CornerLeftDown: IconHOC(IconTypes.CornerLeftDown),
    CornerLeftDownSmall: IconHOC(IconTypes.CornerLeftDownSmall),
    CornerLeftUp: IconHOC(IconTypes.CornerLeftUp),
    CornerLeftUpSmall: IconHOC(IconTypes.CornerLeftUpSmall),
    CornerRightDownSmall: IconHOC(IconTypes.CornerRightDownSmall),
    CornerRightUp: IconHOC(IconTypes.CornerRightUp),
    CornerRight: IconHOC(IconTypes.CornerRight),
    CornerRightSmall: IconHOC(IconTypes.CornerRightSmall),
    FloorPlanImg: IconHOC(IconTypes.FloorPlanImg),
};

export default Icon;
