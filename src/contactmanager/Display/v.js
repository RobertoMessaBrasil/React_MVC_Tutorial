import React from 'react'
import { Link } from 'react-router-dom'

import i18n from './i18n'

export default (t) => {

    let s = t.state

    return (

        <div>

            <h2>{i18n.title}</h2>

            <p>

                <Link to="/">{i18n.label1}</Link>&nbsp;
                <Link to={"/Edit/" + s.id}>{i18n.label2}</Link>&nbsp;
                <Link to={"/Delete/" + s.id}>{i18n.label3}</Link>&nbsp;

            </p>

            <fieldset>

                <legend>{i18n.label4}</legend>

                <table>

                    <tbody>

                        <tr><th style={{ textAlign: "right" }}>{i18n.label5}</th><td>{s.name}</td></tr>
                        <tr><th style={{ textAlign: "right" }}>{i18n.label6}</th><td>{s.description}</td></tr>

                    </tbody>

                </table>

            </fieldset>

        </div>

    )

}
