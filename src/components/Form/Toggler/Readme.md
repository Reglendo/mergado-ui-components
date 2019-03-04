Light input

        <Toggler label={"Little bit different checkbox"}
                onLabel={"On"} offLabel="Off"
                name="form.toggler"
                boolean={true}
                big={true}
        />

        <Toggler label={"Little bit different checkbox"}
                invalid={true}
                onLabel={"On"} offLabel="Off"
                name="form.toggler"
        />

        <Toggler label={"Little bit different checkbox"}
                error="Error!"
                onLabel={"On"} offLabel="Off"
                name="form.toggler"
        />

Uncontrolled

        <Toggler onLabel={"On"} offLabel="Off"
                onChange={(value) => alert(value)}
                value={1}
        />
