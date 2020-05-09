import React from 'react';
import './Home.css';
//pt-page pt-page-1 pt-page-current
class Home extends React.Component{
constructor(p){
	super(p)
	const state = {...p};//mix props with the default state props
this.state = state;
this.myRef = React.createRef();
}
click = (e) =>{
  this.props.click(e)
}

componentDidMount(){
  console.log('componentDidMount Home')
}

render() {

  return (
    <div className={"theme-"+this.props.theme+" Home pt-page-rotateSlideIn"} id="Home">
        <img src={this.props.theme === 5 ? "image/logo-invert.svg" : "image/logo.svg"} className="Home-logo p" alt="logo" onClick={this.click} view="ChangeTheme" />
      <header className="Home-header">
      Home Controller
      </header>

<div className="grid-container">
 <div onClick={this.click} className="p" page="1" view="Page">Button 1</div>
 <div onClick={this.click} className="p" page="2" view="Page">Button 2</div>
 <div onClick={this.click} className="p" page="3" view="Page">Button 3</div>
 <div onClick={this.click} className="p" page="4" view="Page">Button 4</div>
</div>
    </div>
  );
}

}


export default Home;
