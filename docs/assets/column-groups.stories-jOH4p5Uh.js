import{j as r,a as p}from"./marked.esm-0svxPciP.js";import"./index-BMVQvedj.js";import{D as l}from"./data-editor-all-j2QqMKSJ.js";import{B as u,D as d,P as c,u as g,d as C}from"./utils-j124_xiv.js";import{a as G}from"./image-window-loader-70g6tesQ.js";import{S as D}from"./story-utils-hPc0AMKE.js";import"./iframe-aY2Tvwip.js";import"../sb-preview/runtime.js";import"./throttle-7EuXLZa7.js";import"./_baseIteratee-WTHxv43n.js";import"./flatten-qRvRBp6y.js";import"./scrolling-data-grid-ynXMc5YI.js";import"./index-PWBWJyi_.js";import"./index.esm-Ejw8GwRl.js";import"./index-wocATsGp.js";const B={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>r(D,{children:r(u,{title:"Column Grouping",description:p(d,{children:["Columns in the data grid may be grouped by setting their ",r(c,{children:"group"})," ","property."]}),children:r(t,{})})})]},o=()=>{const{cols:t,getCellContent:i}=g(20,!0,!0);return r(l,{...C,getCellContent:i,onGroupHeaderRenamed:(e,m)=>window.alert(`Please rename group ${e} to ${m}`),columns:t,rows:1e3,getGroupDetails:e=>({name:e,icon:e===""?void 0:G.HeaderCode}),rowMarkers:"both"})};var a,n,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(20, true, true);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} onGroupHeaderRenamed={(x, y) => window.alert(\`Please rename group \${x} to \${y}\`)} columns={cols} rows={1000} getGroupDetails={g => ({
    name: g,
    icon: g === "" ? undefined : GridColumnIcon.HeaderCode
  })} rowMarkers="both" />;
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const I=["ColumnGroups"];export{o as ColumnGroups,I as __namedExportsOrder,B as default};
