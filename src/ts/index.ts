import ReactDom from "react-dom";
import { createElement } from "react";

import { IndexComposition } from "./IndexComposition";

const container = document.getElementById("root");
const indexComponent = createElement(IndexComposition);

ReactDom.render(indexComponent, container);
