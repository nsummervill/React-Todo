var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var todoText = this.refs.todoText.value;
      if(todoText.length > 0){
      this.refs.todoText.value = '';
      this.props.onNewTodo(todoText);
    } else{
      this.refs.todoText.focus();
    }

  },
  render: function(){
    return(
      <div className="container_footer">
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="todoText" placeholder="Add new todo"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
