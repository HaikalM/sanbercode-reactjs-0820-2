import React, {useState, useContext} from 'react'
import axios from 'axios'
import {DataContext} from './DataContext'

const Form = () => {
	const [listDataTable, setListDataTable] = useContext(DataContext)
	const [input, setInput] = useState({id: null, name: '', price: 0, weight: 0})
	//const [indeksBuah, setIndeksBuah] = useState(null)

	const handleChange = (event) => {
		let inputType = event.target.name
		switch(inputType){
			case 'name':{
				setInput({...input, name: event.target.value})
				break
			}
			case 'price':{
				setInput({...input, price: event.target.value})
				break
			}
			case 'weight':{
				setInput({...input, weight: event.target.value})
				break
			}
			default: {break}
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		//let inputNama = inputNamaBuah
		//let inputHarga = inputHargaBuah
		//let inputBerat = inputBeratBuah
		if(input.id === null){
			axios.post(`http://backendexample.sanbercloud.com/api/fruits`, { name: input.name, price: input.price, weight: input.weight })
				.then(res => {
					let data = res.data
					setListDataTable([...listDataTable, {id: data.id, name: data.name, price: data.price, weight: data.weight}])
					console.log(res)
					// lakukan handle ketika sukses
				})
		}else{
			let newListDataTable = listDataTable.map(item => {
				if (item.id === input.id){
					item.name = input.name
					item.price = input.price
					item.weight = input.weight
				}
				return item
			})
			axios.put(`http://backendexample.sanbercloud.com/api/fruits/${input.id}`, { name: input.name, price: input.price, weight: input.weight })
			.then(res => {
				console.log(res)
				console.log(listDataTable)
				setListDataTable(newListDataTable)
				// lakukan handle ketika sukses
			})
			setInput({id: null, name: '', price: '', weight: ''})
			//setInputNamaBuah('')
			//setInputHargaBuah('')
			//setInputBeratBuah('')
			//setIndeksBuah(null)
		}
	}

	return(
		<form onSubmit={handleSubmit} style={{marginTop: '10px'}} className='form-container'>
			<div className="form-group">
				<div className="form-label">
					<label htmlFor="name">Nama Buah</label>
				</div>
				<input
					value={input.name}
					name='name'
					onChange={handleChange}
					className="form-input" type="text" />
			</div>
			<div className="form-group">
				<div className="form-label">
					<label htmlFor="inputHargaBuah">Harga</label>
				</div>
				<input
					value={input.price}
					name='price'
					onChange={handleChange}
					className="form-input" type="text" />
			</div>
			<div className="form-group">
				<div className="form-label">
					<label htmlFor="inputBeratBuah">Berat(mg)</label>
				</div>
				<input
					value={input.weight}
					name='weight'
					onChange={handleChange}
					className="form-input" type="text" />
			</div>
			<div className="form-group">
				<button
					type="submit"
					className="btn btn-white btn-rounded">Kirim</button>
			</div>
		</form>
	)
}

export default Form
