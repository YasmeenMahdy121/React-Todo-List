import React, {Fragment, Component } from 'react';
import './AddItem.scss';
class AddItem extends Component {
    state = { 
        task:'',
     } 
    //  on change input
    onChange = (e)=>{
        this.setState({task:e.target.value});
    }
    // click submit button
    addItem = (e)=>{
        e.preventDefault();
        if(this.state.task!==''){
            let item={
                id:Math.random()*10,
                task:this.state.task,
                complete:false
            }
            this.props.addItem(item);
            this.setState({task:''});
           }
    }
    render() { 
        return (
            <form className={this.props.theme} onSubmit={this.addItem}>
                <input type='text' onChange={this.onChange} placeholder='Add a task' value={this.state.task}/>
                <button>I Got This!</button>
            </form>
        );
    }
}
 
export default AddItem;