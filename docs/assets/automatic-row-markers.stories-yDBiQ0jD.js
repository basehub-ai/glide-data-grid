import{j as e,a as t,F as m}from"./marked.esm-0svxPciP.js";import"./index-BMVQvedj.js";import{D as p}from"./data-editor-all-j2QqMKSJ.js";import{u as d,B as u,D as k,P as h,M as w,K as a,d as M}from"./utils-j124_xiv.js";import{S as f}from"./story-utils-hPc0AMKE.js";import"./iframe-aY2Tvwip.js";import"../sb-preview/runtime.js";import"./image-window-loader-70g6tesQ.js";import"./throttle-7EuXLZa7.js";import"./_baseIteratee-WTHxv43n.js";import"./flatten-qRvRBp6y.js";import"./scrolling-data-grid-ynXMc5YI.js";import"./index-PWBWJyi_.js";import"./index.esm-Ejw8GwRl.js";import"./index-wocATsGp.js";const W={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e(f,{children:e(o,{})})]},r=()=>{const{cols:o,getCellContent:c}=d(6),l=e(p,{...M,rowMarkers:"checkbox-visible",getCellContent:c,columns:o,rows:1e3});return e(u,{title:"Automatic Row Markers",description:t(m,{children:[t(k,{children:["You can enable row markers with rich selection behavior using the"," ",e(h,{children:"rowMarkers"})," prop."]}),t(w,{children:["Use ",e(a,{children:"⇧"})," + click to make range selections, and ",e(a,{children:"Ctrl"})," (",e(a,{children:"⌘"})," on Mac) + click to add/remove individual rows."]})]}),children:l})};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  const dataEditor = <DataEditor {...defaultProps} rowMarkers={"checkbox-visible"} getCellContent={getCellContent} columns={cols} rows={1000} />;
  return <BeautifulWrapper title="Automatic Row Markers" description={<>
                    <Description>
                        You can enable row markers with rich selection behavior using the{" "}
                        <PropName>rowMarkers</PropName> prop.
                    </Description>
                    <MoreInfo>
                        Use <KeyName>⇧</KeyName> + click to make range selections, and <KeyName>Ctrl</KeyName> (
                        <KeyName>⌘</KeyName> on Mac) + click to add/remove individual rows.
                    </MoreInfo>
                </>}>
            {dataEditor}
        </BeautifulWrapper>;
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const j=["AutomaticRowMarkers"];export{r as AutomaticRowMarkers,j as __namedExportsOrder,W as default};
