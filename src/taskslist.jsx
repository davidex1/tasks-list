import React, { Component } from 'react';
//Material UI Components
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';


class TasksList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            items: [] //array with added tasks
        };
        
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    
    // function for adding tasks
    addItem(e) {
       let itemsArr = this.state.items;
        if (this.inputItem.value !== "") {
            itemsArr.unshift({
                text: this.inputItem.value,
                key: Date.now()
            });
        
        this.setState({
            items: itemsArr
        }); 
        this.inputItem.value = "";
            
        }
        
        e.preventDefault();
    }
    
    //function for deleting tasks 
    deleteItem(key) {
        var filtered = this.state.items.filter(function(item) {
            return (item.key !== key);
        });
        this.setState({items: filtered});
    }
            
  render() {
      const styles = {
            bar: {
                backgroundColor: "#795548",
            },
            form: {
                paddingLeft: "2%",
                margin: "auto",
                border: "2.5px solid #9E9E9E",
                width: "150px",
                height: "30px",
                outline: "none"
            },
            button: {
                margin: 12,
            },
            paper: {
               height: 600,
               width: 350,
               margin: 'auto',
               textAlign: 'center',
               display: 'inline-block',
               backgroundColor: '#D7CCC8',
            },
    }
    return (
        <Paper style={styles.paper} zDepth={1}>
            <AppBar title="Tasks List" style={styles.bar} />
            <form onSubmit={this.addItem}>
                <input style={styles.input}
                    ref={(x) => this.inputItem = x}
                    placeholder="Write the task"
                    style={styles.form} maxlength="16"/>
                <RaisedButton type="submit" style={styles.button}>ADD</RaisedButton>
            </form>
            <ItemCard entries={this.state.items} delete={this.deleteItem} />
        </Paper>
    );
  }
}

class ItemCard extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.createTasks = this.createTasks.bind(this);
        this.delete = this.delete.bind(this);
    }
    
       delete(key) {
        this.props.delete(key);
    }
    // function for create card with task
    createTasks(item) {
        const style = {
        width: "200px",
        height: "50px",
        margin: "10px auto",
        backgroundColor: "#FFFFFF",
            overflow: "scroll",
    }
        const text = {
        position: "absolute",
        marginTop: "15px",
        marginLeft: "8px",
    }
        const xButton = {
            position: "absolute",
            marginTop: "12px",
            marginLeft: "70px",
            color: "#b83249"
        }
        
        return <Paper style={style} key={item.key}>
                    <div style={text}>- {item.text}</div>
                    <i onClick={() => this.delete(item.key)} style={xButton} class="material-icons">clear</i>
               </Paper>
    }
    
    render() {
        var taskEntries = this.props.entries;
        var listItems = taskEntries.map(this.createTasks);
        return(
        <div>{listItems}</div>
        )
    }
}
        
export default TasksList;
