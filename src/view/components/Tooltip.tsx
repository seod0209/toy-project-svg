import React from "react";
import styled from "styled-components";

interface TooltipProps {
    name: string;
    addressDetail: string;
    taskTypes?: string[];
    clickDetail?: (id: string) => void; //    isTaskExisted:boolean;
}

const Tooltip: React.FC<TooltipProps> = (props) => {
    return (
        <TooltipLayout id={"tooltip"}>
            <InfoLayout>
                <Name>{props.name}</Name>
                <AddresssDetail>{props.addressDetail}</AddresssDetail>
            </InfoLayout>
        </TooltipLayout>
    );
};
export default Tooltip;

const TooltipLayout = styled.div`
    padding: 10px;
    width: 100px;
    height: 35px;
    border-radius: 8px;
    opacity: 0.7;
    background-color: #262626;
    z-index: 100;
    @media (max-width: 786px) {
        transform: rotate(270deg);
    }
`;

const InfoLayout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
    width: 100%;
`;

const Name = styled.span`
    min-width: 50px;
    max-width: 60px;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    text-align: left;
`;
const AddresssDetail = styled.span`
    width: 100%;
    color: #f5f7fa;
    font-size: 14px;
`;
