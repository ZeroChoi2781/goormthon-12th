'use client';

import 'react-toastify/dist/ReactToastify.css';

import { Slide, ToastContainer } from '@goorm-dev/vapor-components';

interface ToastProviderProps {
    children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
    return (
        <>
            {children}
            <ToastContainer
                autoClose={3000}
                position="top-right"
                transition={Slide}
                newestOnTop
                hideProgressBar
                className=""
                closeButton={false}
            />
        </>
    );
}
