import{j as e}from"./__bundle-8b4f432b-C9OXY8E-.js";import{t as g,o as h,a as m,s as l,b,n as j}from"./types-XfyesQKg.js";import{F as n,u as C,I as t,d as f,C as v,M as i,e as p,B as I}from"./jspdf.es.min-CL1hZAQy.js";import"./iframe-Br5yGide.js";import"./index-bVxR5iTN.js";const N={title:"UI/Form",component:n,parameters:{layout:"centered"},tags:["autodocs"]},L=h({name:l().min(2,"Name must be at least 2 characters"),email:l().email("Invalid email address"),age:j().min(0,"Age must be positive").max(120,"Age must be less than 120"),tags:m(l()),role:l().optional(),isActive:b(),birthDate:l().optional(),skills:m(l()).min(1,"Select at least one skill")}),a={args:{},render:F=>{const o=C({resolver:g(L),defaultValues:{name:"",email:"",age:void 0,tags:[],role:"",isActive:!1,birthDate:"",skills:[]},mode:"onChange"}),x=r=>{console.log("Form submitted:",r)};return e.jsx("div",{className:"w-[800px]",children:e.jsx(n,{...F,...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(x),className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(n.Field,{control:o.control,name:"name",render:({field:r})=>e.jsxs(n.Item,{children:[e.jsx(n.Label,{required:!0,children:"Name"}),e.jsx(n.Control,{children:e.jsx(t,{...r})}),e.jsx(n.Message,{})]})}),e.jsx(n.Field,{control:o.control,name:"email",render:({field:r})=>e.jsxs(n.Item,{children:[e.jsx(n.Label,{required:!0,children:"Email"}),e.jsx(n.Control,{children:e.jsx(t,{...r,type:"email"})}),e.jsx(n.Message,{})]})}),e.jsx(n.Field,{control:o.control,name:"age",render:({field:r})=>e.jsxs(n.Item,{children:[e.jsx(n.Label,{required:!0,children:"Age"}),e.jsx(n.Control,{children:e.jsx(t,{...r,type:"number",onChange:s=>r.onChange(s.target.valueAsNumber)})}),e.jsx(n.Message,{})]})}),e.jsx(n.Field,{control:o.control,name:"birthDate",render:({field:r})=>e.jsxs(n.Item,{children:[e.jsx(n.Label,{children:"Birth Date"}),e.jsx(n.Control,{children:e.jsx(f,{value:r.value,onChange:r.onChange})}),e.jsx(n.Message,{})]})}),e.jsx(n.Field,{control:o.control,name:"role",render:({field:r})=>e.jsxs(n.Item,{children:[e.jsx(n.Label,{children:"Role"}),e.jsx(n.Control,{children:e.jsx(v,{items:[{value:"admin",label:"Admin"},{value:"user",label:"User"},{value:"guest",label:"Guest"}],value:r.value?{value:r.value,label:r.value}:void 0,onSelect:s=>r.onChange(s.value),onClear:()=>r.onChange("")})}),e.jsx(n.Message,{})]})}),e.jsx(n.Field,{control:o.control,name:"tags",render:({field:r})=>e.jsxs(n.Item,{children:[e.jsx(n.Label,{children:"Tags"}),e.jsx(n.Control,{children:e.jsx(i,{...r})}),e.jsx(n.Message,{})]})}),e.jsx(n.Field,{control:o.control,name:"skills",render:({field:r})=>e.jsxs(n.Item,{children:[e.jsx(n.Label,{required:!0,children:"Skills"}),e.jsx(n.Control,{children:e.jsx(i,{...r})}),e.jsx(n.Message,{})]})}),e.jsx(n.Field,{control:o.control,name:"isActive",render:({field:r})=>e.jsxs(n.Item,{className:"flex items-center space-x-2",children:[e.jsx(n.Control,{children:e.jsx(p,{checked:r.value,onCheckedChange:r.onChange})}),e.jsx(n.Label,{children:"Active Status"}),e.jsx(n.Message,{})]})})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx(I,{type:"submit",children:"Submit"})})]})})})}};var d,c,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const form = useForm<FormSchema>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        email: "",
        age: undefined,
        tags: [],
        role: "",
        isActive: false,
        birthDate: "",
        skills: []
      },
      mode: "onChange"
    });
    const onSubmit = (data: FormSchema) => {
      console.log("Form submitted:", data);
    };
    return <div className="w-[800px]">
        <Form {...args} {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Form.Field control={form.control} name="name" render={({
              field
            }) => <Form.Item>
                    <Form.Label required>Name</Form.Label>
                    <Form.Control>
                      <Input {...field} />
                    </Form.Control>
                    <Form.Message />
                  </Form.Item>} />

              <Form.Field control={form.control} name="email" render={({
              field
            }) => <Form.Item>
                    <Form.Label required>Email</Form.Label>
                    <Form.Control>
                      <Input {...field} type="email" />
                    </Form.Control>
                    <Form.Message />
                  </Form.Item>} />

              <Form.Field control={form.control} name="age" render={({
              field
            }) => <Form.Item>
                    <Form.Label required>Age</Form.Label>
                    <Form.Control>
                      <Input {...field} type="number" onChange={e => field.onChange(e.target.valueAsNumber)} />
                    </Form.Control>
                    <Form.Message />
                  </Form.Item>} />

              <Form.Field control={form.control} name="birthDate" render={({
              field
            }) => <Form.Item>
                    <Form.Label>Birth Date</Form.Label>
                    <Form.Control>
                      <DatePicker value={field.value} onChange={field.onChange} />
                    </Form.Control>
                    <Form.Message />
                  </Form.Item>} />

              <Form.Field control={form.control} name="role" render={({
              field
            }) => <Form.Item>
                    <Form.Label>Role</Form.Label>
                    <Form.Control>
                      <Combobox items={[{
                  value: "admin",
                  label: "Admin"
                }, {
                  value: "user",
                  label: "User"
                }, {
                  value: "guest",
                  label: "Guest"
                }]} value={field.value ? {
                  value: field.value,
                  label: field.value
                } : undefined} onSelect={item => field.onChange(item.value)} onClear={() => field.onChange("")} />
                    </Form.Control>
                    <Form.Message />
                  </Form.Item>} />

              <Form.Field control={form.control} name="tags" render={({
              field
            }) => <Form.Item>
                    <Form.Label>Tags</Form.Label>
                    <Form.Control>
                      <MultipleInput {...field} />
                    </Form.Control>
                    <Form.Message />
                  </Form.Item>} />

              <Form.Field control={form.control} name="skills" render={({
              field
            }) => <Form.Item>
                    <Form.Label required>Skills</Form.Label>
                    <Form.Control>
                      <MultipleInput {...field} />
                    </Form.Control>
                    <Form.Message />
                  </Form.Item>} />

              <Form.Field control={form.control} name="isActive" render={({
              field
            }) => <Form.Item className="flex items-center space-x-2">
                    <Form.Control>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </Form.Control>
                    <Form.Label>Active Status</Form.Label>
                    <Form.Message />
                  </Form.Item>} />
            </div>

            <div className="flex justify-end">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>;
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const D=["BasicForm"];export{a as BasicForm,D as __namedExportsOrder,N as default};
