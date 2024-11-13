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

export const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;
const persistor = persistStore(store);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");

  
  return (
    <Provider store={store}>
      <PersistGate  persistor={persistor}>
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

        <main className="flex-1">{children}</main>

        <Footer />
      </PersistGate>
    </Provider>
  );
};

export default Layout;
