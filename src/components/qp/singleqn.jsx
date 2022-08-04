import React from 'react'




const singleqn = (props) => {
    return (
        <div>
            <tr>
                <td>{props.index}</td>
                <td>{props.que}</td>
                <td>{props.co}</td>
                <td>{props.mark}</td>
            </tr>
        </div>
    )
}

export default singleqn