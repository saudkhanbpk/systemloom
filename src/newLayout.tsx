// Layout.tsx
import { ToastContainer } from "react-toastify";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import "react-toastify/dist/ReactToastify.css"; 
// import store from "./redux/store";
// import { Provider } from "react-redux";

export const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

interface LayoutProps {
    children: React.ReactNode; // Define a type for children prop
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body>
                {/* <Provider store={store}> */}
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        closeOnClick
                        pauseOnHover
                        draggable
                        pauseOnFocusLoss
                    />
                    <Header />
                    <main>{children}</main>
                    <Footer />
                {/* </Provider> */}
            </body>
        </html>
    );
}

export default Layout;
