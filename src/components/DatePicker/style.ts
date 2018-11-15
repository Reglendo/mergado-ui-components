export const style = {
" .DayPicker": {
  display: 'inline-block',
},

" .DayPicker-wrapper": {
  position: 'relative',
  userSelect: 'none',
  paddingBottom: '1rem',
  flexDirection: 'row',

},

" .DayPicker-Months": {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
},

" .DayPicker-Month": {
  display: 'table',
  borderCollapse: 'collapse',
  borderSpacing: '0',
  userSelect: 'none',
  margin: '0 1rem',
  marginTop: '0rem',
},

" .DayPicker-NavBar": {
},

" .DayPicker-NavButton": {
  position: 'absolute',
  cursor: 'pointer',
  top: '1rem',
  right: '1.5rem',
  marginTop: '2px',
  color: '#8b9898',
  width: '1.25rem',
  height: '1.25rem',
  display: 'inline-block',
  backgroundSize: '50%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
},

" .DayPicker-NavButton:hover": {
  opacity: '0.8',
},

" .DayPicker-NavButton--prev": {
  marginRight: "1.5rem",
  backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC')",
},

" .DayPicker-NavButton--next": {
  backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==')",
},

" .DayPicker-NavButton--interactionDisabled": {
  display: 'none',
},

" .DayPicker-Caption": {
  padding: '0 0.5rem',
  display: 'table-caption',
  textAlign: 'left',
  marginBottom: '0.5rem',
},

" .DayPicker-Caption > div": {
  fontSize: '1.15rem',
  fontWeight: '500',
},

" .DayPicker-Weekdays": {
  marginTop: '1rem',
  display: 'table-header-group',
},

" .DayPicker-WeekdaysRow": {
  display: 'table-row',
},

" .DayPicker-Weekday": {
  display: 'table-cell',
  padding: '0.5rem',
  fontSize: '0.875em',
  textAlign: 'center',
  color: '#8b9898',
},

" .DayPicker-Weekday abbr[title]": {
  borderBottom: 'none',
  textDecoration: 'none',
},

" .DayPicker-Body": {
  display: 'table-row-group',
},

" .DayPicker-Week": {
  display: 'table-row',
  height: '20px',
},

" .DayPicker-Day": {
  display: 'table-cell',
  padding: '10px 10px 8px 10px',
  textAlign: 'center',
  cursor: 'pointer',
  verticalAlign: 'middle',
  outline: 'none',
},

" .DayPicker-WeekNumber": {
  display: 'table-cell',
  padding: '0.5rem',
  textAlign: 'right',
  verticalAlign: 'middle',
  minWidth: '1rem',
  fontSize: '0.75em',
  cursor: 'pointer',
  color: '#8b9898',
  borderRight: '1px solid #eaecec',
},

" .DayPicker--interactionDisabled .DayPicker-Day": {
  cursor: 'default',
},

" .DayPicker-Footer": {
  paddingTop: '0.5rem',
},

" .DayPicker-TodayButton": {
  border: 'none',
  backgroundImage: 'none',
  backgroundColor: 'transparent',
  boxShadow: 'none',
  cursor: 'pointer',
  color: '#4a90e2',
  fontSize: '0.875em',
},

" .DayPicker-Day--today": {
  color: '#d0021b',
  fontWeight: '700',
},

" .DayPicker-Day--outside": {
  cursor: 'default',
  color: '#8b9898',
},

" .DayPicker-Day--disabled": {
  color: '#dce0e0',
  cursor: 'default',
},

" .DayPicker-Day--sunday": {
  backgroundColor: '#f7f8f8',
},

" .DayPicker-Day--sunday:not(.DayPicker-Day--today)": {
  color: '#dce0e0',
},

" .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside)": {
  position: 'relative',
  color: '#f0f8ff',
  backgroundColor: '#4a90e2',
  borderRadius: '5px',
},

" .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover": {
  backgroundColor: '#51a0fa',
},

" .DayPicker:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover": {
  backgroundColor: '#f0f8ff',
  borderRadius: '50%',
},


" .DayPickerInput": {
  display: 'inline-block',
},

".DayPickerInput-OverlayWrapper":  {
  position: 'relative',
},

" .DayPickerInput-Overlay": {
  left: '0',
  zIndex: '1',
  position: 'absolute',
  background: 'white',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
},

}

