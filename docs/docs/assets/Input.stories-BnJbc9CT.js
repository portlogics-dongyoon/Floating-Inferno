import{I as r}from"./jspdf.es.min-CL1hZAQy.js";import"./__bundle-8b4f432b-C9OXY8E-.js";import"./iframe-Br5yGide.js";import"./index-bVxR5iTN.js";const{expect:p,userEvent:c,within:l}=__STORYBOOK_MODULE_TEST__,d={title:"Interaction/Input",component:r,parameters:{layout:"centered"},tags:["autodocs"]},t={play:async({canvasElement:s})=>{const e=l(s).getByRole("textbox");console.log("input",e),await c.type(e,"Hello",{delay:300}),await p(e).toHaveValue("Hello")},args:{}};var a,n,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole("textbox");
    console.log("input", input);
    await userEvent.type(input, "Hello", {
      delay: 300
    });
    await expect(input).toHaveValue("Hello");
  },
  args: {}
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const g=["Basic"];export{t as Basic,g as __namedExportsOrder,d as default};
