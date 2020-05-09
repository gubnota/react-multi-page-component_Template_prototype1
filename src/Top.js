import React from 'react';
import './Top.css';
//pt-page pt-page-1 pt-page-current
class Top extends React.Component{
constructor(p){
	super(p)
	this.TouchHandler = this.TouchHandler.bind(this);
}
TouchHandler(){
	console.log(this);
}
click = (e) =>{
	this.props.click(e)
}
render() {
  return (

<div className={"theme-"+this.props.theme+" top"}>
 <div className="p" onClick={this.click} view="Home" page="0">&lt;</div>
 <div className="p" onClick={this.click} view="List" page="0">pages</div>
 <div className="p" onClick={this.click} view="Overlay" page="0">close</div>
</div>
  );
}

}


export default Top;
