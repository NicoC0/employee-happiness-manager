import React, { useState } from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from '@/data';
import { Person } from '@/models';
import { Checkbox } from '@mui/material';


export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
	const [selectedEmployee, setSelectedEmployee] = useState<Person[]>([])

	// if true, checkbox is checked
	const findPerson = (person: Person) => !!selectedEmployee.find(employee => employee.id === person.id)

	const filterPerson = (person: Person) => selectedEmployee.filter(employee => employee.id !== person.id)

	const handleOnChange = (person: Person) => {
		setSelectedEmployee(findPerson(person) ? filterPerson(person) : [...selectedEmployee, person])
	}

	const pageSize = 5;
	const columns = [
		{
			field: 'action',
			type: 'actions',
			sortable: false,
			headerName: '',
			width: 15,
			renderCell: (params: GridRenderCellParams) => <>
				{
					// !!: transforms the resolution of that method into true or false
					<Checkbox  size='small'
						checked={findPerson(params.row)}
						onChange={() => handleOnChange(params.row)}
					/>
				}
			</>
		},
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>
				{params.value}
			</>
		},
		{
			field: 'category',
			headerName: 'Category',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>
				{params.value}
			</>
		},
		{
			field: 'company',
			headerName: 'Company',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>
				{params.value}
			</>
		}
	]
	return (
		<DataGrid
			rows={People}
			columns={columns}
			pageSize={pageSize}
			rowsPerPageOptions={[pageSize]}
			disableColumnSelector
			disableSelectionOnClick
			autoHeight
			// similar to map, assigns an id to the row
			getRowId={(row: any) => row.id}
		/>
	);
};

export default Home;

