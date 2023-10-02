import Nav from "@components/Nav";
import Provider from "@components/provider";
import "@styles/globals.css";

export const metadata = {
  title: "nextPro",
  description: "New project",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
