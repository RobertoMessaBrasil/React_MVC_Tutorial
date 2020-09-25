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
                    <Link to={"/"}>{i18n.label2}</Link>

            </p>

            <fieldset>

                <legend>{i18n.label3}</legend>

                <form onSubmit={t.submitHandler}>

                    <table>
                        
                        <tbody>

                            <tr>

                                <th style={{ textAlign: "right" }}>{i18n.label4}</th>

                                <td><input type="text" name="name" onChange={t.changeHandler} value={s.name} /></td>

                            </tr>

                            <tr>

                                <th style={{ textAlign: "right" }}>{i18n.label5}</th>

                                <td><textarea style={{ width: "100%" }} name="description" onChange={t.changeHandler} value={s.description} /></td>

                            </tr>

                            <tr>

                                <td colSpan="2" style={{ textAlign: "right" }}>

                                    <input type="submit" value={i18n.label6} />

                                </td>

                            </tr>

                        </tbody>

                    </table>

                </form>

            </fieldset>

        </div>

    )

}
