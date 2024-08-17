import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexLayout from "./views/layouts/IndexLayout";
import { Suspense } from "react";
import IndexPost from "./views/posts/IndexPost";
import AddedPost from "./views/posts/AddedPost";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<IndexLayout />}>
                <Route path="/" element={
                    <Suspense fallback="Loading ...">
                        <IndexPost />
                    </Suspense>
                } />
                <Route path="/added" element={
                    <Suspense fallback="Loading">
                        <AddedPost />
                    </Suspense>
                }/>
                </Route>
            </Routes>
        </BrowserRouter>       
    )
}