import{j as e}from"./__bundle-8b4f432b-C9OXY8E-.js";import{P as o,B as u,b as n,T as r}from"./jspdf.es.min-CL1hZAQy.js";import{r as p}from"./iframe-Br5yGide.js";import"./index-bVxR5iTN.js";const D={title:"UI/Popover",component:o,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{},render:()=>{const[i,a]=p.useState(!1);return e.jsx("div",{children:e.jsxs(o,{open:i,onOpenChange:a,children:[e.jsx(o.Trigger,{children:e.jsx(u,{children:"Open"})}),e.jsx(o.Content,{children:e.jsx("p",{children:"Popover Content"})})]})})}},s={args:{},render:()=>{const[i,a]=p.useState(!1),[h,d]=p.useState(!1),[P,l]=p.useState(!1);return e.jsx("div",{children:e.jsxs(o,{open:i,onOpenChange:a,children:[e.jsx(o.Trigger,{children:e.jsx(u,{children:"Open "})}),e.jsx(o.Content,{children:e.jsxs(n,{onOpenChange:T=>{T||(l(!1),d(!1))},children:[e.jsx(n.Trigger,{children:e.jsx(u,{children:"Open Dropdown"})}),e.jsxs(n.Content,{children:[e.jsx(n.Item,{children:"Item 1"}),e.jsx(n.Item,{children:"Item 2"}),e.jsx(n.Item,{children:"Item 3"}),e.jsx(n.Item,{children:e.jsx(r.Provider,{delayDuration:0,children:e.jsxs(r,{open:h,children:[e.jsx(r.Trigger,{onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:e.jsx(n.Item,{children:"Open Tooltip"})}),e.jsx(r.Content,{children:e.jsx("span",{children:"Tooltip Content"})})]})})}),e.jsx(n.Item,{children:e.jsxs(o,{open:P,children:[e.jsx(o.Trigger,{onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:e.jsx(n.Item,{children:"Open Popover"})}),e.jsx(o.Content,{children:e.jsx("span",{children:"Popover Content"})})]})})]})]})})]})})}};var c,v,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <Popover.Trigger>
            <Button>Open</Button>
          </Popover.Trigger>
          <Popover.Content>
            <p>Popover Content</p>
          </Popover.Content>
        </Popover>
      </div>;
  }
}`,...(m=(v=t.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var O,I,g;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    return <div>
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <Popover.Trigger>
            <Button>Open </Button>
          </Popover.Trigger>
          <Popover.Content>
            <DropdownMenu onOpenChange={open => {
            if (!open) {
              setIsPopoverOpen(false);
              setIsTooltipOpen(false);
            }
          }}>
              <DropdownMenu.Trigger>
                <Button>Open Dropdown</Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item>Item 1</DropdownMenu.Item>
                <DropdownMenu.Item>Item 2</DropdownMenu.Item>
                <DropdownMenu.Item>Item 3</DropdownMenu.Item>
                <DropdownMenu.Item>
                  <Tooltip.Provider delayDuration={0}>
                    <Tooltip open={isTooltipOpen}>
                      <Tooltip.Trigger onMouseEnter={() => setIsTooltipOpen(true)} onMouseLeave={() => setIsTooltipOpen(false)}>
                        <DropdownMenu.Item>Open Tooltip</DropdownMenu.Item>
                      </Tooltip.Trigger>
                      <Tooltip.Content>
                        <span>Tooltip Content</span>
                      </Tooltip.Content>
                    </Tooltip>
                  </Tooltip.Provider>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <Popover open={isPopoverOpen}

                // onOpenChange={setIsPopoverOpen}
                >
                    <Popover.Trigger onMouseEnter={() => setIsPopoverOpen(true)} onMouseLeave={() => setIsPopoverOpen(false)}>
                      <DropdownMenu.Item>Open Popover</DropdownMenu.Item>
                    </Popover.Trigger>
                    <Popover.Content>
                      <span>Popover Content</span>
                    </Popover.Content>
                  </Popover>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </Popover.Content>
        </Popover>
      </div>;
  }
}`,...(g=(I=s.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};const w=["Basic","WithDropdown"];export{t as Basic,s as WithDropdown,w as __namedExportsOrder,D as default};
