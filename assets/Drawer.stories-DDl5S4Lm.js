import{j as e}from"./__bundle-8b4f432b-C9OXY8E-.js";import{D as r,B as o,T as n}from"./jspdf.es.min-CL1hZAQy.js";import{r as p}from"./iframe-Br5yGide.js";import"./index-bVxR5iTN.js";const f={title:"UI/Drawer",component:r,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{},render:()=>{const[a,l]=p.useState(!1);return e.jsxs(r,{open:a,onOpenChange:l,children:[e.jsx(r.Trigger,{children:e.jsx(o,{children:"Open"})}),e.jsx(r.Content,{children:e.jsx(r.Header,{children:e.jsx(r.Title,{children:"Drawer Title"})})})]})}},i={args:{},render:()=>{const[a,l]=p.useState(!1),[m,d]=p.useState(!1);return e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(r,{open:a,onOpenChange:l,children:[e.jsx(r.Trigger,{children:e.jsx(o,{children:"Open"})}),e.jsx(r.Content,{children:e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Drawer Title"}),e.jsx(r.Description,{children:"Lorem ipsum dolor sit amet."}),e.jsx("div",{children:e.jsx(n.Provider,{delayDuration:0,children:e.jsxs(n,{open:m,children:[e.jsx(n.Trigger,{onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:e.jsx("p",{children:"Hover me to see tooltip"})}),e.jsx(n.Content,{children:e.jsx("p",{children:"Boo!"})})]})})})]})})]}),e.jsx(n.Provider,{delayDuration:0,children:e.jsxs(n,{open:!0,children:[e.jsx(n.Trigger,{children:e.jsx(o,{children:"Tooltip Button"})}),e.jsx(n.Content,{children:e.jsx("p",{children:"🌏 상시 활성화 된 Tooltip입니다"})})]})})]})}},s={args:{},render:()=>e.jsxs(r,{children:[e.jsxs(r.Content,{children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Drawer Title"}),e.jsx(r.Description,{children:"Drawer Description"})]}),e.jsx(n.Provider,{delayDuration:0,children:e.jsxs(n,{children:[e.jsx(n.Trigger,{children:e.jsx(o,{children:"Open Tooltip"})}),e.jsx(n.Content,{children:e.jsx("span",{children:"Tooltip Content"})})]})})]}),e.jsx(r.Trigger,{children:e.jsx(o,{children:"Open Drawer"})})]})};var c,T,D;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <Drawer.Trigger>
          <Button>Open</Button>
        </Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Drawer Title</Drawer.Title>
          </Drawer.Header>
        </Drawer.Content>
      </Drawer>;
  }
}`,...(D=(T=t.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var u,g,w;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);
    return <div className="flex gap-4">
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <Drawer.Trigger>
            <Button>Open</Button>
          </Drawer.Trigger>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Drawer Title</Drawer.Title>
              <Drawer.Description>
                Lorem ipsum dolor sit amet.
              </Drawer.Description>
              <div>
                <Tooltip.Provider delayDuration={0}>
                  <Tooltip open={isTooltipOpen}>
                    <Tooltip.Trigger onMouseEnter={() => setIsTooltipOpen(true)} onMouseLeave={() => setIsTooltipOpen(false)}>
                      <p>Hover me to see tooltip</p>
                    </Tooltip.Trigger>
                    <Tooltip.Content>
                      <p>Boo!</p>
                    </Tooltip.Content>
                  </Tooltip>
                </Tooltip.Provider>
              </div>
            </Drawer.Header>
          </Drawer.Content>
        </Drawer>

        <Tooltip.Provider delayDuration={0}>
          <Tooltip open={true}>
            <Tooltip.Trigger>
              <Button>Tooltip Button</Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <p>🌏 상시 활성화 된 Tooltip입니다</p>
            </Tooltip.Content>
          </Tooltip>
        </Tooltip.Provider>
      </div>;
  }
}`,...(w=(g=i.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var x,h,j;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <Drawer>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Drawer Title</Drawer.Title>
            <Drawer.Description>Drawer Description</Drawer.Description>
          </Drawer.Header>
          <Tooltip.Provider delayDuration={0}>
            <Tooltip>
              <Tooltip.Trigger>
                <Button>Open Tooltip</Button>
              </Tooltip.Trigger>
              <Tooltip.Content>
                <span>Tooltip Content</span>
              </Tooltip.Content>
            </Tooltip>
          </Tooltip.Provider>
        </Drawer.Content>
        <Drawer.Trigger>
          <Button>Open Drawer</Button>
        </Drawer.Trigger>
      </Drawer>;
  }
}`,...(j=(h=s.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const H=["Basic","WithTooltip","UncontrolledDrawer"];export{t as Basic,s as UncontrolledDrawer,i as WithTooltip,H as __namedExportsOrder,f as default};
