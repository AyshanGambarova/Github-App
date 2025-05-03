import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Provider} from '@/components/ui/provider';

import SearchPage from '@/pages/SearchPage';
import ResultPage from '@/pages/ResultPage';
import NotFoundPage from "@/pages/NotFoundPage";
import Layout from "@/layout";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false
        }
    }
});

createRoot(document.getElementById('root')!).render(
    <Provider>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route index element={<SearchPage/>}/>
                        <Route path="/result/:username" element={<ResultPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    </Provider>
);
