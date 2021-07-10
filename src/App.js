import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { About } from "./views/About/About";
import { ViewItemDetail } from "./views/ViewItemDetail/ViewItemDetail";
import { Category } from "./views/Category/Category";
import { NavBarCategory } from "./components/navBarCategory/NavBarCategory";
import { CartProvider } from "./components/context/CartContext";
import { Cart } from "./components/cart/Cart";

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <NavBar />
                    <NavBarCategory />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/detail/:id" component={ViewItemDetail} />
                        <Route path="/cart" component={Cart} />
                        <Route
                            path="/category/:categoryId"
                            exact
                            component={Category}
                        />
                    </Switch>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
