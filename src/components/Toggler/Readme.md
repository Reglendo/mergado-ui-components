Light input

        <Toggler label={"Little bit different checkbox"}
                onLabel={"On"} offLabel="Off"
                name="form.toggler"
        />

Uncontrolled

        <Toggler onLabel={"On"} offLabel="Off"
                onChange={(value) => alert(value)}
                value={1}
        />
