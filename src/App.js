import {Component, Fragment} from 'react';
import { read_cookie, bake_cookie } from 'sfcookies';
import Header from './components/Header';
import AddItem from './components/AddItem';
import TodoItems from './components/TodoItems';
import './App.scss';

class App extends Component {
  state={
    items:[],
    theme: "default"
  }

  componentDidMount(){
    const todoList = read_cookie('todoList')
    if(todoList.theme){
      this.setState({...todoList})
    }
    else{
      bake_cookie('todoList',this.state)
    }

  }
  // change theme function
  changeTheme = theme=>{
    this.setState({theme})
    // store changed theme
    let todoList = read_cookie('todoList')
    todoList.theme = theme
    bake_cookie('todoList',todoList)
  }
  // add item function
  addItem = item=>{
    let items=this.state.items;
    items.push(item);
    this.setState({items});
    // store changed items
    let todoList = read_cookie('todoList')
    todoList.items = items
    bake_cookie('todoList',todoList)
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
    // store changed items
    let todoList = read_cookie('todoList')
    todoList.items = items
    bake_cookie('todoList',todoList)
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
    // store changed items
    let todoList = read_cookie('todoList')
    todoList.items = items
    bake_cookie('todoList',todoList)
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