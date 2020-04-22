import {render} from '@testing-library/react'
import React from 'react'

const setupBuilder = Component => props => {
    const container = document.createElement('div')
    container.setAttribute('id', 'test-container')
    return render(<Component {...props} />, {
        container: document.body.appendChild(container)
    })
}

export default setupBuilder