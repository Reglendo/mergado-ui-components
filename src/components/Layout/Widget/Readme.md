Example

       <div style={{ width: '279px', height: '100px', border: '1px solid #dbcba3', borderTop: '32px solid #948254',
                       boxSizing: 'content-box',
                       backgroundColor: 'white',
                       fontFamily: 'Arial, Helvetica, Verdana, Sans-serif'}}>
           <Widget style={{padding: "10px"}}>
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
              <div className="widget-row">
                  <div className="widget-cell widget-status"><LittleStatus text="Fourth item" type="error" /></div>
                  <div className="widget-cell widget-value">0</div>
              </div>
           </Widget>
       </div>

    
    