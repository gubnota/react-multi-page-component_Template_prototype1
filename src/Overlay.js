import React from 'react';
import './Overlay.css';
class Overlay extends React.Component{
constructor(p){
	super(p)
  const StatePrototype = {content:null, titles:null, images:null}
	const state = {...StatePrototype,...p};//mix props with the default state props
this.state = state;
}
click = (e) =>{
  this.props.click(e)
}
componentDidMount(){
  setTimeout((e)=>{
    console.log(this);
    this.setState({message:null})
  },1000)
  console.log('componentDidMount Overlay',this.state)
    // fetch('/data/overlay'+(this.props.Overlay||0)+'.json')
    //   .then(response => response.json())
    //   .then((data)=>{
    //    this.setState({content: data})
    //     });
}
// UNSAFE_componentWillMount(){
//   this.setState({content: null});
// }
render() {
let msg = 'Empty message';//this.state.content.msg||
  return (
    <div className={'overlay pt-page-flipOutRight pt-page-delay700 '+ this.props.theme}>
      <div className="message">
      <p>Empty message</p>
      </div>
    </div>
  );
}

}


export default Overlay;
