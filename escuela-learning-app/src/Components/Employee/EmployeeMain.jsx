import React from 'react';

function EmployeeMain(props) {
    return (
        <div>
                 <table>
                   
                    <tr>
                        <td style={{border:"1px solid black"}}>{props.item.name}</td>
                        <td style={{border:"1px solid black"}}>{props.item.department}</td> 
                        <td style={{border:"1px solid black"}}>{props.item.email}</td>
                        <td style={{border:"1px solid black"}}>{props.item.address}</td>
                    </tr>
                </table> 
               
        </div>
    );
}

export default EmployeeMain;

// class EmployeeMain extends Component {
//     render() {
//         return (
//             <div>
              
//             </div>
//         );
//     }
// }

// export default EmployeeMain;
