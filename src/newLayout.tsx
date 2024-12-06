"use client";

import { ToastContainer } from "react-toastify";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { usePathname } from "next/navigation"; // Correct import

export const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;
const persistor = persistStore(store);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname(); // Get the current pathname

  console.log("Current pathname:", pathname); // Debugging line

  // Check if the current page is the 404 page or not
  const isNotFoundPage = pathname === "/not-found" || pathname === "/404";

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          pauseOnFocusLoss
        />

        {/* Show Header only if it's NOT the 'not-found' page */}
        {!isNotFoundPage && <Header />}

        <main className="flex-1">{children}</main>

        {/* Show Footer only if it's NOT the 'not-found' page */}
        {!isNotFoundPage && <Footer />}
      </PersistGate>
    </Provider>
  );
};


export default Layout;
