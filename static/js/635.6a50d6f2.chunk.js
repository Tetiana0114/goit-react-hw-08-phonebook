"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[635],{635:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var s=n(2791),a=n(9434),r=n(4270),c="Section_section__7wzCc",i="Section_title__yyHiq",l=n(184),o=function(e){var t=e.title,n=e.children;return(0,l.jsxs)("section",{className:c,children:[(0,l.jsx)("h1",{className:i,children:t}),n]})},u=n(9126),m=n(6355),d=n(5264),_="ContactForm_form__gYQXO",h="ContactForm_label__ZH+Sg",f="ContactForm_input__LuB-x",x="ContactForm_icon__eqcVy",p=n(3634),j=n(6916),b=function(e){return e.contacts.items},N=function(e){return e.contacts.isLoading},C=function(e){return e.contacts.error},v=(0,j.P1)([b,function(e){return e.filter.filter}],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.trim())}))})),y=n(8846),g=function(){var e=(0,a.v9)(b),t=(0,a.I0)();return(0,l.jsxs)("form",{onSubmit:function(n){n.preventDefault();var s=n.target,a=s.elements.name.value,r=s.elements.number.value;e.find((function(e){return e.name.toLowerCase().trim()===a.toLowerCase().trim()}))?d.Notify.info("".concat(a," is already in contacts !")):(t((0,p.uK)({name:a,number:r})),s.reset(),d.Notify.success("".concat(a," is added to the contacts !")))},className:_,children:[(0,l.jsxs)("label",{className:h,children:["Name",(0,l.jsx)(m.Bj$,{size:20,className:x}),":",(0,l.jsx)("input",{className:f,type:"text",name:"name",placeholder:"Enter name...",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,l.jsxs)("label",{className:h,children:["Number",(0,l.jsx)(u.N9W,{size:20,className:x}),":",(0,l.jsx)("input",{className:f,type:"tel",name:"number",placeholder:"Enter number...",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,l.jsx)(y.Z,{type:"submit",variant:"contained",children:"Add contact"})]})},F=n(3853),L="ContactList_list__K6+Fs",w="ContactList_list_item__DIRgv",z="ContactList_list_name__HO+yt",k="ContactList_list_number__bWeeo",q="ContactList_list_btn__ceZsx",A="ContactList_icon__DCwkp",S=function(){var e=(0,a.I0)(),t=(0,a.v9)(v),n=function(t){var n=t.target.id;e((0,p.GK)(n))};return(0,l.jsx)("ul",{className:L,children:t.map((function(e){return(0,l.jsxs)("li",{className:w,children:[(0,l.jsxs)("p",{className:z,children:[(0,l.jsx)(F.fzv,{size:20,className:A}),e.name,": ",(0,l.jsx)("span",{className:k,children:e.number})]}),(0,l.jsx)("button",{type:"button",onClick:n,className:q,id:e.id,children:"Delete"})]},e.id)}))})},I="SearchField_label__szR6n",Z="SearchField_input__qsFlV",D="SearchField_icon__7Yq+H",E=n(4808),H=function(){var e=(0,a.I0)();return(0,l.jsxs)("label",{className:I,children:[(0,l.jsx)(m.U41,{size:20,className:D})," Find contacts by the name:",(0,l.jsx)("input",{className:Z,type:"text",name:"filter",placeholder:"Enter name...",onChange:function(t){var n=t.target.value.toLowerCase();e((0,E.p)(n))}})]})},B=function(){var e=(0,a.I0)(),t=(0,a.v9)(N),n=(0,a.v9)(C);return(0,s.useEffect)((function(){e((0,p.yF)())}),[e]),(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",color:"#010101"},children:[(0,l.jsx)(r.q,{children:(0,l.jsx)("title",{children:"Contacts"})}),(0,l.jsx)(o,{title:"Add contacts:",children:(0,l.jsx)(g,{})}),(0,l.jsxs)(o,{title:"Your contacts:",children:[(0,l.jsx)(H,{}),t&&!n&&(0,l.jsx)("b",{children:"Request in progress..."}),(0,l.jsx)(S,{})]})]})}}}]);
//# sourceMappingURL=635.6a50d6f2.chunk.js.map