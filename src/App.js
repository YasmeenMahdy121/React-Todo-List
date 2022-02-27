import {Component, Fragment} from 'react';
import Header from './components/Header';
import AddItem from './components/AddItem';
import TodoItems from './components/TodoItems';
import './App.scss';

class App extends Component {
  state={
    items:[],
    theme: "default"
  }
  // change theme function
  changeTheme = theme=>{
    this.setState({theme})
  }
  // add item function
  addItem = item=>{
    let items=this.state.items;
    items.push(item);
    this.setState({items});
  }
  // delete item
  deleteItem = (id)=>{
    let items = this.state.items;
    items.map(item=>{
      if(item.id===id){
        item.delete='delete';
        this.setState({items});
      }
    });
    items = items.filter(item=>item.id!==id);
    setTimeout(()=>{
      this.setState({items});
    },1000)
  }
  // complete item
  completeItem = id=>{
    let items = this.state.items;
    items.map(item=>{
      if(item.id===id&&item.complete===false){
        item.complete=true;
      }
      else if(item.id===id&&item.complete===true){
        item.complete=false;
      }
    });
    this.setState({items});
  }
  render(){
    return (
      <Fragment>
        <div className={`App ${this.state.theme}`}>
          <div className='container'>
            <Header theme={this.state.theme} changeTheme={this.changeTheme}/>
            <AddItem theme={this.state.theme} addItem={this.addItem}/>
            <TodoItems theme={this.state.theme} items={this.state.items} deleteItem={this.deleteItem} completeItem={this.completeItem}/>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;