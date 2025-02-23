import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { shadesOfPurple } from "@clerk/themes";
import {
  ClerkProvider
} from '@clerk/nextjs'
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({subsets:["latin"]})

export const metadata = {
  title: "Teeam",
  description: "Project Management App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme:shadesOfPurple,
      variables:{
        colorPrimary: "#3b82f6",
        colorBackground: "#1a202c",
        colorInputBackground: "#2D3748",
        colorInputText:"#F3F4F6",
      },
      elements:{
        formButtonPrimary: "text-white",
        card: "bg-gray-800",
        headerTitle:"text-blue-400",
        headerSubtitle: "text-gray-400"
      }
    }}
    >
    <html lang="en">
      <body
        className={`${inter.className} dotted-background`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          >
            <Header/>
            <main className="min-h-screen"> {children}</main>
            <Toaster richColors />
            <footer className="bg-gray-900 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">

              <p>Made with 💗 By Ashish</p>
              </div>
              </footer>
       
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
