import{j as n}from"./__bundle-8b4f432b-C9OXY8E-.js";import{r as u}from"./iframe-Br5yGide.js";import{a as o,B as r,b as s,T as e,D as l}from"./jspdf.es.min-CL1hZAQy.js";import"./index-bVxR5iTN.js";const z={title:"UI/Dialog",component:o,parameters:{layout:"centered"},tags:["autodocs"]},d={args:{},render:t=>{const[a,i]=u.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(o,{...t,open:a,onOpenChange:p=>{i(p)},children:n.jsxs(o.Content,{children:[n.jsx(o.Title,{children:"Dialog Title"}),n.jsx(o.Description,{children:"Dialog Description"})]})}),n.jsx(r,{onClick:()=>i(!0),children:"Open Dialog"})]})}},c={args:{},render:t=>{const[a,i]=u.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(o,{...t,open:a,onOpenChange:p=>{i(p)},children:n.jsxs(o.Content,{children:[n.jsx(o.Title,{children:"Dialog Title"}),n.jsxs(s,{children:[n.jsx(s.Trigger,{children:n.jsx(r,{children:"Open Dropdown"})}),n.jsxs(s.Content,{children:[n.jsx(s.Item,{children:"Item 1"}),n.jsx(s.Item,{children:"Item 2"}),n.jsx(s.Item,{children:"Item 3"})]})]})]})}),n.jsx(r,{onClick:()=>i(!0),children:"Open Dialog"})]})}},g={args:{},render:()=>{const[t,a]=u.useState(!1),[i,p]=u.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"fixed bottom-6 right-24",children:n.jsx(e.Provider,{children:n.jsx(r,{className:"size-12 rounded-full",size:"icon",children:n.jsx("span",{children:"😆"})})})}),n.jsxs("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",gap:"10px"},children:[n.jsx(e.Provider,{children:n.jsxs(e,{open:!0,children:[n.jsx(e.Trigger,{children:n.jsx("span",{children:"Tooltip Activated"})}),n.jsx(e.Content,{children:n.jsx("span",{children:"Tooltip Content"})})]})}),n.jsxs(l,{open:t,onOpenChange:a,children:[n.jsx(l.Trigger,{children:n.jsx(r,{children:"Open Drawer"})}),n.jsx(l.Content,{children:n.jsxs(l.Header,{children:[n.jsx(l.Title,{children:"Drawer Title"}),n.jsx(l.Description,{children:"Drawer Description"}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:n.jsx(e.Provider,{children:n.jsxs(e,{open:i,children:[n.jsx(e.Trigger,{children:n.jsx(r,{onClick:()=>{p(P=>!P)},children:"Open Another Tooltip"})}),n.jsx(e.Content,{children:n.jsx("span",{children:"Tooltip Content"})})]})})})]})})]})]}),n.jsx("div",{className:"fixed bottom-6 right-6",children:n.jsx(e.Provider,{children:n.jsx(r,{className:"size-12 rounded-full",size:"icon",children:n.jsx("span",{children:"🎧"})})})})]})}},D={args:{},render:t=>n.jsxs(o,{...t,children:[n.jsxs(o.Content,{children:[n.jsx(o.Title,{children:"Dialog Title"}),n.jsx(o.Description,{children:"Dialog Description"}),n.jsx(e.Provider,{delayDuration:0,children:n.jsxs(e,{children:[n.jsx(e.Trigger,{children:n.jsx(r,{children:"Open Tooltip"})}),n.jsx(e.Content,{children:n.jsx("span",{children:"Tooltip Content"})})]})})]}),n.jsx(o.Trigger,{children:n.jsx(r,{children:"Open Dialog"})})]})};var T,x,h;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Dialog {...args} open={isOpen} onOpenChange={open => {
        setIsOpen(open);
      }}>
          <Dialog.Content>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description>Dialog Description</Dialog.Description>
          </Dialog.Content>
        </Dialog>
        <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      </>;
  }
}`,...(h=(x=d.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var m,j,O;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Dialog {...args} open={isOpen} onOpenChange={open => {
        setIsOpen(open);
      }}>
          <Dialog.Content>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <DropdownMenu>
              <DropdownMenu.Trigger>
                <Button>Open Dropdown</Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item>Item 1</DropdownMenu.Item>
                <DropdownMenu.Item>Item 2</DropdownMenu.Item>
                <DropdownMenu.Item>Item 3</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </Dialog.Content>
        </Dialog>
        <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      </>;
  }
}`,...(O=(j=c.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var C,w,I;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);
    return <>
        <div className="fixed bottom-6 right-24">
          <Tooltip.Provider>
            <Button className="size-12 rounded-full" size="icon">
              <span>😆</span>
            </Button>
          </Tooltip.Provider>
        </div>
        <div style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px"
      }}>
          <Tooltip.Provider>
            <Tooltip open={true}>
              <Tooltip.Trigger>
                <span>Tooltip Activated</span>
              </Tooltip.Trigger>
              <Tooltip.Content>
                <span>Tooltip Content</span>
              </Tooltip.Content>
            </Tooltip>
          </Tooltip.Provider>

          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <Drawer.Trigger>
              <Button>Open Drawer</Button>
            </Drawer.Trigger>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Drawer Title</Drawer.Title>
                <Drawer.Description>Drawer Description</Drawer.Description>
                <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px"
              }}>
                  <Tooltip.Provider>
                    <Tooltip open={isTooltipOpen}>
                      <Tooltip.Trigger>
                        <Button onClick={() => {
                        setIsTooltipOpen(prev => !prev);
                      }}>
                          Open Another Tooltip
                        </Button>
                      </Tooltip.Trigger>
                      <Tooltip.Content>
                        <span>Tooltip Content</span>
                      </Tooltip.Content>
                    </Tooltip>
                  </Tooltip.Provider>
                </div>
              </Drawer.Header>
            </Drawer.Content>
          </Drawer>
        </div>
        <div className="fixed bottom-6 right-6">
          <Tooltip.Provider>
            <Button className="size-12 rounded-full" size="icon">
              <span>🎧</span>
            </Button>
          </Tooltip.Provider>
        </div>
      </>;
  }
}`,...(I=(w=g.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var v,f,B;D.parameters={...D.parameters,docs:{...(v=D.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {},
  render: args => {
    return <Dialog {...args}>
        <Dialog.Content>
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Description>Dialog Description</Dialog.Description>
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
        </Dialog.Content>
        <Dialog.Trigger>
          <Button>Open Dialog</Button>
        </Dialog.Trigger>
      </Dialog>;
  }
}`,...(B=(f=D.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};const N=["Basic","WithDropdown","WithBackgroundPopper","UncontrolledDialog"];export{d as Basic,D as UncontrolledDialog,g as WithBackgroundPopper,c as WithDropdown,N as __namedExportsOrder,z as default};
