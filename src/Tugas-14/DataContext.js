import React, {useEffect, useState, createContext} from 'react'
import axios from 'axios'
export const DataContext = createContext()

export const DataProvider = props => {
	const [listDataTable, setListDataTable] = useState([])
	const [dataLoaded, setDataLoaded] = useState('')

  useEffect( () => {
		if(dataLoaded === ''){
			axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
			.then(res => {
				setListDataTable(res.data)
			})
			setDataLoaded(true)
		}
  })

	return(
		<DataContext.Provider value={[listDataTable, setListDataTable]}>
			{props.children}
		</DataContext.Provider>
	)
}

export default DataProvider
