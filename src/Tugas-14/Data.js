import React from 'react'
import {DataProvider} from './DataContext.js'
import DataTable from './DataTable.js'
import Form from './Form.js'

const Data = () => {
	return(
		<DataProvider>
			<DataTable />
			<Form />
		</DataProvider>
	)
}

export default Data
