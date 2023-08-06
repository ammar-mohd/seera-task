import Nav from "../components/Nav/Nav";
import "./globals.css";

// Define metadata for the application (e.g., for SEO purposes)
export const metadata = {
  title: "GitHub Search",
  description: "Search by repositories & users 🔎",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Render the Nav component, which represents the navigation bar */}
        <Nav />

        {/* Render the content passed as children to this component */}
        {children}
      </body>
    </html>
  );
}
