import * as React from "react"
import styled, {css} from "styled-components"
import { Query } from "./index"
import { QueryItem } from "./item"

interface IQueryListProps {
    name: string
    height: number | string
    options: Query[]
    value: number[]
    input: any
    className?: string
    singleChoice?: boolean
    showInput: boolean
    labels: any
}

const renderOptions = (name, options, value, input, singleChoice, showInput, labels) => {

    let allProductsOption = null
    options.map( (option,key) => {
        if(option.name === "♥ALLPRODUCTS♥") {
            allProductsOption = option.id
        }
    })

    return options
        .map(option => {
            const index = value.indexOf(option.id);
            const handler = () => {
                let selected = [...value]
                if (index < 0) { // wasn't selected
                    if( allProductsOption !== null && value.indexOf(allProductsOption) > -1 ) {
                        selected.splice(value.indexOf(allProductsOption), 1)
                    }
                    // select item
                    selected = singleChoice ? [option.id] : selected.concat(option.id)
                } else {
                    // unselect item
                    selected.splice(index, 1)
                }
                input.onChange(selected)
            }

            return <QueryItem name={name} option={option}
                            index={index} onClick={handler}
                            checked={value.indexOf(option.id) > -1}
                            singleChoice={singleChoice}
                            showInput={showInput}
                            labels={labels}
                            key={option.id + option.name}
                        />
        })
}

const QueryListComponent: React.SFC<IQueryListProps> = ({ name, className, options, value, input,
                                                            singleChoice, showInput, labels}) => {
    return (
        <ul className={`${name}__list ${className}`}>
            {renderOptions(name, options, value, input, singleChoice, showInput, labels)}
        </ul>
    )
}

export const QueryList = styled(QueryListComponent)`
    list-style: none;
    margin: 0;
    padding: 0;
    border: 1px solid #dbcba3;
    height: ${props => props.height === "auto" ? props.height : props.height + "px"};
    overflow: auto;
    background: rgba(255,255,255,0.2);
`
