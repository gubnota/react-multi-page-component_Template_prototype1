(function(window) {
if (window.top !== undefined && window !== window.top) {return;}
  let app = (function() {
      const id = Math.ceil(Math.random() * 1000); //unique id
      let lang = 'en';
      // let url = "";
      let keys = ['Reload','Answer','Top','Prev','Next','Menu'];
      let dic =
      {
      	'en':{"Reload":'Reload',
        "Answer":'Answer',
        "Top":'Top',
        "Prev":'Prev',
        "Next":'Next',
        "Menu":'Menu'}
      };
      // let cards = [];
      function add(className, classFunction){//extend Library
        app[className] = classFunction;
      }
      function del(className){//remove property
        delete app[className];
      }
  let dom = ((window, document)=> {
          var param = {'window':window,'document':document};
      return param;
  })(window,document);


          let param = {
            '$':{
              'id':id,
              'lang':lang,
              'keys':keys,
              'dic':dic
            },
          'add':add,
          "del":del,
          dom:dom};

      return param;
  })();

  window.app = app;
  return app;
})(this);

