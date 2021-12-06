import { Navbar } from "./layout/navbar/Navbar";
import { ProductBody } from "./layout/body/ProductBody";
import "./App.css";
import MainContext, { ContextHandler } from "./context/main-context";

export const App = () => {
  const context = ContextHandler();

  return (
    <MainContext.Provider value={context}>
      <div className="full-page">
        <header>
          <Navbar />
        </header>
        <section>
          <ProductBody />
        </section>
      </div>
    </MainContext.Provider>
  );
};
