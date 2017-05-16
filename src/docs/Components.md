To include MUK stylesheet in your project you may use SASS import:

    <code>@import "node_modules/mergado-ui-kit/dist/css/style.min"</code>

or simply add link rel to html header:

    <code>&lt;link rel="stylesheet" href="/node_modules/mergado-ui-kit/dist/css/style.min.css" /&gt;</code>

In order to use react components, you can import them from /lib index:

    <code>import {Button} from "mergado-ui-kit/lib"</code>

Better method is to include component directly, because tree shaking is currently in not-very-good state within react:
    
    <code>import Button  from 'mergado-ui-kit/lib/components/Forms/Button'</code>

