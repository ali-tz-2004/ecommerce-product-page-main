import { Navbar } from "./navbar/Navbar";
import { ProductBody } from "./body/ProductBody";
import "./App.css";
export const App = () => {
  return (
    <div className="full-page">
      <header>
        <Navbar />
      </header>
      <section>
        <ProductBody />
      </section>
    </div>
  );
};
