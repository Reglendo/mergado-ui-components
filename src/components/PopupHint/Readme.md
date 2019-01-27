Example

    var IconTrash = require('@reglendo/mergado-ui-icons/lib/icons/IconTrashO').default;
    <span>
        I need hint <PopupHint hint={true}>
            I am hint
        </PopupHint><br/>

        Hint with custom icon <PopupHint icon={<IconTrash />}>
            I am hint
        </PopupHint>
    </span>