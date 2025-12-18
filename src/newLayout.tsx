"use client";

import { ToastContainer } from "react-toastify";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { usePathname } from "next/navigation";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export const backend_url = "https://techcreator-backend.onrender.com";
const persistor = persistStore(store);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const hideHeader = pathname.startsWith("/admin") || pathname === "/home" || pathname === "/confirmation";
  const hideFooter = pathname === "/home" || pathname === "/confirmation";


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

        
       {!hideHeader && <Header />}

        <main className="flex-1">{children}</main>

        {!hideFooter && <Footer />}
      </PersistGate>
    </Provider>
  );
};

export default Layout;
