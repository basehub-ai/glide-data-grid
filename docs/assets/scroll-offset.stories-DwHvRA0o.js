import{j as r,a as n}from"./marked.esm-0svxPciP.js";import"./index-BMVQvedj.js";import{D as i}from"./data-editor-all-r9eHYowy.js";import{B as p,D as c,P as m,u as d,d as f}from"./utils-JdbyhFX9.js";import{S as u}from"./story-utils-hPc0AMKE.js";import"./lodash-8jIGfDyZ.js";import"./iframe-vTKsg95g.js";import"../sb-preview/runtime.js";import"./image-window-loader-k34PkBh4.js";import"./throttle-7EuXLZa7.js";import"./_baseIteratee-WTHxv43n.js";import"./flatten-qRvRBp6y.js";import"./scrolling-data-grid-mqIoWTFp.js";import"./index-PWBWJyi_.js";import"./index.esm-Ejw8GwRl.js";import"./index-wocATsGp.js";const v={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>r(u,{children:r(p,{title:"Scroll Offset",description:n(c,{children:["The ",r(m,{children:"rowGrouping"})," prop can be used to group and even fold rows."]}),children:r(t,{})})})]},o=()=>{const{cols:t,getCellContent:l}=d(100);return r(i,{...f,height:"100%",rowMarkers:"both",scrollOffsetY:400,getCellContent:l,columns:t,rows:1e3})};var e,s,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  const rows = 1000;
  return <DataEditor {...defaultProps} height="100%" rowMarkers="both" scrollOffsetY={400} getCellContent={getCellContent} columns={cols}
  // verticalBorder={false}
  rows={rows} />;
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const T=["ScrollOffset"];export{o as ScrollOffset,T as __namedExportsOrder,v as default};
