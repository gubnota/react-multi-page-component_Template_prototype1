import React from 'react';
import './Bottom.css';
//pt-page pt-page-1 pt-page-current
class Bottom extends React.Component{


click = (e)=> {
this.props.click(e)
}

render() {
  return (
<div className={"theme-"+this.props.theme+" bottom"} onClick={this.click}>
 <div className="p" onClick={this.click} view="Home" page="2">Home</div>
 <div className="p" onClick={this.click} view="List" page="0">Pages</div>
 <div className="p" onClick={this.click} view="Overlay" page="0">My</div>
</div>
  );
}

}


export default Bottom;
