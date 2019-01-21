Example types

    <TextInput label="Text:" onChange={(e) => console.log(e)} placeholder="Text" name="form.textinput" />
    <TextInput label="Number:" type="number" placeholder="Number" name="form.numberinput" />
    <TextInput label="Password:" type="password" placeholder="Password" name="form.passwordinput" />
    <TextInput label="Email:"  type="email" placeholder="Email" name="form.emailinput" />
    <TextInput label="Search:" type="search" placeholder="Search" name="form.searchinput" />
    <TextInput label="Tel:" type="tel" placeholder="Tel" name="form.telinput" />
    <TextInput label="Url:"  type="url" placeholder="Url" name="form.urlinput" />
    <TextInput label="File:"  type="file" placeholder="File" name="form.fileinput" />
    <TextInput label="Time:"  type="time" placeholder="Time" name="form.timeinput" />

    <span>and hidden</span>
    <TextInput type="hidden" name="form.hiddeninput" />

Uncontrolled

    <TextInput label="Text:" value="Test" onChange={value => alert(value)} />
    <TextInput invalid={true} label="Text:" placeholder="Text" />
    <TextInput error={"Error!"} label="Text:" placeholder="Text" />


Example small types

    <TextInput small={true} label="Text:" onChange={(e) => console.log(e)} placeholder="Text" name="form.textinput" />
    <TextInput small={true} label="Number:" type="number" placeholder="Number" name="form.numberinput" />
    <TextInput small={true} label="Password:" type="password" placeholder="Password" name="form.passwordinput" />
    <TextInput small={true} label="Email:"  type="email" placeholder="Email" name="form.emailinput" />
    <TextInput small={true} label="Search:" type="search" placeholder="Search" name="form.searchinput" />
    <TextInput small={true} label="Tel:" type="tel" placeholder="Tel" name="form.telinput" />
    <TextInput small={true} label="Url:"  type="url" placeholder="Url" name="form.urlinput" />
    <TextInput small={true} label="File:"  type="file" placeholder="File" name="form.fileinput" />
    <TextInput small={true} label="Time:"  type="time" placeholder="Time" name="form.timeinput" />

    <span>and hidden</span>
    <TextInput type="hidden" name="form.hiddeninput" />
