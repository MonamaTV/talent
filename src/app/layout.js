import CalenderWrapper from "../../components/CalendarWrapper";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`container mx-auto my-5 border border-gray-50 rounded-md px-5 py-5 ${poppins.className}`}
      >
        <CalenderWrapper>{children}</CalenderWrapper>
      </body>
    </html>
  );
}
