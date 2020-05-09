import React from 'react'
import './App.css'
import Top from './Top'
import Home from './Home'
import Bottom from './Bottom'
import Page from './Page'
import List from './List'
import Overlay from './Overlay'
import app from './fenki/app'
import './page-transitions-animations.css'

//pt-page pt-page-1 pt-page-current
class App extends React.Component{
constructor(p){
	super(p)
	const defaultState = {
		page: "Home",
		view: null,
		prev: null,
		theme:5,
		app:app,
		message:null
	}

	let state = {...defaultState, ...p};//mix state with the default state props
	this.state = state;
	this.click = this.click.bind(this);
}
click(e){
let view = e.target.getAttribute('view'), page = e.target.getAttribute('page'), theme = this.state.theme, message = null; 
 if (view === 'ChangeTheme') {
 	const prevTheme = parseInt(this.state.theme)
 	let newTheme;
do{
 	newTheme = Math.ceil((Math.random()*6));
}
 	while(prevTheme === newTheme)
 view = 'Home'
 theme = newTheme
 }

 if (view === 'Overlay'){
	message = "Empty message"
 }
  this.setState({last:e.target,page:page,view:view,theme:theme,message:message,prev:{page:page,view:view}});
}
componentDidMount(){
	console.log('componentDidMount',this.state)
}
// UNSAFE_componentWillMount(){
// 	console.log('UNSAFE_componentWillMount',this.state)
// }
render() {
let main_page,message = null;
if (this.state.view === 'List') {
main_page = <List click={this.click} theme={this.state.theme} view={this.state.view} page={this.state.page} />
}
else if (this.state.view === 'Page') {
main_page = <Page click={this.click} theme={this.state.theme} view={this.state.view} page={this.state.page} />
}
else {//(!this.state.view || this.state.view === 'Home')
	main_page = <Home click={this.click} theme={this.state.theme} />
}

if (this.state.message !== null) {
message = <Overlay click={this.click} theme={this.state.theme} view={this.state.view} page={this.state.page} message={this.state.message} />
}
  return (
    <div className={"App theme-"+this.state.theme+""}  theme={this.state.theme} >
    {message}
    < Top click={this.click} theme={this.state.theme}  />
    {main_page}
    < Bottom click={this.click}  theme={this.state.theme} />
    </div>
  );
}

}


export default App;
