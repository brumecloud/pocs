import { useCallback, useMemo } from "react";
import ReactFlow, {
    useNodesState,
    useEdgesState,
    addEdge,
    Background,
    BackgroundVariant,
    Node,
    Edge,
    OnConnect,
    NodeTypes,
    EdgeTypes,
} from "reactflow";
import styled from "styled-components";

import "./App.css";
import "reactflow/dist/style.css";
import ServiceNode from "../components/reactflow/service";

const initialNodes: Node[] = [
    {
        id: "1",
        position: { x: 0, y: -150 },
        data: {
            image: "nest-js-icon.png",
            title: "Media API",
            subTitle: "/company/media-api",
        },
        type: "serviceBig",
    },
    {
        id: "2",
        position: { x: 300, y: 0 },
        data: {
            image: "python-logo.png",
            title: "Account API",
            subTitle: "/company/account-api",
        },
        type: "serviceBig",
    },
    {
        id: "3",
        position: { x: 150, y: 150 },
        data: {
            image: "nodejs_logo.png",
            title: "Billing",
            subTitle: "/company/account-api",
        },
        type: "serviceBig",
    },
];
const initialEdges: Edge[] = [
    { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
    {
        id: "e2-3",
        source: "2",
        target: "3",
        animated: true,
        type: "smoothstep",
    },
];

const proOptions = { hideAttribution: true };

export default function App() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const nodeTypes: NodeTypes = useMemo(
        () => ({ serviceBig: ServiceNode }),
        []
    );

    const onConnect: OnConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <ReactFlowStyles
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                proOptions={proOptions}
                nodeTypes={nodeTypes}
                fitView
            >
                <Background
                    id="1"
                    gap={25}
                    color="#252525"
                    variant={BackgroundVariant.Lines}
                />
                <Background
                    id="2"
                    gap={50}
                    offset={1}
                    color="#2f2f2f"
                    variant={BackgroundVariant.Lines}
                />
            </ReactFlowStyles>
        </div>
    );
}

const ReactFlowStyles = styled(ReactFlow)`
    background-color: #1e1e1e;
`;
