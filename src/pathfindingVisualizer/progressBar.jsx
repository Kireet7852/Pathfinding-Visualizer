import React from 'react';
import { Progress } from "reactstrap";
import "./progressBar.css";

const ProgressBar = (props) => {
    const { visitedNodes, shortestNodes } = props;
    return ( 
        <div>
            <div className="visited-nodes-bar" title="Visited Node">
                visited nodes: {visitedNodes === "0" ? "0" : visitedNodes}
                <Progress value={(visitedNodes / 800)*100} color="danger" />
            </div>
            <div className="shortest-nodes-bar" title="Shortest Node">
                shortest path: {shortestNodes === "0" ? "0" : shortestNodes}
                <Progress value={(shortestNodes / 800)*100} color="success" />
            </div>
        </div>
     );
}
 
export default ProgressBar;