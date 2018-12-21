import {connect} from "react-redux";
import dotProp from "dot-prop-immutable";
const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
const INIT_FORM = 'INIT_FORM';
export const changeField = (type, name, value) => ({
    type,
    name,
    value,
});

export const createBoundType = namespace =>
    (UPDATE_INPUT_VALUE + '.' + namespace);

export const duck = (namespace, defaultState, onStateChange, actionHandlers) =>
    (state = defaultState || {}, action) => {
        const boundType = createBoundType(namespace);

        const reducer = {
            [INIT_FORM]: (state,action) => {
                if(namespace === action.payload.form) {
                    return action.payload.data;
                }
                return state;
            },
            [boundType]: () => {
                const fieldPathWithoutNamespace = action.name.replace(namespace + '.', '');
                const newState = dotProp.set(state, fieldPathWithoutNamespace, action.value);
                return onStateChange && onStateChange(newState) || newState;
            },

            ...actionHandlers,
        };

        return reducer[action.type]
            ? reducer[action.type](state, action)
            : state;
    };


const getFieldNamespace = nameProp =>
  (nameProp.split('.')[0]);

const InputContainer = component =>
  connect(
    state => state,
    dispatch => ({
        dispatch,
    }),
    (state, dispatch, own) => {
        const namespace = getFieldNamespace(own.name);
        const onChange = event => {
            const namespace = getFieldNamespace(own.name);
            const type = createBoundType(namespace);

            if(!event.target) {
                const selected = [];
                event.map(function (o: any) {
                    selected.push(o.value);
                });
                dispatch.dispatch(changeField(type, own.name, selected.pop()));
                return dispatch.dispatch(changeField(type, own.name, event.join('|')));
            }
            const value = event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value;

            if(event.target.type === 'select-multiple') {
                const arry = Array.from(event.target.selectedOptions);
                const selected = [];
                arry.map(function(o:any) {
                    selected.push(o.value);
                } );
                dispatch.dispatch(changeField(type, own.name, value));
                return dispatch.dispatch(changeField(type, own.name, selected.join('|')));

            }
            return dispatch.dispatch(changeField(type, own.name, value));
        };

        const value = own.type === "radio" && own.value !== null ? own.value : (own.name && dotProp.get(state, own.name) !== undefined ? dotProp.get(state, own.name)  : '');

      return ({
            // Pass in received props first so defined props overwrite any preexisting ones.
            ...own,
            value: own.selectItem ? (value ? `${value}`.split('|') : []) : value,
            checked: (own.type === "radio" && own.value == dotProp.get(state, own.name)) || (own.type === "checkbox" && dotProp.get(state, own.name)),
            onChange: event => {
              const processedEvent = own.onChange ? own.onChange(event) : event;
              return processedEvent && onChange(processedEvent);
            },
            setValue: (value) => {
                dispatch.dispatch(changeField(createBoundType(namespace), own.name, value))
            }
        });
    },
)(component);

export default InputContainer;
