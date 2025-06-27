import{j as v}from"./__bundle-8b4f432b-C9OXY8E-.js";import{c as k}from"./jspdf.es.min-CL1hZAQy.js";import{r as M}from"./iframe-Br5yGide.js";import"./index-bVxR5iTN.js";const{expect:e,userEvent:n,waitFor:B,within:i}=__STORYBOOK_MODULE_TEST__,q={title:"Interaction/DatetimePicker",component:k,parameters:{}},T="datetime-picker",_=async r=>{const o=i(r).getByRole("dialog"),[t]=await i(o).findAllByRole("generic"),[a,d]=t.children,p=i(a).getByRole("grid"),[l,c]=d.children,s=i(p).getAllByRole("gridcell"),u=i(l).getAllByRole("button"),g=i(c).getAllByRole("button");return{dayButtons:s,hourButtons:u,minuteButtons:g}},m=(r,o)=>{const t=r.find(a=>a.textContent===o);if(!t)throw new Error("Target button not found");return t},y={play:async({canvasElement:r})=>{const t=i(r).getByTestId(T);await B(()=>{e(t).toBeInTheDocument()});const a=t.children[0];await n.click(a,{delay:1e3});const d=await B(()=>{const b=document.querySelector("[data-radix-popper-content-wrapper]");if(!b)throw new Error("Popper content not found");return b},{timeout:5e3}),{dayButtons:p,hourButtons:l,minuteButtons:c}=await _(d),s=m(p,"15");await n.click(s,{delay:1e3}),await n.keyboard("{ArrowDown}",{delay:1e3}),await n.keyboard("{Enter}",{delay:100});const u=m(l,"1"),g=m(c,"15");await n.keyboard("{ArrowDown}",{delay:300}),await n.keyboard("{ArrowDown}",{delay:300}),await n.keyboard("{ArrowDown}",{delay:300}),await n.keyboard("{Enter}",{delay:1e3}),e(s).toHaveClass("bg-primary"),e(s).toHaveAttribute("aria-selected"),e(u).toHaveClass("bg-primary"),e(g).toHaveClass("bg-primary"),e(u).toHaveAttribute("aria-selected"),e(g).toHaveAttribute("aria-selected");const I=i(a).getAllByRole("button")[0].textContent;e(I).toBe("2025-06-15 01:15")},args:{},render:r=>{const[o,t]=M.useState(void 0);return v.jsx("div",{"data-testid":T,children:v.jsx(k,{...r,value:o,onChange:a=>{t(a)}})})}},w={play:async({canvasElement:r})=>{const t=i(r).getByTestId(T);await B(()=>{e(t).toBeInTheDocument()});const a=t.children[0];await n.click(a,{delay:1e3});const d=await B(()=>{const u=document.querySelector("[data-radix-popper-content-wrapper]");if(!u)throw new Error("Popper content not found");return u},{timeout:5e3}),{hourButtons:p,minuteButtons:l}=await _(d),c=m(p,"1"),s=m(l,"10");await n.click(c,{delay:1e3}),await n.keyboard("{ArrowDown}",{delay:1e3}),await n.keyboard("{ArrowDown}",{delay:1e3}),await n.keyboard("{Enter}",{delay:1e3}),e(c).toHaveClass("bg-primary"),e(c).toHaveAttribute("aria-selected"),e(s).toHaveClass("bg-primary"),e(s).toHaveAttribute("aria-selected")},args:{},render:r=>{const[o,t]=M.useState(void 0);return v.jsx("div",{"data-testid":T,children:v.jsx(k,{...r,value:o,onChange:a=>{t(a)}})})}};var E,D,H,h,x;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const dateTimePickerWrapper = canvas.getByTestId(DTP_TEST_ID);
    await waitFor(() => {
      expect(dateTimePickerWrapper).toBeInTheDocument();
    });
    const dateTimePicker = dateTimePickerWrapper.children[0] as HTMLDivElement;
    await userEvent.click(dateTimePicker, {
      delay: 1000
    });

    // 2. Popper content wrapper 찾기
    const popperContent = await waitFor(() => {
      // storybook-root 밖에서 랜더링 되므로 document.querySelector 사용
      // NOTE: sb의 canvasElement는 id=storybook-root div 안에 있는 요소만 상호 작용 가능
      const content = document.querySelector("[data-radix-popper-content-wrapper]");
      if (!content) throw new Error("Popper content not found");
      return content;
    }, {
      timeout: 5000
    });
    const {
      dayButtons,
      hourButtons,
      minuteButtons
    } = await useSectionButtons(popperContent as HTMLElement);
    const targetDayButton = getTargetButton(dayButtons, "15");
    await userEvent.click(targetDayButton, {
      delay: 1000
    });
    await userEvent.keyboard("{ArrowDown}", {
      delay: 1000
    });
    await userEvent.keyboard("{Enter}", {
      delay: 100
    });
    const targetHourButton = getTargetButton(hourButtons, "1");
    const targetMinuteButton = getTargetButton(minuteButtons, "15");
    await userEvent.keyboard("{ArrowDown}", {
      delay: 300
    });
    await userEvent.keyboard("{ArrowDown}", {
      delay: 300
    });
    await userEvent.keyboard("{ArrowDown}", {
      delay: 300
    });
    await userEvent.keyboard("{Enter}", {
      delay: 1000
    });

    // 클릭 되었을때 제대로 활성화 되었는지 테스트
    expect(targetDayButton).toHaveClass("bg-primary");
    expect(targetDayButton).toHaveAttribute("aria-selected");
    expect(targetHourButton).toHaveClass("bg-primary");
    expect(targetMinuteButton).toHaveClass("bg-primary");
    expect(targetHourButton).toHaveAttribute("aria-selected");
    expect(targetMinuteButton).toHaveAttribute("aria-selected");
    const dateTimePickerText = within(dateTimePicker).getAllByRole("button")[0].textContent;
    expect(dateTimePickerText).toBe("2025-06-15 01:15");
  },
  //@ts-expect-error No args in this story
  args: {},
  render: args => {
    const [value, setValue] = useState<Timestone | undefined>(undefined);
    return <div data-testid={DTP_TEST_ID}>
        <DateTimePicker {...args} value={value} onChange={v => {
        setValue(v);
      }} />
      </div>;
  }
}`,...(H=(D=y.parameters)==null?void 0:D.docs)==null?void 0:H.source},description:{story:`1. Input 클릭
2. Popper Open
3. 날짜 (Day) 클릭
4. ArrowDown , Enter로 Hour 선택
5. ArrowDown , Enter로 Minute 선택`,...(x=(h=y.parameters)==null?void 0:h.docs)==null?void 0:x.description}}};var P,A,S,C,f;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const dateTimePickerWrapper = canvas.getByTestId(DTP_TEST_ID);
    await waitFor(() => {
      expect(dateTimePickerWrapper).toBeInTheDocument();
    });
    const dateTimePicker = dateTimePickerWrapper.children[0] as HTMLDivElement;
    await userEvent.click(dateTimePicker, {
      delay: 1000
    });
    const popperContent = await waitFor(() => {
      // storybook-root 밖에서 랜더링 되므로 document.querySelector 사용
      // NOTE: sb의 canvasElement는 id=storybook-root div 안에 있는 요소만 상호 작용 가능
      const content = document.querySelector("[data-radix-popper-content-wrapper]");
      if (!content) throw new Error("Popper content not found");
      return content;
    }, {
      timeout: 5000
    });
    const {
      hourButtons,
      minuteButtons
    } = await useSectionButtons(popperContent as HTMLElement);
    const targetHourButton = getTargetButton(hourButtons, "1");
    const targetMinuteButton = getTargetButton(minuteButtons, "10");
    await userEvent.click(targetHourButton, {
      delay: 1000
    });
    await userEvent.keyboard("{ArrowDown}", {
      delay: 1000
    });
    await userEvent.keyboard("{ArrowDown}", {
      delay: 1000
    });
    await userEvent.keyboard("{Enter}", {
      delay: 1000
    });
    expect(targetHourButton).toHaveClass("bg-primary");
    expect(targetHourButton).toHaveAttribute("aria-selected");
    expect(targetMinuteButton).toHaveClass("bg-primary");
    expect(targetMinuteButton).toHaveAttribute("aria-selected");
  },
  //@ts-expect-error No args in this story
  args: {},
  render: args => {
    const [value, setValue] = useState<Timestone | undefined>(undefined);
    return <div data-testid={DTP_TEST_ID}>
        <DateTimePicker {...args} value={value} onChange={v => {
        setValue(v);
      }} />
      </div>;
  }
}`,...(S=(A=w.parameters)==null?void 0:A.docs)==null?void 0:S.source},description:{story:`Day 선택 건너 뛴 후, Hour 부터 클릭으로 선택했을시, Minute로 포커스가 이동하는지 테스트
1. Input 클릭
2. Popper Open
3. click 로 Hour 선택
4. ArrowDown , Enter로 Minute 선택`,...(f=(C=w.parameters)==null?void 0:C.docs)==null?void 0:f.description}}};const V=["Basic","MinuteClick"];export{y as Basic,w as MinuteClick,V as __namedExportsOrder,q as default};
