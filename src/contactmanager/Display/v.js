import React from 'react'
import { Link } from 'react-router-dom'

import i18n from './i18n'

export function display(t) {

    let s = t.state
    let row = s.row

    return (

        <div>

            <h2>{i18n.title}</h2>

            <p>

                <Link to="/">{i18n.row.label1}</Link>&nbsp;
                <Link to={"/Edit/" + s.id}>{i18n.row.label2}</Link>&nbsp;
                <Link to={"/Delete/" + s.id}>{i18n.row.label3}</Link>

            </p>

            <fieldset>

                <legend>{i18n.row.label4}</legend>

                <table>

                    <tbody>

                        <tr><th style={{ textAlign: "right" }}>{i18n.row.label5}</th><td>{row.name}</td></tr>
                        <tr><th style={{ textAlign: "right" }}>{i18n.row.label6}</th><td>{row.description}</td></tr>

                    </tbody>

                </table>

            </fieldset>

        </div>

    )

}
