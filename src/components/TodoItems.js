import React, {Fragment, Component } from 'react';
import './TodoItems.scss';
class TodoItems extends Component {
    render() { 
        const items=this.props.items.map(item=>{
            return item.complete ? (
                <div className={`item complete ${item.delete}`} key={item.id}>
                    <div>
                    <p>{item.task}</p>
                    </div>
                    <div>
                        <button onClick={()=>this.props.completeItem(item.id)}><i className="fas fa-check"></i></button>
                        <button onClick={(e)=>this.props.deleteItem(item.id)}><i className="fas fa-trash"></i></button>
                    </div>
                </div>
            ) : (
                <div className={`item ${item.delete}`} key={item.id}>
                    <div>
                    <p>{item.task}</p>
                    </div>
                    <div>
                        <button onClick={()=>this.props.completeItem(item.id)}><i className="fas fa-check"></i></button>
                        <button onClick={(e)=>this.props.deleteItem(item.id)}><i className="fas fa-trash"></i></button>
                    </div>
                </div>
            )
        });
        return (
            <section className={this.props.theme}>
                {items}
            </section>
        );
    }
}
 
export default TodoItems;