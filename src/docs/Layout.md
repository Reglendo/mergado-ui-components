Widget

    <div style={{ width: '279px', height: '73px', border: '1px solid #dbcba3', borderTop: '30px solid #948254',
                    boxSizing: 'content-box',
                    backgroundColor: 'hsla(0, 0%, 100%, .5)',
                    fontFamily: 'Arial, Helvetica, Verdana, Sans-serif'}}>
        <div className="widget">
            <div className="widget-row">
                <div className="widget-cell widget-status"><LittleStatus text="First item" type="success" /></div>
                <div className="widget-cell widget-value">2</div>
            </div>
            <div className="widget-row">
                <div className="widget-cell widget-status"><LittleStatus text="Second item" type="inactive" /></div>
                <div className="widget-cell widget-value">8</div>
            </div>
            <div className="widget-row">
                <div className="widget-cell widget-status"><LittleStatus text="Third item" type="warning" /></div>
                <div className="widget-cell widget-value">0</div>
            </div>
        </div>
    </div>

Application

    <div style={{overflow: 'auto'}}>
    <div className="document-style" style={{ maxWidth: '1146px', minWidth: '500px', height: '350px'}}>
        <section id="container">
            <section className="app-presenter">
                <header>
                    <div className="logo-wrapper" style={{width: '430px'}}>
                        <Placeholder width={430} height={120} style={{border: "1px solid #aaa" }}>APP logo</Placeholder>
                    </div>
                    <div className="info">
                        <h2 className="export-name">Export name</h2>
                    </div>
                </header>
            </section>
            <TopNav addClass="top-nav" links={[<NavLink link={<a href="#">First</a>} key="1" active={true} />, <NavLink link="Second" key="2" />]} />
            <section id="app">
                <header className="main"><h2>Title</h2></header>
                <div className="content">
                ... content ...
                </div>
            </section>
        </section>
    </div>
    </div>

Headers

    <div className="muk-grid">
        <div className="muk-6-12" style={{padding: '0px 10px'}}>
            <h1>Title H1</h1>
            <Placeholder width="10" height="1">...content....</Placeholder>
            <h2>Title H2</h2>
            <Placeholder width="10" height="1">...content....</Placeholder>
            <h3>Title H3</h3>
            <Placeholder width="10" height="1">...content....</Placeholder>
            <h4>Title H4</h4>
            <Placeholder width="10" height="1">...content....</Placeholder>
            <h5>Title H5</h5>
            <Placeholder width="10" height="1">...content....</Placeholder>
            <h6>Title H6</h6>
            <Placeholder width="10" height="1">...content....</Placeholder>
        </div>
        <div className="muk-6-12" style={{padding: '0px 10px'}}>
            <header className="main" style={{marginTop: '0px'}}><h1>Header H1</h1></header>
            <header className="main"><h2>Header H2</h2></header>
            <header className="main"><h3>Header H3</h3></header>
            <header className="main"><h4>Header H4</h4></header>
            <header className="main"><h5>Header H5</h5></header>
            <header className="main"><h6>Header H6</h6></header>
        </div>

    </div>

**.muk-grid**

    <div className="muk-grid" style={{fontSize: '11px'}}>

        <Placeholder width={100} height={5}  addClass={`muk-1-12`}>.muk-1-12</Placeholder>
        <Placeholder width={100} height={5}  addClass={`muk-1-12`}>.muk-1-12</Placeholder>
        <Placeholder width={100} height={5}  addClass={`muk-1-12`}>.muk-1-12</Placeholder>
        <Placeholder width={100} height={5}  addClass={`muk-1-12`}>.muk-1-12</Placeholder>
        <Placeholder width={100} height={5}  addClass={`muk-1-12`}>.muk-1-12</Placeholder>
        <Placeholder width={100} height={5}  addClass={`muk-1-12`}>.muk-1-12</Placeholder>
        <Placeholder width={100} height={5}  addClass={`muk-1-6`}>.muk-1-6 (.muk-2-12)</Placeholder>
        <Placeholder width={100} height={5}  addClass={`muk-1-6`}>.muk-1-6 (.muk-2-12)</Placeholder>
        <Placeholder width={100} height={5}  addClass={`muk-1-6`}>.muk-1-6 (.muk-2-12)</Placeholder>


        <Placeholder width={100} height={5}  addClass={`muk-2-3`}>.muk-2-3 (.muk-8-12)</Placeholder>
        <Placeholder width={100} height={5}  addClass={`muk-1-3`}>.muk-1-3 (.muk-4-12)</Placeholder>


        <Placeholder width={100} height={5}  addClass={`muk-1-2`}>.muk-1-2 (.muk-6-12)</Placeholder>
        <Placeholder width={100} height={5}  addClass={`muk-1-4`}>.muk-1-4</Placeholder>
        <Placeholder width={100} height={5}  addClass={`muk-1-4`}>.muk-3-12</Placeholder>

        <Placeholder width={100} height={5}  addClass={`muk-1-1`}>.muk-1-1 (.muk-12-12)</Placeholder>

        <Placeholder width={100} height={5}  addClass={`muk-1-2`}>.muk-1-2</Placeholder>
        <Placeholder width={100} height={5}  addClass={`muk-1-4 muk-col-right`}>.muk-1-4.muk-col-right</Placeholder>


    </div>


**.muk-grid--table**

    <div className="muk-grid--table" style={{fontSize: '11px'}}>
        <div>
            <div className={`muk-1-2`}>
                <Placeholder width={100} height={5} >.muk-1-2</Placeholder>
            </div>
            <div className={`muk-1-4`}>
                <Placeholder width={100} height={20} >.muk-1-4</Placeholder>
            </div>
            <div className={`muk-1-4`}>
                <Placeholder width={100} height={30} >.muk-1-4</Placeholder>
            </div>
        </div>
        <div>
            <div className={`muk-1-2`}>
                <Placeholder width={100} height={15} >.muk-1-2</Placeholder>
            </div>
            <div className={`muk-1-4`}>
                <Placeholder width={100} height={20} >.muk-1-4</Placeholder>
            </div>
            <div className={`muk-1-4`}>
                <Placeholder width={100} height={10} >.muk-1-4</Placeholder>
            </div>
        </div>

    </div>
