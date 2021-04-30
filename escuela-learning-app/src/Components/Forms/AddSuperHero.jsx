import React, { Component } from 'react';

class AddSuperHero extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            image:"",
            abilities:"",
            color:"",
            canFly:false,
            canSwim:false,
            superStrength:false,
            techSavvy:true,
            gender:""

        }
    }
    handleChange=(event) =>{
       
            const{name,value,type,checked}=event.target
            type==="checkbox" ? this.setState({[name]:checked}):this.setState({[name]:value})
        
    }
    handleSubmit=(event) =>{
event.preventDefaut()
    }
        render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="name" value={this.state.name} name="name" onChange={this.handleChange}/>
                <br/>
                <input type="text" placeholder="image" value={this.state.image} name="image"onChange={this.handleChange}/>
                <br/>
                <textarea type="text" placeholder="abilities" value={this.state.abilities} name="abilities"onChange={this.handleChange}/>
                <br/>
                <select  value={this.state.color} name="color"onChange={this.handleChange} >
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="black">Black</option>
                </select>
                <br/>
                <input type="checkbox" checked={this.state.canFly} name="canFly" onChange={this.handleChange}/>
                <input type="checkbox" checked={this.state.canSwim} name="canSwim" onChange={this.handleChange}/>
                <input type="checkbox" checked={this.state.superStrength} name="superStrength" onChange={this.handleChange}/>
                <input type="checkbox" checked={this.state.techSavvy} name="techSavvy" onChange={this.handleChange}/>
                <input type="radio" value="male" name="gender" checked={this.state.gender==="male"} onChange={this.handleChange}/>
                <input type="radio" value="female" name="gender" checked={this.state.gender==="female"} onChange={this.handleChange}/>
                <button>Submit</button>
                
                </form>
            </div>
        );
    }
}

export default AddSuperHero;