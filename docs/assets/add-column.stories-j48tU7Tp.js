import{j as e,a as l,F as g}from"./marked.esm-0svxPciP.js";import{r as o}from"./index-BMVQvedj.js";import{D as v}from"./data-editor-all-r9eHYowy.js";import{B as y,D as C,M as R,u as T,d as k}from"./utils-JdbyhFX9.js";import{S as w}from"./story-utils-hPc0AMKE.js";import"./iframe-vTKsg95g.js";import"../sb-preview/runtime.js";import"./image-window-loader-k34PkBh4.js";import"./throttle-7EuXLZa7.js";import"./_baseIteratee-WTHxv43n.js";import"./flatten-qRvRBp6y.js";import"./scrolling-data-grid-mqIoWTFp.js";import"./index-PWBWJyi_.js";import"./index.esm-Ejw8GwRl.js";import"./index-wocATsGp.js";const L={title:"Glide-Data-Grid/DataEditor Demos",decorators:[n=>e(w,{children:e(y,{title:"Add and remove columns",description:l(g,{children:[e(C,{children:"You can add and remove columns at your disposal"}),e(R,{children:"Use the story's controls to change the number of columns"})]}),children:e(n,{})})})]},c=1e4,t=n=>{const{cols:f,getCellContent:h}=T(n.columnsCount),i=o.useRef(null),[p,a]=o.useState(0),s=o.useRef(null);return o.useEffect(()=>{var r;a(((r=s.current)==null?void 0:r.offsetHeight)??0)},[]),l("div",{style:{background:"red",overflow:"auto",height:"80vh"},ref:i,children:[e("style",{children:`
            .hackygrid {
                position: sticky;
                top: 0;
            }
            .dvn-scroller {
                overflow: hidden !important;
            }
                `}),l("header",{ref:s,children:[e("h1",{contentEditable:!0,style:{margin:0},onInput:()=>{var r;a(((r=s.current)==null?void 0:r.offsetHeight)??0)},children:"This is the article title"}),e("div",{style:{margin:0},children:"something something nav"})]}),e("div",{style:{height:`${(c+1)*33.5}px`},children:e(v,{...k,height:"80vh",rowMarkers:"number",className:"hackygrid",getCellContent:h,experimental:{strict:!0},columns:f,rows:c,scrollerRef:i,scrollOffsetTop:p})})]})};t.args={columnsCount:10};t.argTypes={columnsCount:{control:{type:"range",min:2,max:200}}};var d,m,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(p.columnsCount);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [scrollOffsetTop, setScrollOffsetTop] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    setScrollOffsetTop(headerRef.current?.offsetHeight ?? 0);
  }, []);
  return <div style={{
    background: "red",
    overflow: "auto",
    height: "80vh"
  }} ref={scrollerRef}>
            <style>{\`
            .hackygrid {
                position: sticky;
                top: 0;
            }
            .dvn-scroller {
                overflow: hidden !important;
            }
                \`}</style>
            <header ref={headerRef}>
                <h1 contentEditable style={{
        margin: 0
      }} onInput={() => {
        setScrollOffsetTop(headerRef.current?.offsetHeight ?? 0);
      }}>
                    This is the article title
                </h1>
                <div style={{
        margin: 0
      }}>something something nav</div>
            </header>
            <div style={{
      height: \`\${(rowCount + 1) * 33.5}px\`
    }}>
                <DataEditor {...defaultProps} height={"80vh"} rowMarkers="number" className="hackygrid" getCellContent={getCellContent} experimental={{
        strict: true
      }} columns={cols} rows={rowCount} scrollerRef={scrollerRef} scrollOffsetTop={scrollOffsetTop} />
            </div>
        </div>;
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const N=["AddColumns"];export{t as AddColumns,N as __namedExportsOrder,L as default};
