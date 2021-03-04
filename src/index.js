import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Example2 from "./Example2";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <Example2 />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
