import{j as r,a as m}from"./marked.esm-0svxPciP.js";import"./index-BMVQvedj.js";import{D as i}from"./data-editor-all-r9eHYowy.js";import{B as p,D as c,P as u,u as d,d as f}from"./utils-JdbyhFX9.js";import{S as C}from"./story-utils-hPc0AMKE.js";import"./iframe-vTKsg95g.js";import"../sb-preview/runtime.js";import"./image-window-loader-k34PkBh4.js";import"./throttle-7EuXLZa7.js";import"./_baseIteratee-WTHxv43n.js";import"./flatten-qRvRBp6y.js";import"./scrolling-data-grid-mqIoWTFp.js";import"./index-PWBWJyi_.js";import"./index.esm-Ejw8GwRl.js";import"./index-wocATsGp.js";const F={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>r(C,{children:r(p,{title:"Freeze columns",description:m(c,{children:["Columns at the start of your grid can be frozen in place by settings"," ",r(u,{children:"freezeColumns"})," to a number greater than 0."]}),children:r(o,{})})})]},e=o=>{const{cols:n,getCellContent:l}=d(100);return r(i,{...f,rowMarkers:"both",freezeColumns:o.freezeColumns,getCellContent:l,columns:n,verticalBorder:!1,rows:1e3})};e.argTypes={freezeColumns:{control:{type:"range",min:0,max:10}}};e.args={freezeColumns:1};var t,s,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`(p: {
  freezeColumns: number;
}) => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  return <DataEditor {...defaultProps} rowMarkers="both" freezeColumns={p.freezeColumns} getCellContent={getCellContent} columns={cols} verticalBorder={false} rows={1000} />;
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const S=["FreezeColumns"];export{e as FreezeColumns,S as __namedExportsOrder,F as default};
