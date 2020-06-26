import React from 'react'
import Cleave from 'cleave.js/react'
import debounce from 'lodash/debounce'

import { Wrapper } from './styles'

const TextInput = ({ onChange, name, value, placeholder }) => {
    const delayedOnChange = debounce(e => {
        const value = e.target.rawValue
        onChange(value, name)
    }, 300, { trailing: true, leading: false })

    const handleChange = e => {
        e.persist()
        delayedOnChange(e)
    }

    return (
        <Wrapper>
            <Cleave
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </Wrapper>
    )
}

export default TextInput
