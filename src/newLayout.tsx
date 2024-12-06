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
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

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

        {/* WhatsApp icon */}
        <a
          href="https://wa.me/923471914920" // WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-0  p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 z-50"
        >
          <FaWhatsapp size={40} />
        </a>

        {!isAdminPage && <Header />}

        <main className="flex-1">{children}</main>

        <Footer />
      </PersistGate>
    </Provider>
  );
};

export default Layout;
