import{j as o,a as i,F as D}from"./marked.esm-0svxPciP.js";import{R as t}from"./index-BMVQvedj.js";import{D as H}from"./data-editor-all-r9eHYowy.js";import{B as M,D as b,P as k,M as S,u as w,d as v}from"./utils-JdbyhFX9.js";import{C as x}from"./image-window-loader-k34PkBh4.js";import{S as A}from"./story-utils-hPc0AMKE.js";import"./iframe-vTKsg95g.js";import"../sb-preview/runtime.js";import"./throttle-7EuXLZa7.js";import"./_baseIteratee-WTHxv43n.js";import"./flatten-qRvRBp6y.js";import"./scrolling-data-grid-mqIoWTFp.js";import"./index-PWBWJyi_.js";import"./index.esm-Ejw8GwRl.js";import"./index-wocATsGp.js";const L={title:"Glide-Data-Grid/DataEditor Demos",decorators:[e=>o(A,{children:o(M,{title:"Group collapse",description:i(D,{children:[i(b,{children:["Through clever usage of ",o(k,{children:"onGroupHeaderClicked"})," you can implement group collapsing. This is a very basic version however it is possible to go much further."]}),o(S,{children:"Cells under a certain size will not attempt to render to save some frames."})]}),children:o(e,{})})})]};function E(e){const[s,n]=t.useState([]),C=t.useCallback((r,l)=>{const u=e[r].group??"";n(p=>p.includes(u)?p.filter(G=>G!==u):[...p,u]),l.preventDefault()},[e]),[g,h]=t.useState(x.empty()),f=t.useCallback((r,l)=>{l!=="group"&&h(r)},[]);return{columns:t.useMemo(()=>e.map(r=>s.includes(r.group??"")?{...r,width:8,hasMenu:!0}:{...r,hasMenu:!0}),[s,e]),onGroupHeaderClicked:C,selectedColumns:g,onSelectedColumnsChange:f}}const a=()=>{const{cols:e,getCellContent:s}=w(100,!0,!0),n=E(e);return o(H,{...v,...n,getCellContent:s,groupHeaderHeight:24,rows:1e3,rowMarkers:"both"})};var m,c,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100, true, true);
  const groupHeaderArgs = useCollapsableColumnGroups(cols);
  return <DataEditor {...defaultProps} {...groupHeaderArgs} getCellContent={getCellContent} groupHeaderHeight={24} rows={1000} rowMarkers="both" />;
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const Q=["ColumnGroupCollapse"];export{a as ColumnGroupCollapse,Q as __namedExportsOrder,L as default};
