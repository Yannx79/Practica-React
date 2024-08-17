import { Outlet } from "react-router-dom";
import CustomFooter from "../components/CustomFooter";
import TopMenu from "../components/TopMenu";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function IndexLayout() {

    const queryClient = new QueryClient()

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <section className="bg-gray-400">
                    <TopMenu />
                    <Outlet />
                    <CustomFooter />
                </section>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </>
    )
}