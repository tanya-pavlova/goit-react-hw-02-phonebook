(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),i=n.n(r),o=n(13),s=n(4),l=n(5),u=n(7),d=n(6),b=n(8),m=n.n(b),f=n(21),j=n(3),h=n.n(j),p=n(0),_=function(t){var e=t.contact,n=t.ondeleteContact;return Object(p.jsx)("ul",{className:h.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsxs)("li",{className:h.a.item,children:[Object(p.jsxs)("p",{className:h.a.subtitle,children:[a,":"]}),Object(p.jsx)("p",{className:h.a.subtitle,children:c}),Object(p.jsx)("button",{className:h.a.button,onClick:function(){return n(e)},type:"button",children:"Delete"})]},e)}))})},O=n(12),C=n(2),x=n.n(C),v=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onHandleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(O.a)({},a,c))},t.onHandleSubmit=function(e){e.preventDefault(),t.props.addContact(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(p.jsxs)("form",{className:x.a.form,onSubmit:this.onHandleSubmit,children:[Object(p.jsxs)("label",{className:x.a.label,children:["Name",Object(p.jsx)("input",{type:"text",name:"name",value:e,className:x.a.input,onChange:this.onHandleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(p.jsxs)("label",{className:x.a.label,children:["Number",Object(p.jsx)("input",{type:"tel",name:"number",value:n,className:x.a.input,onChange:this.onHandleChange,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(p.jsx)("button",{className:x.a.addbutton,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),g=n(9),y=n.n(g),N=function(t){var e=t.filter,n=t.onFilterHandleChange;return Object(p.jsx)("div",{className:y.a.container,children:Object(p.jsxs)("label",{className:y.a.label,children:["Find contacts by name",Object(p.jsx)("input",{type:"text",name:"filter",value:e,className:y.a.input,onChange:function(t){n(t.target.value)}})]})})},S=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c=t.state.contacts,r={id:Object(f.a)(),name:n,number:a};c.find((function(t){return t.name===n}))?alert("".concat(n," is already exist!! Try one more time, please!")):c.find((function(t){return t.number===a}))?alert("".concat(a," is already exist!! Try one more time, please!")):t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(o.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.onFilterHandleChange=function(e){t.setState({filter:e})},t}return Object(l.a)(n,[{key:"filteredContacts",value:function(){var t=this.state,e=t.contacts,n=t.filter.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))}},{key:"render",value:function(){var t=this.filteredContacts(),e=this.state.filter;return Object(p.jsxs)("div",{className:m.a.container,children:[Object(p.jsx)("h1",{className:m.a.title,children:"Phonebook"}),Object(p.jsx)(v,{addContact:this.addContact}),Object(p.jsx)("h2",{className:m.a.title,children:"Contacts"}),Object(p.jsx)(N,{filter:e,onFilterHandleChange:this.onFilterHandleChange}),Object(p.jsx)(_,{contact:t,ondeleteContact:this.deleteContact})]})}}]),n}(a.Component),H=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root")),H()},2:function(t,e,n){t.exports={form:"form_form__2SyYw",label:"form_label__1rO_K",input:"form_input__yi5-d",addbutton:"form_addbutton__3uELl"}},3:function(t,e,n){t.exports={list:"contacts_list__2jeYv",item:"contacts_item__2EZbY",subtitle:"contacts_subtitle__1HXyz",button:"contacts_button__2wteN"}},8:function(t,e,n){t.exports={title:"app_title__29_R3"}},9:function(t,e,n){t.exports={container:"filter_container__1boph",label:"filter_label__Lra5m",input:"filter_input__1Mq4Z"}}},[[19,1,2]]]);
//# sourceMappingURL=main.c4d9c677.chunk.js.map