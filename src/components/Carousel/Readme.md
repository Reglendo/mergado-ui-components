Carousel example:

    <Section>
        <Carousel topLayer={<div style={{position: "absolute", right: 0, top: 0}}>Hello, i'm on top layer</div>}>
        {(next, prev) => [
            <div>
                Slide 1
                <div style={{maxWidth: "200px", margin: "auto"}}>
                    <Placeholder height={30} width={50} />
                    <br/>
                    <Button size={"tiny"} onClick={next}>Next slide ></Button>
                </div>
            </div>,
            <div>
                Slide 2
                <div style={{maxWidth: "200px", margin: "auto"}}>
                    <Placeholder height={50} width={40} />
                </div>
            </div>,
            <div>Slide 3</div>,
            <div>Slide 4
                <div style={{maxWidth: "200px", margin: "auto"}}>
                    <Placeholder height={10} width={10} />
                </div>
            </div>,
            <div>Slide 5</div>
        ]
        }
        </Carousel>
    </Section>

Auto scroll example:

    <Section>
        <Carousel timeout={1} topLayer={<div style={{position: "absolute", right: 0, top: 0}}>Hello, i'm on top layer</div>} nextLabel="Další" prevLabel="Zpět">
        {(next, prev) => [
            <div>
                Slide 1
                <div style={{maxWidth: "200px", margin: "auto"}}>
                    <Placeholder height={30} width={50} />

                </div>
            </div>,
            <div>
                Slide 2
                <div style={{maxWidth: "200px", margin: "auto"}}>
                    <Placeholder height={50} width={40} />
                </div>
            </div>,
            <div>Slide 3</div>,
            <div>Slide 4
                <div style={{maxWidth: "200px", margin: "auto"}}>
                    <Placeholder height={10} width={10} />
                </div>
            </div>,
            <div>Slide 5</div>,
        ]}
        </Carousel>
    </Section>
