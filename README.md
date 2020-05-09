## It's a simple template for a multi-page mobile app or mobile website

Have a look a at the working example [prototype1.fenki.net](https://prototype1.fenki.net/).

It uses implementation of Controllers with a single callback function triggered on click event controlled by a parent Controller to change its state and state in all its children. To pass a callback function we use child's component props in the parent Controller:
```javascript
constructor(p){
// ...
this.click = this.click.bind(this);
// to use click={this.click} instead of arrow functions to bind this to the current object
}

//...
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
```
In the child controller:
```javascript
constructor(p){
	super (p)// passes props from the parent Controller
}
//...
click = (e) =>{
  this.props.click(e)
}
```
