import{j as e,a as i,F as f}from"./marked.esm-0svxPciP.js";import{r as a}from"./index-BMVQvedj.js";import{D as v}from"./data-editor-all-j2QqMKSJ.js";import{B as y,D as C,M as w,u as x,d as k}from"./utils-j124_xiv.js";import{S as R}from"./story-utils-hPc0AMKE.js";import"./iframe-aY2Tvwip.js";import"../sb-preview/runtime.js";import"./image-window-loader-70g6tesQ.js";import"./throttle-7EuXLZa7.js";import"./_baseIteratee-WTHxv43n.js";import"./flatten-qRvRBp6y.js";import"./scrolling-data-grid-ynXMc5YI.js";import"./index-PWBWJyi_.js";import"./index.esm-Ejw8GwRl.js";import"./index-wocATsGp.js";const F={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e(R,{children:e(y,{title:"Add and remove columns",description:i(f,{children:[e(C,{children:"You can add and remove columns at your disposal"}),e(w,{children:"Use the story's controls to change the number of columns"})]}),children:e(r,{})})})]},c=150,t=r=>{const{cols:p,getCellContent:u}=x(r.columnsCount),l=a.useRef(null),g=a.useRef(null),n=150,o="500px",s=32;return i("div",{style:{background:"red",overflow:"auto",height:o},ref:l,children:[e("style",{children:`
            .hackygrid {
                position: sticky;
                top: 0;
                height: ${o} !important;
            }
            .dvn-scroller {
                overflow: hidden !important;
            }
                .sizer, .sizer-clip, .sizer-clip > div {
                height: ${o} !important;
                max-height: ${o} !important;
                }
                `}),i("header",{ref:g,children:[e("h1",{contentEditable:!0,style:{margin:0},children:"This is the article title"}),e("div",{style:{margin:0},children:"something something nav"})]}),e("div",{style:{height:`${(c+1)*s+n}px`,paddingBottom:n},children:e(v,{...k,rowHeight:s,headerHeight:s,height:"500px",rowMarkers:"number",className:"hackygrid",getCellContent:u,experimental:{strict:!0},columns:p,rows:c,scrollerRef:l,scrollOffsetTop:55.5,scrollOffsetBottom:n})})]})};t.args={columnsCount:10};t.argTypes={columnsCount:{control:{type:"range",min:2,max:200}}};var m,h,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(p.columnsCount);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const offsetBottom = 150;
  const height = "500px";
  const rowHeight = 32;
  return <div style={{
    background: "red",
    overflow: "auto",
    height
  }} ref={scrollerRef}>
            <style>{\`
            .hackygrid {
                position: sticky;
                top: 0;
                height: \${height} !important;
            }
            .dvn-scroller {
                overflow: hidden !important;
            }
                .sizer, .sizer-clip, .sizer-clip > div {
                height: \${height} !important;
                max-height: \${height} !important;
                }
                \`}</style>
            <header ref={headerRef}>
                <h1 contentEditable style={{
        margin: 0
      }}>
                    This is the article title
                </h1>
                <div style={{
        margin: 0
      }}>something something nav</div>
            </header>
            <div style={{
      height: \`\${(rowCount + 1) * rowHeight + offsetBottom}px\`,
      paddingBottom: offsetBottom
    }}>
                <DataEditor {...defaultProps} rowHeight={rowHeight} headerHeight={rowHeight} height={"500px"} rowMarkers="number" className="hackygrid" getCellContent={getCellContent} experimental={{
        strict: true
      }} columns={cols} rows={rowCount} scrollerRef={scrollerRef} scrollOffsetTop={55.5} scrollOffsetBottom={offsetBottom} />
            </div>
        </div>;
}`,...(d=(h=t.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};const L=["AddColumns"];export{t as AddColumns,L as __namedExportsOrder,F as default};
