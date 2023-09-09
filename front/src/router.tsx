import { BrowserRouter, Route, Routes } from "react-router-dom";

import { List } from "./routes";

export default function Router() {


    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<List />} />
        </Routes>
    </BrowserRouter>
}