import React from "react";
import styled from "styled-components";

const BoxView: React.FC = () => {
    return (
        <BoxItemsLayout>
            <BoxItem className="box">BOX</BoxItem>
            {/* <BoxItem />
            <BoxItem />
            <BoxItem />
            <BoxItem /> */}
        </BoxItemsLayout>
    );
};

export default BoxView;

const BoxItemsLayout = styled.div`
    display: flex;
`;

const BoxItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: yellow;

    border: 5px solid black;

    @keyframes sample {
        0% {
            transform: translate(0, 0);
        }
        5% {
            transform: translate(50px, 0);
        }
        100% {
            transform: translate(70px, 50px);
        }
    }
    animation: sample 2s linear infinite alternate;

    &:hover {
        animation-play-state: running;
    }
`;
