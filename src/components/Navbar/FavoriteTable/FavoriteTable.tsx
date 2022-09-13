import { Person } from '@/models';
import { removeFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


export interface FavoriteTableInterface {}

const FavoriteTable: React.FC<FavoriteTableInterface> = () => {
	const dispatch = useDispatch()
	const stateFavorites = useSelector((store: AppStore) => store.favorites)
	const handleOnClick = (person: Person) =>	{
		dispatch(removeFavorite(person))
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
					<IconButton color="secondary" aria-label="favorites" component="label" onClick={() => handleOnClick(params.row)}>
						<Delete />
					</IconButton>
				}
			</>
		},
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			minWidth: 100,
			renderCell: (params: GridRenderCellParams) => <>
				{params.value}
			</>
		},
		{
			field: 'category',
			headerName: 'Category',
			flex: 1,
			minWidth: 100,
			renderCell: (params: GridRenderCellParams) => <>
				{params.value}
			</>
		},
		{
			field: 'company',
			headerName: 'Company',
			flex: 1,
			minWidth: 100,
			renderCell: (params: GridRenderCellParams) => <>
				{params.value}
			</>
		},
		{
			field: 'levelOfHappiness',
			headerName: 'Level of happiness',
			flex: 1,
			minWidth: 100,
			renderCell: (params: GridRenderCellParams) => <>
				{params.value}
			</>
		}
	]
	return (
		<DataGrid
			rows={stateFavorites}
			columns={columns}
			pageSize={pageSize}
			rowsPerPageOptions={[pageSize]}
			disableColumnSelector
			disableSelectionOnClick
			autoHeight
			// similar to map, assigns an id to the row
			getRowId={(row: any) => row.id}
		/>
	)
};

export default FavoriteTable;

