import { Outlet } from "react-router-dom";
import Menu from "../common/components/Menu";
import { Suspense } from "react";

export default function () {
    return (
        <>
            <header>
                <Menu />
            </header>
            <main>
                <Suspense fallback={<div>Loading (fallback)...</div>}>
                    <Outlet></Outlet>
                </Suspense>
            </main>
        </>
    )
}