import{j as e}from"./marked.esm-0svxPciP.js";import"./index-BMVQvedj.js";import{D as n}from"./data-editor-all-r9eHYowy.js";import{B as d,D as m,u as p,d as c}from"./utils-JdbyhFX9.js";import{S as u}from"./story-utils-hPc0AMKE.js";import"./iframe-vTKsg95g.js";import"../sb-preview/runtime.js";import"./image-window-loader-k34PkBh4.js";import"./throttle-7EuXLZa7.js";import"./_baseIteratee-WTHxv43n.js";import"./flatten-qRvRBp6y.js";import"./scrolling-data-grid-mqIoWTFp.js";import"./index-PWBWJyi_.js";import"./index.esm-Ejw8GwRl.js";import"./index-wocATsGp.js";const v={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e(u,{children:e(d,{title:"Editable Grid",description:e(m,{children:"Data grid supports overlay editors for changing values. There are bespoke editors for numbers, strings, images, booleans, markdown, and uri."}),children:e(t,{})})})]},r=()=>{const{cols:t,getCellContent:l,setCellValue:i}=p(6,!1);return e(n,{...c,getCellContent:l,columns:t,rows:20,onCellEdited:i})};var o,a,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(6, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={20} onCellEdited={setCellValue} />;
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const B=["SmallEditableGrid"];export{r as SmallEditableGrid,B as __namedExportsOrder,v as default};
