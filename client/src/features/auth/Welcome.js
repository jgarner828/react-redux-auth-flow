import { useSelector } from "react-redux";
import { selectCurrentUser, selectCurrentToken } from "./authSlice";
import { Link } from "react-router-dom";

import React from 'react'

const Welcome = () => {

    const user = useSelector(selectCurrentUser);
    const token = useSelector(selectCurrentToken);

    const welcome = user ? `Welcome ${user}` : `Welcome!`;


    const content = (
        <section className="welcome">
            <h1>{welcome}</h1>

            <p>You are in the auth section</p>
        </section>
    )

  return content
}

export default Welcome