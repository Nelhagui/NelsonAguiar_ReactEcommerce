import React from "react";
import { useState } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import "./FormCheckout.css";

export const FormCheckout = ({ createOrder }) => {
    const initialState = {
        name: "",
        phone: "",
        email: "",
    };
    const [values, setValues] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createOrder(values);
    };

    return (
        <div className="containerFrom">
            <h2>Complete sus datos</h2>
            <form
                className="formCheckout"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <div>
                    <TextField
                        onChange={handleChange}
                        id="standard-text-input"
                        label="Nombre"
                        type="text"
                        name="name"
                        value={values.name}
                    />
                    <TextField
                        onChange={handleChange}
                        id="standard-basic"
                        label="Email"
                        name="email"
                        value={values.email}
                    />
                    <TextField
                        onChange={handleChange}
                        id="standard-number-input"
                        label="Telefono"
                        type="number"
                        name="phone"
                        value={values.phone}
                        autoComplete="current-password"
                    />
                </div>
                <Button variant="outlined" type="submit" color="primary">
                    Finaliza compra
                </Button>
            </form>
        </div>
    );
};
