import { Sora, Inter } from "next/font/google";
import "@/app/globals.css";

export default function AuthLayout({ children }) {
  return (
   
      <section>
        
        {children}
     
      </section>

  );
}
