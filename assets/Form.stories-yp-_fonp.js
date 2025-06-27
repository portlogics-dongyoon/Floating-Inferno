import{j as e}from"./__bundle-8b4f432b-C9OXY8E-.js";import{t as I,o as y,a as b,s,b as C,n as S}from"./types-XfyesQKg.js";import{F as n,u as E,I as p,d as k,C as L,M as f,e as N,B}from"./jspdf.es.min-CL1hZAQy.js";import{r as T}from"./iframe-Br5yGide.js";import"./index-bVxR5iTN.js";const{expect:d,userEvent:r,within:M}=__STORYBOOK_MODULE_TEST__,V={title:"Interaction/Form",component:n,parameters:{layout:"centered"},tags:["autodocs"]},R=y({name:s().min(2,"Name must be at least 2 characters"),email:s().email("Invalid email address"),age:S().min(0,"Age must be positive").max(120,"Age must be less than 120"),tags:b(s()),role:s().optional(),isActive:C(),birthDate:s().optional(),skills:b(s()).min(1,"Select at least one skill")}),c={play:async({canvasElement:m})=>{const o=M(m),a=o.getByTestId("form-field-name"),i=o.getByTestId("form-field-email"),t=o.getByTestId("form-field-age"),l=o.getByPlaceholderText("Enter skills"),x=o.getByTestId("form-submit-button");await r.type(a,"John Doe"),d(a).toHaveValue("John Doe"),await r.type(i,"john@example.com"),d(i).toHaveValue("john@example.com"),await r.type(t,"30"),d(t).toHaveValue(30),await r.type(l,"React"),await r.keyboard("{Enter}"),await r.click(x,{delay:500});const v={name:"John Doe",email:"john@example.com",age:30,tags:[],role:"",isActive:!1,birthDate:"",skills:["React"]},u=o.getByTestId("form-submission-result").querySelector("pre"),j=JSON.parse((u==null?void 0:u.textContent)||"{}");d(j).toEqual(v)},render:()=>{const[m,o]=T.useState(null),a=E({resolver:I(R),defaultValues:{name:"",email:"",age:void 0,tags:[],role:"",isActive:!1,birthDate:"",skills:[]},mode:"onSubmit"}),i=t=>{o(t)};return e.jsxs("div",{className:"w-[800px]",children:[e.jsx(n,{...a,children:e.jsxs("form",{onSubmit:a.handleSubmit(i),className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(n.Field,{control:a.control,name:"name",render:({field:t})=>e.jsxs(n.Item,{children:[e.jsx(n.Label,{required:!0,children:"Name"}),e.jsx(n.Control,{children:e.jsx(p,{...t,"data-testid":"form-field-name"})}),e.jsx(n.Message,{})]})}),e.jsx(n.Field,{control:a.control,name:"email",render:({field:t})=>e.jsxs(n.Item,{children:[e.jsx(n.Label,{required:!0,children:"Email"}),e.jsx(n.Control,{children:e.jsx(p,{...t,type:"email","data-testid":"form-field-email"})}),e.jsx(n.Message,{})]})}),e.jsx(n.Field,{control:a.control,name:"age",render:({field:t})=>e.jsxs(n.Item,{children:[e.jsx(n.Label,{required:!0,children:"Age"}),e.jsx(n.Control,{children:e.jsx(p,{...t,type:"number","data-testid":"form-field-age",onChange:l=>t.onChange(l.target.valueAsNumber)})}),e.jsx(n.Message,{})]})}),e.jsx(n.Field,{control:a.control,name:"birthDate",render:({field:t})=>e.jsxs(n.Item,{children:[e.jsx(n.Label,{children:"Birth Date"}),e.jsx(n.Control,{children:e.jsx(k,{value:t.value,onChange:t.onChange,"data-testid":"form-field-birthDate"})}),e.jsx(n.Message,{})]})}),e.jsx(n.Field,{control:a.control,name:"role",render:({field:t})=>e.jsxs(n.Item,{children:[e.jsx(n.Label,{children:"Role"}),e.jsx(n.Control,{children:e.jsx(L,{items:[{value:"admin",label:"Admin"},{value:"user",label:"User"},{value:"guest",label:"Guest"}],value:t.value?{value:t.value,label:t.value}:void 0,onSelect:l=>t.onChange(l.value),onClear:()=>t.onChange(""),"data-testid":"form-field-role"})}),e.jsx(n.Message,{})]})}),e.jsx(n.Field,{control:a.control,name:"tags",render:({field:t})=>e.jsxs(n.Item,{children:[e.jsx(n.Label,{children:"Tags"}),e.jsx(n.Control,{children:e.jsx(f,{...t,placeholder:"Enter tags"})}),e.jsx(n.Message,{})]})}),e.jsx(n.Field,{control:a.control,name:"skills",render:({field:t})=>e.jsxs(n.Item,{children:[e.jsx(n.Label,{required:!0,children:"Skills"}),e.jsx(n.Control,{children:e.jsx(f,{...t,placeholder:"Enter skills"})}),e.jsx(n.Message,{})]})}),e.jsx(n.Field,{control:a.control,name:"isActive",render:({field:t})=>e.jsxs(n.Item,{className:"flex items-center space-x-2",children:[e.jsx(n.Control,{children:e.jsx(N,{checked:t.value,onCheckedChange:t.onChange,"data-testid":"form-field-isActive"})}),e.jsx(n.Label,{children:"Active Status"}),e.jsx(n.Message,{})]})})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx(B,{type:"submit","data-testid":"form-submit-button",children:"Submit"})})]})}),m&&e.jsxs("div",{"data-testid":"form-submission-result",className:"mt-4 p-4 border rounded-md bg-gray-50",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Form Submission Result:"}),e.jsx("pre",{className:"whitespace-pre-wrap",children:JSON.stringify(m,null,2)})]})]})}};var h,g,F;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const nameInput = canvas.getByTestId("form-field-name");
    const emailInput = canvas.getByTestId("form-field-email");
    const ageInput = canvas.getByTestId("form-field-age");
    const skillsInput = canvas.getByPlaceholderText("Enter skills");
    const submitButton = canvas.getByTestId("form-submit-button");
    await userEvent.type(nameInput, "John Doe");
    expect(nameInput).toHaveValue("John Doe");
    await userEvent.type(emailInput, "john@example.com");
    expect(emailInput).toHaveValue("john@example.com");
    await userEvent.type(ageInput, "30");
    expect(ageInput).toHaveValue(30);
    await userEvent.type(skillsInput, "React");
    await userEvent.keyboard("{Enter}");
    await userEvent.click(submitButton, {
      delay: 500
    });
    const result = {
      name: "John Doe",
      email: "john@example.com",
      age: 30,
      tags: [],
      role: "",
      isActive: false,
      birthDate: "",
      skills: ["React"]
    };
    const resultElement = canvas.getByTestId("form-submission-result");
    const preElement = resultElement.querySelector("pre");
    const displayedResult = JSON.parse(preElement?.textContent || "{}");
    expect(displayedResult).toEqual(result);
  },
  render: () => {
    const [submissionResult, setSubmissionResult] = useState<FormSchema | null>(null);
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
      mode: "onSubmit"
    });
    const onSubmit = (data: FormSchema) => {
      setSubmissionResult(data);
    };
    return <div className="w-[800px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Form.Field control={form.control} name="name" render={({
              field
            }) => <Form.Item>
                    <Form.Label required>Name</Form.Label>
                    <Form.Control>
                      <Input {...field} data-testid="form-field-name" />
                    </Form.Control>
                    <Form.Message />
                  </Form.Item>} />

              <Form.Field control={form.control} name="email" render={({
              field
            }) => <Form.Item>
                    <Form.Label required>Email</Form.Label>
                    <Form.Control>
                      <Input {...field} type="email" data-testid="form-field-email" />
                    </Form.Control>
                    <Form.Message />
                  </Form.Item>} />

              <Form.Field control={form.control} name="age" render={({
              field
            }) => <Form.Item>
                    <Form.Label required>Age</Form.Label>
                    <Form.Control>
                      <Input {...field} type="number" data-testid="form-field-age" onChange={e => field.onChange(e.target.valueAsNumber)} />
                    </Form.Control>
                    <Form.Message />
                  </Form.Item>} />

              <Form.Field control={form.control} name="birthDate" render={({
              field
            }) => <Form.Item>
                    <Form.Label>Birth Date</Form.Label>
                    <Form.Control>
                      <DatePicker value={field.value} onChange={field.onChange} data-testid="form-field-birthDate" />
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
                } : undefined} onSelect={item => field.onChange(item.value)} onClear={() => field.onChange("")} data-testid="form-field-role" />
                    </Form.Control>
                    <Form.Message />
                  </Form.Item>} />

              <Form.Field control={form.control} name="tags" render={({
              field
            }) => <Form.Item>
                    <Form.Label>Tags</Form.Label>
                    <Form.Control>
                      <MultipleInput {...field} placeholder="Enter tags" />
                    </Form.Control>
                    <Form.Message />
                  </Form.Item>} />

              <Form.Field control={form.control} name="skills" render={({
              field
            }) => <Form.Item>
                    <Form.Label required>Skills</Form.Label>
                    <Form.Control>
                      <MultipleInput {...field} placeholder="Enter skills" />
                    </Form.Control>
                    <Form.Message />
                  </Form.Item>} />

              <Form.Field control={form.control} name="isActive" render={({
              field
            }) => <Form.Item className="flex items-center space-x-2">
                    <Form.Control>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} data-testid="form-field-isActive" />
                    </Form.Control>
                    <Form.Label>Active Status</Form.Label>
                    <Form.Message />
                  </Form.Item>} />
            </div>

            <div className="flex justify-end">
              <Button type="submit" data-testid="form-submit-button">
                Submit
              </Button>
            </div>
          </form>
        </Form>

        {submissionResult && <div data-testid="form-submission-result" className="mt-4 p-4 border rounded-md bg-gray-50">
            <h3 className="font-semibold mb-2">Form Submission Result:</h3>
            <pre className="whitespace-pre-wrap">
              {JSON.stringify(submissionResult, null, 2)}
            </pre>
          </div>}
      </div>;
  }
}`,...(F=(g=c.parameters)==null?void 0:g.docs)==null?void 0:F.source}}};const _=["Basic"];export{c as Basic,_ as __namedExportsOrder,V as default};
