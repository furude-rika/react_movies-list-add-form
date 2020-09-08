(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(6),m=a.n(l),r=(a(15),a(9)),s=a(1),o=a(2),c=a(4),d=a(3),h=(a(16),a(17),a(18),function(e){var t=e.title,a=e.description,i=e.imgUrl,l=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:i,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},a,n.a.createElement("br",null),n.a.createElement("a",{href:l},"IMDB"))))});h.defaultProps={description:""};var p=function(e){var t=e.movies;return n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(h,Object.assign({key:e.imdbId},e))})))};p.defaultProps={movies:[]};var u=a(7),g=(a(19),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},e.handleChange=function(t){var a=t.target,i=a.name,n=a.value;e.setState(Object(u.a)({},i,n))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.onAdd,a=this.state,i=a.title,l=a.description,m=a.imgUrl,r=a.imdbUrl,s=a.imdbId;return n.a.createElement("form",{className:"form",onSubmit:function(a){a.preventDefault(),Object.values(e.state).map((function(e){return e.trim()})).includes("")||(t(e.state),e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}))}},n.a.createElement("label",{className:"form__label",htmlFor:"title"},"Title:",n.a.createElement("input",{type:"text",name:"title",id:"title",value:i,className:"form__input",placeholder:"Title",onChange:this.handleChange})),n.a.createElement("label",{className:"form__label",htmlFor:"imgUrl"},"Image link:",n.a.createElement("input",{type:"text",name:"imgUrl",id:"imgUrl",value:m,className:"form__input",placeholder:"Image link",onChange:this.handleChange})),n.a.createElement("label",{className:"form__label",htmlFor:"imdbUrl"},"Imdb link:",n.a.createElement("input",{type:"text",name:"imdbUrl",id:"imdbUrl",value:r,className:"form__input",placeholder:"Imdb link",onChange:this.handleChange})),n.a.createElement("label",{className:"form__label",htmlFor:"imdbId"},"Imdb Id:",n.a.createElement("input",{type:"text",name:"imdbId",id:"imdbId",value:s,className:"form__input",placeholder:"Imdb Id",onChange:this.handleChange})),n.a.createElement("label",{className:"form__label",htmlFor:"description"},"Description:",n.a.createElement("textarea",{name:"description",id:"description",value:l,className:"form__textarea",placeholder:"Description",onChange:this.handleChange})),n.a.createElement("button",{type:"submit",className:"form__button"},"Add Movie"))}}]),a}(i.Component)),b=a(8),f=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={movies:b},e.addMovie=function(t){e.setState((function(e){return{movies:[t].concat(Object(r.a)(e.movies))}}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(p,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement("h2",{className:"sidebar__title"},"Add a new movie"),n.a.createElement(g,{onAdd:this.addMovie})))}}]),a}(i.Component);m.a.render(n.a.createElement(f,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.d7333131.chunk.js.map