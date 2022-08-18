import React from "react";
import * as Icon from "../icon/assets";
import styled from "styled-components";

const BottomLine: React.FC = () => {
    return (
        <BottomLineLayout>
            <LineLayoutInner>
                {/* <CornerLeftDown style={{ width: "60px", height: "169px" }} /> */}
                <Sqaure src={Icon.CornerLeftDown} top={5} left={11} />
            </LineLayoutInner>
        </BottomLineLayout>
    );
};

export default BottomLine;

const BottomLineLayout = styled.div`
    position: absolute;
    top: 110px;
    left: 0;
    width: fit-content;
`;

const LineLayoutInner = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

interface SqaureStyleProps {
    top: number;
    left: number;
}

const Sqaure = styled.img<SqaureStyleProps>`
    position: absolute;
    top: ${(props) => `${props.top}px`};
    left: ${(props) => `${props.left}px`};
    width: 19px;
    &:hover {
        filter: invert(0.5) sepia(1) hue-rotate(200deg) saturate(4) brightness(1);
    }
`;
