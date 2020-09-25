import React from 'react'

import i18n from './i18n'

export default (t) => {

    return (

        <div>

            <h2>{i18n.title}</h2>


            <table>

                <tbody>

                    <tr>

                        <td>{i18n.msg1}</td>

                    </tr>

                    <tr>

                        <td style={{ textAlign: "center" }}>

                            <button onClick={t.yesHandler}>{i18n.label1}</button>
                            <button onClick={t.noHandler}>{i18n.label2}</button>

                        </td>

                    </tr>

                </tbody>

            </table>

        </div>

    )

}
