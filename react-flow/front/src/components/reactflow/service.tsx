import { Handle, Position } from "reactflow";
import styled from "styled-components";

export default function ServiceNode({
    data: {
        image = "nest-js-icon.png",
        title = "Media API",
        subTitle = "/company/media-api",
    },
}) {
    return (
        <>
            <Handle type="source" position={Position.Bottom} />
            <Handle type="target" position={Position.Top} />
            <NodeBody>
                <img src={image} width={45} height={45} />
                <NodeText>
                    <NodePrimaryText>{title}</NodePrimaryText>
                    <NodeSubText>
                        <img
                            src="github-mark-white.png"
                            width={15}
                            height={15}
                        />
                        <NodeSecondaryText>{subTitle}</NodeSecondaryText>
                    </NodeSubText>
                </NodeText>
                <BackgroundBlur src={image} />
            </NodeBody>
        </>
    );
}

const NodeBody = styled.div`
    border-radius: 10px;
    padding: 10px;
    border: 2px #2b2b2b solid;
    width: 190px;
    height: 70px;
    display: flex;
    align-items: center;
    background-color: #161616;
    filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.5));
    z-index: 0;
    overflow: hidden;
`;

const NodeText = styled.div`
    margin-left: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    z-index: 3;
`;

const NodePrimaryText = styled.h2`
    font-size: 15px;
    margin: 0;
    margin-bottom: 10px;
    color: white;
`;

const NodeSubText = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

const NodeSecondaryText = styled.p`
    color: white;
    margin: 0;
    margin-left: 3px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 10px;
    z-index: 3;
`;

const BackgroundBlur = styled.img`
    position: absolute;
    filter: blur(50px);
    right: -30px;
    bottom: -50px;
    width: 100px;
    height: 10s0px;
    z-index: 1;
`;
