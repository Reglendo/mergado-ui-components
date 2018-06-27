import React, { PropTypes } from 'react';
import Code from 'rsg-components/Code';
import Markdown from 'rsg-components/Markdown';
import Group from 'react-group';
import { unquote, getType, showSpaces } from './util';

import s from './Props.css';

function renderRows(props) {
	const rows = [];

	for (const name in props) {
		const prop = props[name];
		rows.push(
			<tr className={s.proprow} key={name}>
				<td className={s.cell}><Code className={s.name}>{name}</Code></td>
				<td className={s.cell}><Code className={s.type}>{renderType(getType(prop))}</Code></td>
				<td className={s.cell}>{renderDefault(prop)}</td>
			</tr>
		);
		const description = renderDescription(prop)
		if(description.props.children && description.props.children[0] !== '') {
			rows.push(
				<tr key={`${name}--description`}>
					<td colSpan="3" className={s.cell + ' ' + s.cellDesc}>{renderDescription(prop)}</td>
				</tr>
			)
		}
	}
	return rows;
}

function renderType(type) {
	if (!type) {
		return 'unknown';
	}

	const { name } = type;
	switch (name) {
		case 'arrayOf':
			return `${type.value.name}[]`;
		case 'instanceOf':
			return type.value;
		default:
			return name;
	}
}

function renderDefault(prop) {
	if (prop.required) {
		return (
			<span className={s.required}>Required</span>
		);
	}
	else if (prop.defaultValue) {

		var value = prop.defaultValue.value;

		if(value.trim()[0] === '{') {
			return <pre style={{margin: 0, padding: 0, whiteSpace: 'pre', overflow: 'auto'}} className={s.pre}>{value.replace(/ {3}/g,' ').replace(/ +}/,'}')}</pre>
		}

		if(value.indexOf('“') > -1) {
			return (
				<em className={s.string}>{value.replace(/[“]/g,'').replace(/[”]/g,'')}</em>
			);
		} else {
			return (
				<Code className={s.code}><pre style={{margin: 0, padding: 0, whiteSpace: 'pre', overflow: 'auto'}}>{value}</pre></Code>
			);

		}
	}
	return '';
}

function renderDescription(prop) {
	const { description } = prop;
	const extra = renderExtra(prop);
	return (
		<Group separator={<br />}>
			{description && <Markdown text={description} inline />}
			{extra}
		</Group>
	);
}

function renderExtra(prop) {
	const type = getType(prop);

	if (!type) {
		return null;
	}

	switch (type.name) {
		case 'enum':
			return renderEnum(prop);
		case 'union':
			return renderUnion(prop);
		case 'shape':
			return renderShape(prop.type.value);
		case 'arrayOf':
			if (type.value.name === 'shape') {
				return renderShape(prop.type.value.value);
			}
			return null;
		default:
			return null;
	}
}

function renderEnum(prop) {
	if (!Array.isArray(getType(prop).value)) {
		return <span>{getType(prop).value}</span>;
	}

	const values = getType(prop).value.map(({ value }) => (
		<Code key={value}>{showSpaces(unquote(value))}</Code>
	));
	return (
		<span>One of: <Group separator=", " inline>{values}</Group></span>
	);
}

function renderUnion(prop) {
	if (!Array.isArray(getType(prop).value)) {
		return <span>{getType(prop).value}</span>;
	}

	const values = getType(prop).value.map(value => (
		<Code key={value.name} className={s.type}>{renderType(value)}</Code>
	));
	return (
		<span>One of type: <Group separator=", " inline>{values}</Group></span>
	);
}

function renderShape(props) {
	const rows = [];
	for (const name in props) {
		const prop = props[name];
		const defaultValue = renderDefault(prop);
		const description = prop.description;
		rows.push(
			<div key={name}>
				<Code className={s.name}>{name}</Code>{': '}
				<Code className={s.type}>{renderType(prop)}</Code>
				{defaultValue && ' — '}{defaultValue}
				{description && ' — '}
				{description && <Markdown text={description} inline />}
			</div>
		);
	}
	return rows;
}

export default function PropsRenderer({ props }) {

	if(Object.keys(props).length === 0) {
		return null
	} else {
		return (
			<table className={s.table}>
				<thead className={s.tableHead}>
					<tr >
						<th style={{ width: '20%'}} className={s.cellHeading}>Name</th>
						<th style={{ width: '40%'}} className={s.cellHeading}>Type</th>
						<th style={{ width: '40%'}} className={s.cellHeading}>Default</th>
					</tr>
				</thead>
				<tbody className={s.tableBody}>
					{renderRows(props)}
				</tbody>
			</table>
		);
	}
}
