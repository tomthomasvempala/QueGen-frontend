import React from 'react'




const Singleqn = (props) => {
    return (
        
            <tr>
                <td>{props.index}</td>
                <td>{props.que}</td>
                <td>{props.co}</td>
                <td>{props.mark}</td>
            </tr>
        
    )
}

export default Singleqn