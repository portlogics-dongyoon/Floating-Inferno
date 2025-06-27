import{j as n}from"./__bundle-8b4f432b-C9OXY8E-.js";import{useMDXComponents as C}from"./index-C81jhXz4.js";import{I as x,M as O,T as y}from"./blocks-ByqJaBGu.js";import{r as p}from"./iframe-Br5yGide.js";import{T as h,C as D,P as u,D as l,a as g,b as r,c as m}from"./jspdf.es.min-CL1hZAQy.js";import"./index-bVxR5iTN.js";const t=({children:i})=>n.jsx("div",{style:{position:"relative",padding:"20px",border:"1px solid hsl(var(--border))",margin:"12px 0px"},children:i}),a=({defaultOpen:i,innerText:e="🌏 상시 활성화 되어있는 Tooltip 입니다."})=>{const[o,s]=p.useState(i);return n.jsx(h.Provider,{delayDuration:0,children:n.jsxs(h,{open:o,children:[n.jsx(h.Trigger,{children:n.jsx(x,{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!!i),children:"Open Tooltip"})}),n.jsx(h.Content,{children:n.jsx("p",{children:e})})]})})},c=({defaultOpen:i})=>n.jsx(D,{defaultOpen:i,items:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"}]}),j=({defaultOpen:i,innerText:e="🌏 상시 활성화 되어있는 Popover 입니다."})=>{const[o,s]=p.useState(i);return n.jsxs(u,{open:o,children:[n.jsx(u.Trigger,{children:n.jsx(x,{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!!i),children:"Open Popover"})}),n.jsx(u.Content,{children:n.jsx("p",{children:e})})]})},v=()=>{const[i,e]=p.useState(!1);return n.jsxs(l,{open:i,onOpenChange:e,children:[n.jsx(l.Trigger,{children:n.jsx(x,{children:"Open Drawer"})}),n.jsx(l.Content,{children:n.jsx(l.Header,{children:n.jsx(l.Title,{children:"Drawer Title"})})})]})},E=({children:i})=>{const[e,o]=p.useState(!1);return n.jsxs(g,{open:e,onOpenChange:o,children:[n.jsx(g.Trigger,{children:n.jsx(x,{children:"Open Modal"})}),n.jsx(g.Content,{children:i})]})};function f(i){const e={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...C(),...i.components};return l||d("DrawerComponent",!1),l.Content||d("DrawerComponent.Content",!0),l.Header||d("DrawerComponent.Header",!0),l.Title||d("DrawerComponent.Title",!0),l.Trigger||d("DrawerComponent.Trigger",!0),r||d("DropdownMenu",!1),r.Content||d("DropdownMenu.Content",!0),r.Item||d("DropdownMenu.Item",!0),r.Trigger||d("DropdownMenu.Trigger",!0),n.jsxs(n.Fragment,{children:[n.jsx(O,{title:"Docs/Floatings"}),`
`,n.jsx(y,{children:"Floatings"}),`
`,n.jsx("hr",{}),`
`,n.jsx("p",{children:n.jsx(e.p,{children:`동적으로 적용되는 z-index를 가진 컴포넌트들의 시연과, 이를 가능하게 해준
새로운 overlay-manager를 소개합니다.`})}),`
`,n.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#%EB%8F%84%EC%9E%85-%EC%B2%A0%ED%95%99",children:"도입 철학"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#list-of-floating-elements",children:"List of Floating elements"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#%EA%B8%B0%EC%A1%B4-z-index-%EC%8B%9C%EC%8A%A4%ED%85%9C%EC%9D%98-%EB%AC%B8%EC%A0%9C%EC%A0%90",children:"기존 z-index 시스템의 문제점"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#z-index-%EA%B7%9C%EC%B9%99",children:"z-index 규칙"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BC%80%EC%9D%B4%EC%8A%A4",children:"테스트 케이스"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%9D%B4%EA%B2%8C-%EA%B0%80%EB%8A%A5%ED%95%9C%EA%B1%B4%EC%A7%80",children:"어떻게 이게 가능한건지?"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#%EC%A7%81%EC%A0%91-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EA%B8%B0",children:"직접 만들어보기"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#q&a",children:"Q&A"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#%ED%9D%94%ED%9E%88-%ED%95%A0%EB%B2%95%ED%95%9C-%EC%8B%A4%EC%88%98",children:"흔히 할법한 실수"})}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"도입-철학",children:"도입 철학"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"개발자는 최소한의 규칙만을 숙지해야한다."}),`
`,n.jsx(e.li,{children:"UI 패키지 외부에서 적용해야하는 설정은 지양한다."}),`
`,n.jsx(e.li,{children:"동일한 컴포넌트라도, 사용 지점에 따라 다른 Level의 z-index를 가질 수 있다."}),`
`]}),`
`,n.jsx(e.h2,{id:"list-of-elements",children:"List of elements"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Floating 컴포넌트"}),`
`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"combobox :"}),`
`,n.jsx(e.li,{children:"dropdown :"}),`
`,n.jsx(e.li,{children:"hover-card :"}),`
`,n.jsx(e.li,{children:"menubar :"}),`
`,n.jsx(e.li,{children:"popover :"}),`
`,n.jsx(e.li,{children:"select :"}),`
`,n.jsx(e.li,{children:"tooltip :"}),`
`,n.jsx(e.li,{children:"with-confirm : (얘도 popover 계승 받았으니 내부에서 훅 사용 삭제해도 될지도? )"}),`
`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Overlay 컴포넌트"}),`
`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"drawer :"}),`
`,n.jsx(e.li,{children:"dialog :"}),`
`]}),`
`,n.jsx(e.p,{children:"-> 나머지 컴포넌트들은 이 컴포넌트들을 계승하여 사용한 컴포넌트들이다."}),`
`,n.jsx(e.h2,{id:"기존-z-index-시스템의-문제점",children:"기존 z-index 시스템의 문제점"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"하드코딩된 z-index 값들"}),`
`,n.jsx(e.li,{children:"한 가지 시나리오에만 대응되는 z-index 규칙"}),`
`,n.jsx(e.li,{children:"중첩된 Floating Element들에 대한 잘못된 디스플레이"}),`
`]}),`
`,n.jsx(e.p,{children:`--> 이를 해결하기 위해서 css selector + data-attribute를 사용한 방법을 고안했지만, 마찬가지로 모든
시나리오에 대응하기 어려웠고, 시멘틱한 컴포넌트를 유지하기 어려웠다`}),`
`,n.jsx(e.p,{children:"--> 이에 동적으로 z-index를 관리해주는 overlay-manager를 도입했다."}),`
`,n.jsx(e.h2,{id:"z-index-규칙",children:"z-index 규칙"}),`
`,n.jsxs(e.p,{children:["이제 Portal을 타고 올라오는 컴포넌트들은 ",n.jsx(e.code,{children:"Floating"})," 과 ",n.jsx(e.code,{children:"Overlay"})," 두 가지 종류로 나뉩니다."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Floating : 상황에 따라 스스로 z-index를 변경하는 컴포넌트 (10 ~ 7200)"}),`
`,n.jsx(e.li,{children:"Overlay : 상태의 등록으로 다른 요소들의 z-index의 레벨을 높여주는 컴포넌트. 고정된 z-index를 가진다 (5000 ~ 6200)"}),`
`]}),`
`,n.jsxs(e.p,{children:["어떤 컴포넌트를 Floating으로 만드려면 내부에 ",n.jsx(e.code,{children:"useFloatingZIndex"})," 훅을 사용하면 됩니다. Overlay로 만드려면, ",n.jsx(e.code,{children:"useOverlayRegistration"})," 훅을 사용하면 됩니다."]}),`
`,n.jsx(e.p,{children:"자세한 설명은 시현 이후 하도록 하겠습니다."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"테스트-케이스",children:"테스트 케이스"}),`
`,n.jsx(e.h3,{id:"1-floating-element가-비-floating-element와-같은-레벨에-존재하는-경우",children:"1. Floating Element가 비 Floating Element와 같은 레벨에 존재하는 경우"}),`
`,n.jsx(t,{children:n.jsxs("div",{children:[n.jsx(c,{}),n.jsx("br",{}),n.jsx(x,{children:"Button"})]})}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h3,{id:"2-floating-element-간-서로-충돌이-있는-경우",children:"2. Floating Element 간 서로 충돌이 있는 경우"}),`
`,n.jsx(t,{children:n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx(c,{}),n.jsxs(r,{children:[n.jsx(r.Trigger,{children:n.jsx(x,{children:"Dropdown Menu Trigger"})}),n.jsx(r.Content,{children:n.jsx(r.Item,{children:"Dropdown Menu Item"})})]}),n.jsx(a,{defaultOpen:!0}),n.jsx(v,{})]})}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h3,{id:"3-floating-element들이-중첩되는-경우",children:"3. Floating Element들이 중첩되는 경우"}),`
`,n.jsx(t,{children:n.jsx("div",{children:n.jsxs(r,{children:[n.jsx(r.Trigger,{children:n.jsx(x,{children:"Dropdown Menu Trigger"})}),n.jsxs(r.Content,{children:[n.jsx(r.Item,{children:"Dropdown Menu Item"}),n.jsxs(r.Item,{children:[n.jsx("span",{children:"Tooltip: "}),n.jsx(a,{defaultOpen:!1,innerText:"🥳 Tooltip Open!"})]}),n.jsxs(r.Item,{children:[n.jsx("span",{children:"Popover: "}),n.jsx(j,{defaultOpen:!1,innerText:"🥳 Popover Open!"})]}),n.jsx(r.Item,{children:"Dropdown Menu Item"}),n.jsxs(r.Item,{children:[n.jsx("span",{children:"ComboBox: "}),n.jsx(c,{defaultOpen:!0})]}),n.jsx(r.Item,{children:n.jsx(r.Item,{children:"Dropdown Menu Item"})}),n.jsx(r.Item,{children:n.jsx(r.Item,{children:"Dropdown Menu Item"})})]})]})})}),`
`,n.jsx("br",{}),`
`,n.jsx(t,{children:n.jsxs("div",{className:"flex justify-between",children:[n.jsxs("div",{className:"flex gap-4",children:[n.jsx(c,{defaultOpen:!0}),n.jsx(j,{defaultOpen:!0}),n.jsx(a,{defaultOpen:!0})]}),n.jsx("div",{style:{width:"1px",backgroundColor:"hsl(var(--border))"}}),n.jsx("div",{className:"flex",children:n.jsxs(l,{children:[n.jsx(l.Trigger,{children:n.jsx(x,{children:"Open Drawer"})}),n.jsxs(l.Content,{children:[n.jsx(l.Header,{children:n.jsx(l.Title,{children:"Drawer"})}),n.jsxs("div",{className:"flex gap-4 flex-col",children:[n.jsx(m,{}),n.jsx(c,{}),n.jsx(j,{innerText:"🥳 Popover Open!"}),n.jsx(a,{innerText:"🥳 Tooltip Open!"})]})]})]})})]})}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h3,{id:"4-modal과-결합된-경우",children:"4. Modal과 결합된 경우"}),`
`,n.jsx(t,{children:n.jsx("div",{children:n.jsx(E,{children:n.jsxs("div",{className:"flex gap-4 flex-col",children:[n.jsx(j,{}),n.jsx(a,{}),n.jsx(v,{}),n.jsx(m,{}),n.jsx(c,{}),n.jsxs(r,{children:[n.jsx(r.Trigger,{children:n.jsx(x,{children:"Dropdown Menu Trigger"})}),n.jsxs(r.Content,{children:[n.jsx(r.Item,{children:"Dropdown Menu Item"}),n.jsx(r.Item,{children:"Dropdown Menu Item"}),n.jsx(r.Item,{children:"Dropdown Menu Item"})]})]})]})})})}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"어떻게-이게-가능한건지",children:"어떻게 이게 가능한건지?"}),`
`,n.jsx(e.p,{children:"TL;DR"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Floating 컴포넌트가 Overlay 컴포넌트의 상태에 따라 자동으로 z-index를 변경한다."}),`
`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"동작 순서"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"0."})," OverlayManager 싱글톤 인스턴스가 모듈 로드시 자동 생성 -> activeOverlays, listeners (Floating 컴포넌트들이 등록되는 곳) 초기화"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"1."})," Floating 컴포넌트 (Tooltip, Popover 등)이 렌더링 됨"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["각 컴포넌트에서 ",n.jsx(e.code,{children:"useFloatingZIndex"})," 훅 호출"]}),`
`,n.jsx(e.li,{children:"훅이 초기 z-index 값 100을 할당함"}),`
`,n.jsx(e.li,{children:"OverlayManager에 의해 상태변경 구독자로 컴포넌트가 등록됨"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"2."})," 사용자가 Overlay 컴포넌트 (Dialog, Drawer)를 활성화 시킨다."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Overlay 컴포넌트가 ",n.jsx(e.code,{children:"activeOverlay(id)"})," 함수 호출"]}),`
`,n.jsx(e.li,{children:"OverlayManager의 activeOverlays Set에 overlay ID 추가"}),`
`,n.jsx(e.li,{children:"hasActiveOverlay() 상태가 false에서 true로 변경"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"3."})," activeOverlaySet이 변경되면서, OverlayManager가 ",n.jsx(e.code,{children:"notifyListeners"})," 메서드 실행"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"등록된 Floating 컴포넌트들의 콜백 함수 ()을 호출"}),`
`,n.jsxs(e.li,{children:["각 구독자의 ",n.jsx(e.code,{children:"setZIndex()"})," 상태 업데이트 실행"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"4."})," 구독중이던 모든 floating 컴포넌트들이 동시에 리랜더링 됨"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"getDynamicFloatingZIndex"}),"가 이제 100이 아닌 7200을 반환"]}),`
`,n.jsx(e.li,{children:"이로 인해 각 컴포넌트의 z-index가 7200으로 변경됨"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"5."})," 사용자가 Overlay 컴포넌트를 비활성화 시킨다"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"deactivateOverlay(id)"})," 함수 호출로 overlay ID 제거"]}),`
`,n.jsx(e.li,{children:"hasActiveOverlay() 상태가 true에서 false로 변경"}),`
`,n.jsxs(e.li,{children:["이로 인해 ",n.jsx(e.code,{children:"getDynamicFloatingZIndex"}),"가 100을 반환하도록 변경"]}),`
`,n.jsx(e.li,{children:"구독중이던 모든 floating 컴포넌트들이 동시에 리랜더링 됨"}),`
`,n.jsx(e.li,{children:"이로 인해 각 컴포넌트의 z-index가 100으로 변경됨"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.p,{children:[`요약하자면,
Floating 컴포넌트들은 Overlay 컴포넌트의 상태를 구독하고 있고, Overlay의 상태가 변경될때마다 이를 구독하던 Floating 컴포넌트들이 `,n.jsx(e.code,{children:"getDynamicFloatingZIndex"})," 함수를 호출하여 자신의 z-index를 변경하는 것입니다."]}),`
`,`
`,n.jsx(e.h3,{id:"직접-만들어보기",children:"직접 만들어보기"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Floating 컴포넌트"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { useFloatingZIndex } from "@repo/ui";

const FloatingComponent = () => {
  const zIndex = useFloatingZIndex();
  return (
    <div style={{ zIndex }}>
      <p>Floating Component</p>
    </div>
  );
};
`})}),`
`,n.jsx(e.p,{children:"끝입니다! 이제 이 컴포넌트는 자동으로 100 ~ 7200 사이의 z-index를 가지게 됩니다."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Overlay 컴포넌트"}),`
`]}),`
`,n.jsx(e.p,{children:"-> 얘는 조금 손이 많이 갑니다"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"새로운 고정값 z-index 추가"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ui/src/lib/utils.ts

const zDrawerBackdrop = 5000; // 고정값
const zDrawer = 5100; // 고정값
const zDialogBackdrop = 6000; // 고정값
const zDialogContainer = 6100; // 고정값
const zDialog = 6200; // 고정값

const zOverlay = 7000; // 새로운 고정값 추가
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"floating 컴포넌트 Zindex 계산하는 함수 수정"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ui/src/lib/overlay/functions.ts
import { zIndex } from "../utils";

const { zDrawer, zDialog, zOverlay } = zIndex;

export function getFloatingZIndexInOverlay(): number {
  return Math.max(zDrawer, zDialog, zOverlay) + 100; // 6300 - overlay 위에 표시
}
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { useOverlayRegistration } from "@repo/ui";

const OverlayComponent = ({ children }) => {
  return (
    <OverlayPrimitive.Portal>
      <OverlayComponent.Root>
        <OverlayPrimitive.Overlay>
          <OverlayContent>{children}</OverlayContent>
        </OverlayPrimitive.Overlay>
      </OverlayComponent.Root>
    </OverlayPrimitive.Portal>
  );
};

const OverlayContent = ({ children }) => {
  // NOTE: Portal이나 Root이 아닌, 실제 화면에 Overlay Element를 랜더링 하는 컴포넌트에서 호출해야합니다.
  useOverlayRegistration();
  return (
    <OverlayPrimitive.Content
      // 위에서 선언했던 고정값 z-index 사용
      style={{ zIndex: zIndex.overlay }}
    >
      {children}
    </OverlayPrimitive.Content>
  );
};
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"끝입니다! 이제 이 컴포넌트는 기본적으로 선언했던 고정값 z-index를 가지게 되고, 활성화 시 children Floating 컴포넌트들의 z-index가 Overlay 이상의 z-index를 가지게 됩니다"}),`
`]}),`
`,n.jsx(e.h3,{id:"qa",children:"Q&A"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"1."})," OverlayManager가 로드 안되면?"]}),`
`,n.jsx(e.p,{children:"-> Fallback 시스템을 구축해놓았습니다. OverlayManager가 모종의 이유로 로드가 되지 않을 시 , 기본 z-index 상수(100)가 사용됩니다. 최악의 경우에도 앱이 깨지지 않고 기본동작을 유지합니다."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"2."})," z-index의 순서가 완벽하게 보장 될까요?"]}),`
`,n.jsx(e.p,{children:"-> 일단 현재 시스템 내에서는 완벽히 보장 됩니다 (100 ~ 7200 사이로)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"3."})," 성능 저하의 이슈는 없을까요?"]}),`
`,n.jsx(e.p,{children:`-> 일반적인 상황에서는 성능 영향이 무시할 만한 수준입니다. 전제에 따르면 화면에 10개 이상의 Floating 요소가 동시에 존재하고, 또 그 상황에서 복잡한 상호작용이 발생하는 경우가 없기에 성능에 미치는 영향은 없습니다.
설령 있다고 하더라도, 이 시스템은 이벤트 기반으로 동작하기 때문에 성능영향이 없다고 할 수 있습니다.`}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"4."})," 기존에 사용했던 z-index 상수들도 사용 가능할까요?"]}),`
`,n.jsx(e.p,{children:"-> 네 완전히 호환됩니다. 실제로 pms에 있는 Pinning Table 같은 경우, 이 시스템으로 변경하지 않고, 기존에 사용하고 있던 zIndex 상수를 사용하고 있습니다."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"5."})," 러닝커브가 더 높아질까봐 걱정돼요"]}),`
`,n.jsxs(e.p,{children:["-> 매번 z-index를 계산하는 것이 아니라, 용례에 맞는 훅을 컴포넌트를 생성하면서 불러오기만 하면 되기에 오히려 간단해질것이라고 생각합니다. 어디에 ",n.jsx(e.code,{children:"useFloatingZIndex()"}),", ",n.jsx(e.code,{children:"useOverlayRegistration()"}),"을 사용할지 잘 판단만 하면 됩니다."]}),`
`,n.jsx(e.h3,{id:"흔히-할법한-실수",children:"흔히 할법한 실수"})]})}function M(i={}){const{wrapper:e}={...C(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(f,{...i})}):f(i)}function d(i,e){throw new Error("Expected "+(e?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{c as Combobox,t as Container,v as Drawer,E as Modal,j as Popover,a as Tooltip,M as default};
