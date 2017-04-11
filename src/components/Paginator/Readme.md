Fullweight paginator:

    <Paginator currentPage={state.current} firstPage={1} lastPage={20} maxLinks={10} showFirstAndLast={true}
               labelFirst="« První" labelLast="Poslední »"  labelNext=" Další " labelPrevious="Předchozí"
               onPageChange={(o) => { setState({ current: o}) } } />

Mini paginator:

    initialState = { current: 3 };
    <Paginator currentPage={state.current} firstPage={1} lastPage={10} maxLinks={5} showPrevAndNext={false}
     onPageChange={(o) => { setState({ current: o}) } } />
