import{j as e,a as l,F as c}from"./marked.esm-0svxPciP.js";import"./index-BMVQvedj.js";import{D as u}from"./data-editor-all-r9eHYowy.js";import{B as m,D as p,P as f,M as C,u as D,d as V}from"./utils-JdbyhFX9.js";import{G as h}from"./image-window-loader-k34PkBh4.js";import{S as w}from"./story-utils-hPc0AMKE.js";import"./iframe-vTKsg95g.js";import"../sb-preview/runtime.js";import"./throttle-7EuXLZa7.js";import"./_baseIteratee-WTHxv43n.js";import"./flatten-qRvRBp6y.js";import"./scrolling-data-grid-mqIoWTFp.js";import"./index-PWBWJyi_.js";import"./index.esm-Ejw8GwRl.js";import"./index-wocATsGp.js";const L={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e(w,{children:e(m,{title:"Validate data",description:l(c,{children:[l(p,{children:["Data can be validated using the ",e(f,{children:"validateCell"})," callback"]}),e(C,{children:'This example only allows the word "Valid" inside text cells.'})]}),children:e(r,{})})})]},a=()=>{const{cols:r,getCellContent:s,setCellValue:d}=D(60,!1);return e(u,{...V,getCellContent:s,columns:r,rowMarkers:"both",onPaste:!0,onCellEdited:d,rows:100,validateCell:(g,t)=>t.kind!==h.Text||t.data==="Valid"?!0:t.data.toLowerCase()==="valid"?{...t,data:"Valid",selectionRange:[0,3]}:!1})};var o,n,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(60, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowMarkers={"both"} onPaste={true} onCellEdited={setCellValue} rows={100} validateCell={(_cell, newValue) => {
    if (newValue.kind !== GridCellKind.Text) return true;
    if (newValue.data === "Valid") return true;
    if (newValue.data.toLowerCase() === "valid") {
      return {
        ...newValue,
        data: "Valid",
        selectionRange: [0, 3]
      };
    }
    return false;
  }} />;
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const R=["ValidateData"];export{a as ValidateData,R as __namedExportsOrder,L as default};
