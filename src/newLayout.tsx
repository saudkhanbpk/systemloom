// Layout.tsx
'use client'; 

import { ToastContainer } from "react-toastify";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import "react-toastify/dist/ReactToastify.css"; 
import store from "./redux/store";
import { Provider } from "react-redux";
import { usePathname } from "next/navigation";

export const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

interface LayoutProps {
    children: React.ReactNode; // Define a type for children prop
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const pathname = usePathname();

    // Check if the current route starts with "/admin"
    const isAdminPage = pathname.startsWith("/admin");


    return (
        <Provider store={store}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                pauseOnFocusLoss
            />
            {/* Show Header only if it's NOT an admin page */}
            {!isAdminPage && <Header />}
            
                <main className="flex-1"> {/* Main content area */}
                    {children}
                </main>
            <Footer />
        </Provider>
    );
}

export default Layout;
