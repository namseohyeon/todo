import React, {Component} from 'react';

class TOC extends Component {
  shouldComponentUpdate(newProps, newState){
    console.log('===>TOC rander shouldComponentUpdate'
    ,newProps.data
    ,this.props.data
    );
  if(this.props.data === newProps.data){
    return false;
  }
  return true;
}
    render(){
        var list = [];
        var data = this.props.data
        var i =0;
        while(i<data.length){
            list.push(
            <div key={data[i].id}>
              <a 
                href = {"/content/"+data[i].id}
                data-id = {data[i].id}
                onClick ={function(e){
                  e.preventDefault();
                  this.props.onChangePage(e.target.dataset.id);
                }.bind(this)}
                >{data[i].title}</a>
            </div>);
            i = i+1;
        }
      return (
        <div>
          {list}
        </div>
      );
    }
  }

  export default TOC;