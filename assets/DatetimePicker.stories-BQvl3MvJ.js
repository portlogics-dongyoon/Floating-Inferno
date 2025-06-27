import{j as c}from"./__bundle-8b4f432b-C9OXY8E-.js";import{c as a,f as u}from"./jspdf.es.min-CL1hZAQy.js";import{r as d}from"./iframe-Br5yGide.js";import"./index-bVxR5iTN.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,S={title:"UI/DateTimePicker",component:a,parameters:{},tags:["autodocs"]},e={args:{value:u.fromString("2025-05-30T10:00:00"),onChange:p()},render:s=>{const[o,i]=d.useState(void 0);return c.jsx(a,{...s,value:o,onChange:m=>{i(m)}})}};var r,n,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    value: Timestone.fromString("2025-05-30T10:00:00"),
    onChange: fn()
  },
  render: args => {
    const [value, setValue] = useState<Timestone | undefined>(
    // Timestone.fromString("2025-05-30T10:00:00")
    undefined);
    return <DateTimePicker {...args} value={value} onChange={date => {
      setValue(date);
    }} />;
  }
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const _=["Basic"];export{e as Basic,_ as __namedExportsOrder,S as default};
