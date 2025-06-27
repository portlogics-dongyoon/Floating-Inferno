import{j as u}from"./__bundle-8b4f432b-C9OXY8E-.js";import{e as m}from"./iframe-Br5yGide.js";import{C as o}from"./jspdf.es.min-CL1hZAQy.js";import"./index-bVxR5iTN.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,f={title:"UI/Combobox",component:o,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{onSelect:v(),value:void 0,items:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"}]},render:c=>{const[r,a]=m.useState(void 0);return u.jsx(o,{items:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"}],value:r,onSelect:s=>{a(s)},onClear:()=>a(void 0)})}};var n,l,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    onSelect: fn(),
    value: undefined,
    items: [{
      value: "1",
      label: "1"
    }, {
      value: "2",
      label: "2"
    }, {
      value: "3",
      label: "3"
    }]
  },
  render: _args => {
    const [value, setValue] = React.useState<string | undefined>(undefined);
    return <Combobox items={[{
      value: "1",
      label: "1"
    }, {
      value: "2",
      label: "2"
    }, {
      value: "3",
      label: "3"
    }]} value={value} onSelect={v => {
      setValue(v);
    }} onClear={() => setValue(undefined)} />;
  }
}`,...(t=(l=e.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};const _=["Basic"];export{e as Basic,_ as __namedExportsOrder,f as default};
