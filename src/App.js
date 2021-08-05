import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { About } from "./views/About/About";
import { ViewItemDetail } from "./views/ViewItemDetail/ViewItemDetail";
import { Category } from "./views/Category/Category";
import { NavBarCategory } from "./components/navBarCategory/NavBarCategory";
import { CartProvider } from "./components/context/CartContext";
import { CategoriesProvider } from "./components/context/CategoriesContext";
import { Cart } from "./components/cart/cart/Cart";
import { Checkout } from "./views/Checkuot/Checkout";
import { CheckoutResponse } from "./components/checkout/CheckoutResponse";
import { HomeCategory } from "./views/Home/HomeCategory";

function App() {
    return (
        <CartProvider>
            <CategoriesProvider>
                <Router>
                    <div className="App">
                        <NavBar />
                        <NavBarCategory />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/about" component={About} />
                            <Route
                                path="/item/:number"
                                component={ViewItemDetail}
                            />
                            <Route path="/cart" component={Cart} />
                            <Route
                                path="/checkout"
                                exact
                                component={Checkout}
                            />
                            <Route
                                path="/checkout/result/:orderNumber"
                                exact
                                component={CheckoutResponse}
                            />
                            
                            <Route
                                path="/categories/:categoryId"
                                exact
                                component={HomeCategory}
                            />
                            <Route
                                path="/category/:categoryId"
                                exact
                                component={Category}
                            />
                        </Switch>
                    </div>
                </Router>
            </CategoriesProvider>
        </CartProvider>
    );
}

export default App;
