import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {DataContext} from './DataContext'

const DataTable = () => {
	const [listDataTable, setListDataTable] = useContext(DataContext)
	const [input, setInput] = useState({id: null, name: '', price: 0, weight: 0})
	const [indeksBuah, setIndeksBuah] = useState(null)

	const handleEdit = (event) => {
		let indeksBuah = parseInt(event.target.value)
		//let selectedBuah = listDataTable[indeksBuah]
		let selectedBuah = listDataTable.find(item => item.id === indeksBuah)

		console.log(selectedBuah)
		setInput({name: selectedBuah.name, price: selectedBuah.price, weight: selectedBuah.weight})
		//setInputNamaBuah(selectedBuah.name)
		//setInputHargaBuah(selectedBuah.price)
		//setInputBeratBuah(selectedBuah.weight)

		setIndeksBuah(indeksBuah)
	}

	const handleDestroy = (event) => {
		let indeksBuah = parseInt(event.target.value)
		//let dataBuah = listDataTable
		//dataBuah.splice(indeksBuah, 1)
		axios.delete(`http://backendexample.sanbercloud.com/api/contestants/${indeksBuah}`)
		.then(res => {
			let newListDataTable = listDataTable.filter(x => x.id !== indeksBuah)
			setListDataTable([...newListDataTable])
			console.log(res);
			console.log(res.data);
		})

		setListDataTable([...listDataTable])
	}

	return(
		<table border="1" width="100%" className="table-custom">
			<thead style={{background: '#aaa'}}>
				<tr>
					<th>No.</th>
					<th>Nama</th>
					<th>Harga</th>
					<th>Berat</th>
					<th>Aksi</th>
				</tr>
			</thead>
			<tbody style={{background: '#ff7f50'}}>
				{listDataTable !== null && listDataTable.map((item, index)=>{
					return(
						<tr key={item.id}>
							<td>{index+1}</td>
							<td>{item.name}</td>
							<td>{item.price}</td>
							<td>{item.weight/1000} Kg</td>
							<td>
								<button value={item.id} onClick={handleEdit} style={{marginRight: '5px'}}>Edit</button>
								<button value={item.id} onClick={handleDestroy}>Delete</button>
							</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)

}

export default DataTable
