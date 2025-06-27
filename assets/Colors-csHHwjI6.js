import{j as r}from"./__bundle-8b4f432b-C9OXY8E-.js";import{useMDXComponents as n}from"./index-C81jhXz4.js";import{I as c,M as i,T as u,C as h,a as o}from"./blocks-ByqJaBGu.js";import{r as g}from"./iframe-Br5yGide.js";import"./index-bVxR5iTN.js";const b=()=>{const[e,t]=g.useState(!1),a={dark:{background:"rgba(125, 125, 125, 0.46)",color:"white"}},s=document.createElement("style");s.textContent=`.dark{
        .sbdocs-wrapper h1,
        .sbdocs-wrapper h2,
        .sbdocs-wrapper h3,
        .sbdocs-wrapper h4,
        .sbdocs-wrapper h5,
        .sbdocs-wrapper h6,
        .sbdocs-wrapper p,
        .sbdocs-wrapper span,
        .sbdocs-wrapper div {
          color: ${a.dark.color}
        }
        .sbdocs-wrapper {
            background-color: ${a.dark.background}
        }
  }`,s.id="dark-mode-style",document.head.appendChild(s);const l=()=>{t(!e),document.documentElement.classList.toggle("dark")};return r.jsx("div",{style:{marginBottom:"1rem"},children:r.jsx(c,{onClick:l,children:e?"Toggle Light Mode":"Toggle Dark Mode"})})};function d(e){return r.jsxs(r.Fragment,{children:[r.jsx(i,{title:"Docs/Colors"}),`
`,`
`,r.jsx(b,{}),`
`,r.jsx(u,{children:"Colors"}),`
`,r.jsxs(h,{children:[r.jsx(o,{title:"Ground Colors",subtitle:"Background and Foreground",colors:{Background:"hsl(var(--background))",Foreground:"hsl(var(--foreground))"}}),r.jsx(o,{title:"Primary Colors",subtitle:"Primary and Primary Foreground",colors:{Primary:"hsl(var(--primary))","Primary Foreground":"hsl(var(--primary-foreground))"}}),r.jsx(o,{title:"Secondary Colors",subtitle:"Secondary and Secondary Foreground",colors:{Secondary:"hsl(var(--secondary))","Secondary Foreground":"hsl(var(--secondary-foreground))"}}),r.jsx(o,{title:"Accent Colors",subtitle:"Accent and Accent Foreground",colors:{Accent:"hsl(var(--accent))","Accent Foreground":"hsl(var(--accent-foreground))"}}),r.jsx(o,{title:"Muted Colors",subtitle:"Muted and Muted Foreground",colors:{Muted:"hsl(var(--muted))","Muted Foreground":"hsl(var(--muted-foreground))"}}),r.jsx(o,{title:"Highlight Colors",subtitle:"Highlight and Highlight Foreground",colors:{Highlight:"hsl(var(--highlight))","Highlight Foreground":"hsl(var(--highlight-foreground))"}}),r.jsx(o,{title:"Destructive Colors",subtitle:"Destructive and Destructive Foreground",colors:{Destructive:"hsl(var(--destructive))","Destructive Foreground":"hsl(var(--destructive-foreground))"}}),r.jsx(o,{title:"Chart Colors",subtitle:"Chart Color Palette",colors:{"Chart 1":"hsl(var(--chart-1))","Chart 2":"hsl(var(--chart-2))","Chart 3":"hsl(var(--chart-3))","Chart 4":"hsl(var(--chart-4))","Chart 5":"hsl(var(--chart-5))"}}),r.jsx(o,{title:"Sidebar Colors",subtitle:"Sidebar Color Palette",colors:{"Sidebar Background":"hsl(var(--sidebar-background))","Sidebar Foreground":"hsl(var(--sidebar-foreground))","Sidebar Primary":"hsl(var(--sidebar-primary))","Sidebar Primary Foreground":"hsl(var(--sidebar-primary-foreground))","Sidebar Accent":"hsl(var(--sidebar-accent))","Sidebar Accent Foreground":"hsl(var(--sidebar-accent-foreground))"}})]})]})}function y(e={}){const{wrapper:t}={...n(),...e.components};return t?r.jsx(t,{...e,children:r.jsx(d,{...e})}):d()}export{b as DarkModeToggle,y as default};
