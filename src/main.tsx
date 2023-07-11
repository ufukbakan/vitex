import { Routes } from "@generouted/react-router/lazy";
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from "recoil";
import "./main.scss";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RecoilRoot>
        <Routes />
    </RecoilRoot>
);
