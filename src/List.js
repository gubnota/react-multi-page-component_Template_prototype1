import React from 'react';
import './List.css';
class List extends React.Component{
constructor(p){
	super(p)
  const StatePrototype = {content:null, titles:null, images:null}
	const state = {...StatePrototype,...p};//mix props with the default state props
this.state = state;
}
click = (e) =>{
  this.props.click(e)
}
createMarkup(text){
  return {__html:this.state.content}
}
componentDidMount(){
  console.log('componentDidMount List')
    fetch('/data/list'+(this.props.list||0)+'.json')
      .then(response => response.json())
      .then((data)=>{
        // let titles=[]; let images=[];
        // data.forEach((item)=>{
        //   titles.push(item.title)
        //   images.push(item.image)
        // })
       this.setState({content: data})
        });
}
// UNSAFE_componentWillMount(){
//   console.log('UNSAFE_componentWillMount List')
//   this.setState({title: null, image: null, content: null});
// }
render() {
console.log(this.state)
let Items = []
if (this.state.content) {
for (let i =0; i < this.state.content.length; i++){
Items[i] = (<li className="item" key={i+1} onClick={this.click} page={i+1} view="Page">
            <h3 className="header" page={i+1} view="Page">{this.state.content[i].title}</h3>
            <div className="image" style={{backgroundImage:'linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.5)), url('+this.state.content[i].image+')'}}  page={i+1} view="Page" />
            </li>)
}
}
  return (
    <div className={'List '+ this.props.theme}>
      <ul className="items">
      {Items}
      </ul>
    </div>
  );
}

}


export default List;
