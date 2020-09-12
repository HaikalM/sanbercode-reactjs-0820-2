import React, {useEffect, useState, createContext} from 'react'
export const DataContext = createContext()

export const DataProvider = props => {
	const [backgroundMode, setBackgroundMode] = useState('dark-mode')

	return(
		<DataContext.Provider value={[backgroundMode, setBackgroundMode]}>
			{props.children}
		</DataContext.Provider>
	)
}

export default DataProvider
