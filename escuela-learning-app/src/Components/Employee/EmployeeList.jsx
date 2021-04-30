import React, { Component } from 'react';
import employees from './Employees.js';
import EmployeeMain from './EmployeeMain.jsx';

class EmployeeList extends Component {
   
    constructor(props){
        super(props)
        
        this.state={
            employlist:employees
        }
    // this.handleClick=this.handleClick.bind(this)
    }
    
    // handleClick(){
    // }
    render() {
        const employ = this.state.employlist.map(item => <EmployeeMain key={item.id} item={item}/>)
        return (
            <div>
                <table style={{border:"1px solid black"}}>
                    <tr style={{border:"1px solid black"}}>
                        <th style={{border:"1px solid black"}}>Name</th>
                        <th style={{border:"1px solid black"}}>Department</th> 
                        <th style={{border:"1px solid black"}}>EMail</th>
                        <th style={{border:"1px solid black"}}>Address</th>
                    </tr>
                    <tr style={{border:"1px solid black"}}>
                       {employ}
                    </tr>
                </table>
            </div>
        );
    }
}

export default EmployeeList;