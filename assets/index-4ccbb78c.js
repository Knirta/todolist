import{y as o,j as e,P as d,A as p,R as u}from"./index-596cfc72.js";import{T as a}from"./TextField-e4b93e30.js";const x=()=>{const n=o(),r=s=>{s.preventDefault();const t=s.currentTarget,m=t.elements.namedItem("name").value,l=t.elements.namedItem("email").value,i=t.elements.namedItem("password").value;n(u({name:m,email:l,password:i})),t.reset()};return e.jsx(d,{elevation:7,sx:{m:"125px auto 55px",width:{md:"75%",lg:"65%"},p:{xs:"10px",sm:"55px"}},children:e.jsxs("form",{autoComplete:"off",onSubmit:r,children:[e.jsx("div",{children:e.jsx(a,{label:"Name",name:"name",fullWidth:!0,margin:"normal"})}),e.jsx("div",{children:e.jsx(a,{label:"Email",name:"email",fullWidth:!0,margin:"normal"})}),e.jsx("div",{children:e.jsx(a,{label:"Password",name:"password",type:"password",fullWidth:!0,margin:"normal"})}),e.jsx(p,{variant:"contained",type:"submit",sx:{my:"25px"},fullWidth:!0,children:"Sign up"})]})})},f=x;export{f as default};