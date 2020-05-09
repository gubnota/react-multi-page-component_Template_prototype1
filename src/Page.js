import React from 'react';
import './Page.css';
//pt-page pt-page-1 pt-page-current
class Page extends React.Component{
constructor(p){
	super(p)
	const state = {...p};//mix props with the default state props
this.state = state;
}
click = (e) =>{
  this.props.click(e)
}
createMarkup(text){
  return {__html:this.state.content}
}
componentDidMount(){
  console.log('componentDidMount page',this.state)
    fetch('/data/page'+this.props.page+'.json')
      .then(response => response.json())
      .then(data => this.setState({ title: data.title, image: data.image, content: data.content}));
}
UNSAFE_componentWillMount(){
  this.setState({title: null, image: null, content: null});
}
render() {
// console.log(this.state.);

  return (
    <div className={'Page '+ this.props.theme + ' pt-page-rotateSlideIn'}>
      <header className={this.props.theme+" Page-header"}>
      {this.state.title ? <div style={{backgroundImage:'url('+this.state.image+')'}} className="Page-logo" /> : 'Page is loading ...' }
      </header>
      <div className="text" dangerouslySetInnerHTML={this.createMarkup(this.state.text)} />
    </div>
  );
}

}


export default Page;
