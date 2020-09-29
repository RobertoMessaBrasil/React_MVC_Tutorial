import React from 'react'
import { Link } from 'react-router-dom'

import i18n from './i18n'

export function createForm(t) {

    let s = t.state
    let row = s.row

    return (

        <div>

            <h2>{i18n.title}</h2>

            <p>

                <Link to="/">{i18n.createForm.label1}</Link>

                &nbsp;

                <Link to={"/"}>{i18n.createForm.label2}</Link>

            </p>

            <fieldset>

                <legend>{i18n.createForm.label3}</legend>

                <form onSubmit={t.submitHandler}>

                    <table>

                        <tbody>

                            <tr>

                                <th style={{ textAlign: "right" }}>{i18n.createForm.label4}</th>

                                <td><input type="text" name="name" onChange={t.changeHandler} value={row.name} /></td>

                            </tr>

                            <tr>

                                <th style={{ textAlign: "right" }}>{i18n.createForm.label5}</th>

                                <td><textarea style={{ width: "100%" }} name="description" onChange={t.changeHandler} value={row.description} /></td>

                            </tr>

                            <tr>

                                <td colSpan="2" style={{ textAlign: "right" }}>

                                    <input type="submit" value={i18n.createForm.label6} />

                                </td>

                            </tr>

                        </tbody>

                    </table>

                </form>

            </fieldset>

        </div>

    )

}

export function invalidDataMsg(t) {

    return (

        <div>

            <h2>{i18n.title}</h2>

            {i18n.invalidDataMsg.msg1}

            <button onClick={t.closeinvalidDataMsg}>{i18n.invalidDataMsg.label1}</button>

        </div>

    )

}
