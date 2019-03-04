import * as React from "react"
import css from "css"

import * as Color from "color"

import { Query } from "./index"
import { QueryItem } from "./item"
import Theme from "components/Theme"

interface IQueryListProps {
    name: string
    height: number | string
    options: Query[]
    value: string[]
    className?: string
    singleChoice?: boolean
    showInput: boolean
    activeFirst: boolean
    onChange?: (evt) => void
}

function sortOptions(queries) {
    if(!queries) {
        return
    }
    const q = [...queries]
    q.reverse()
    return (a,b) => {
        const activeA = q.indexOf(a.id)
        const activeB = q.indexOf(b.id)

        if (activeA < activeB) {
        return 1
        }
        if (activeA > activeB) {
        return -1
        }
        return 0
    }
}

const Options = ({name, options, value, singleChoice, showInput, onChange}) => {

    let allProductsOption = null
    options.map( (option,key) => {
        if(option.label === "♥ALLPRODUCTS♥") {
            allProductsOption = option.value
        }
    })


    return options
        .map(option => {
            const handler = () => {
                if(singleChoice) {
                    const selected = option.value
                    onChange(selected)
                    return
                }
                const index = value.indexOf(option.value);
                let selected = [...value]
                if (index < 0) { // wasn't selected
                    if( allProductsOption !== null && value.indexOf(allProductsOption) > -1 ) {
                        selected.splice(value.indexOf(allProductsOption), 1)
                    }
                    // select item
                    selected = singleChoice ? [option.value] : selected.concat(option.value)
                } else {
                    // unselect item
                    selected.splice(index, 1)
                }
                onChange(selected)
            }

            const checked = singleChoice ? value == option.value : value.indexOf(option.value) > -1
            return <QueryItem name={name}
                            option={option}
                            onClick={handler}
                            checked={checked}
                            singleChoice={singleChoice}
                            value={value}
                            showInput={showInput}
                            key={option.value + option.label}
                        />
        })
}

export const QueryList: React.SFC<IQueryListProps> = ({ name, className, options, value, height,
                                                            singleChoice, showInput, activeFirst, onChange, }) => {
    return (
        <List className={`muk-inputgroupv__list ${className || ""}`} height={height}>
            <Options name={name}
                    options={activeFirst ? options.sort(sortOptions(value)) : options}
                    value={value}
                    onChange={onChange}
                    singleChoice={singleChoice}
                    showInput={showInput}
                />
        </List>
    )
}

const List = css("ul")({
    listStyle: "none",
    margin: 0,
    padding: 0,
    border: "1px solid #dbcba3",
    overflow: "auto",
    background: "rgb(255,255,255)",
    height: "auto",
    borderRadius: Theme.radius,
    " li + li": {
        borderTop: `1px solid ${Color(Theme.decoration).fade(0.8)}`,
    },
}, (props: any) => { return {
    maxHeight: props.height === "auto" ? props.height : props.height + "px",
}})
