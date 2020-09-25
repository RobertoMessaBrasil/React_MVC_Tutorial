import React from 'react'
import { Link } from 'react-router-dom'

import i18n from './i18n'

export default (t) => {

    let s = t.state

    return (

        <div>

            <h2>{i18n.title}</h2>

            <p><Link to="/Create">{i18n.label1}</Link></p>

            <fieldset>

                <legend>{i18n.label2}</legend>

                {s.rowList.length === 0 &&

                    <p>{i18n.msg1}</p>

                }

                {s.rowList.length > 0 &&

                    s.rowList.map(

                        row => <p><Link to={"/Display/" + row.id}>{row.name}</Link></p>

                    )

                }

            </fieldset>

        </div>

    )

}
