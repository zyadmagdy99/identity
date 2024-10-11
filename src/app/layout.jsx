"use client"
import "./globals.css";
import { store } from "@/lib/store";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import Navbar from "./_Components/navbar/page";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Navbar/>
          <div>

        {children}
          </div>
        <Toaster/>
        </Provider>
      </body>
    </html>
  );
}
