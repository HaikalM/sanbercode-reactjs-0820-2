import React, {Component, useState, useEffect} from 'react'
import axios from 'axios'

var daftarHargaBuah = [
	{nama: 'Semangka', harga: 10000, berat: 1000},
	{nama: 'Anggur', harga: 40000, berat: 500},
	{nama: 'Strawberry', harga: 30000, berat: 400},
	{nama: 'Jeruk', harga: 30000, berat: 1000},
	{nama: 'Mangga', harga: 30000, berat: 500},
]

const ListForm = () => {
	const [listDataBuah, setListDataBuah] = useState(null)
	const [inputNamaBuah, setInputNamaBuah] = useState('')
	const [inputHargaBuah, setInputHargaBuah] = useState('')
	const [inputBeratBuah, setInputBeratBuah] = useState('')

	const [indeksBuah, setIndeksBuah] = useState(null)

  useEffect( () => {
		if(listDataBuah === null){
			axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
			.then(res => {
				console.log(res)
				setListDataBuah(res.data)
				// lakukan pengolahan data
			})
		}
  })

	const handleChangeNamaBuah = (event) => {
		let value = event.target.value
		setInputNamaBuah(value)
	}

	const handleChangeHargaBuah = (event) => {
		let value = event.target.value
		setInputHargaBuah(value)
	}

	const handleChangeBeratBuah = (event) => {
		let value = event.target.value
		setInputBeratBuah(value)
	}

	const handleEdit = (event) => {
		let indeksBuah = parseInt(event.target.value)
		//let selectedBuah = listDataBuah[indeksBuah]
		let selectedBuah = listDataBuah.find(item => item.id === indeksBuah)

		console.log(selectedBuah)
		setInputNamaBuah(selectedBuah.name)
		setInputHargaBuah(selectedBuah.price)
		setInputBeratBuah(selectedBuah.weight)

		setIndeksBuah(indeksBuah)
	}

	const handleDestroy = (event) => {
		let indeksBuah = parseInt(event.target.value)
		//let dataBuah = listDataBuah
		//dataBuah.splice(indeksBuah, 1)
		axios.delete(`http://backendexample.sanbercloud.com/api/contestants/${indeksBuah}`)
		.then(res => {
			let newListDataBuah = listDataBuah.filter(x => x.id !== indeksBuah)
			setListDataBuah([...newListDataBuah])
			console.log(res);
			console.log(res.data);
		})

		setListDataBuah([...listDataBuah])
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		let inputNama = inputNamaBuah
		let inputHarga = inputHargaBuah
		let inputBerat = inputBeratBuah
		if(indeksBuah === null){
			axios.post(`http://backendexample.sanbercloud.com/api/fruits`, { name: inputNamaBuah, price: inputHargaBuah, weight: inputBeratBuah })
				.then(res => {
					let data = res.data
					setListDataBuah([...listDataBuah, {id: data.id, name: data.name, price: data.price, weight: data.weight}])
					console.log(res)
					// lakukan handle ketika sukses
				})
		}else{
			let newListDataBuah = listDataBuah.map(item => {
				if (item.id === indeksBuah){
					item.name = inputNamaBuah
					item.price = inputHargaBuah
					item.weight = inputBeratBuah
				}
				return item
			})
			axios.put(`http://backendexample.sanbercloud.com/api/fruits/${indeksBuah}`, { name: inputNamaBuah, price: inputHargaBuah, weight: inputBeratBuah })
			.then(res => {
				console.log(res)
				console.log(listDataBuah)
				setListDataBuah(newListDataBuah)
				// lakukan handle ketika sukses
			})
			setInputNamaBuah('')
			setInputHargaBuah('')
			setInputBeratBuah('')
			setIndeksBuah(null)
			//let dataBuah = listDataBuah
			//let selectedBuah = listDataBuah.filter(x => x.id !== indeksBuah)

			//if(inputNama !== ''){
				//selectedBuah.name = inputNama
			//}
			//if(inputHarga !== ''){
				//selectedBuah.price = inputHarga
			//}
			//if(inputBerat !== ''){
				//selectedBuah.weight = inputBerat
			//}

			//setListDataBuah([...dataBuah])
		}
	}

	return(
		<div className="card-container">
			<h1 className="text-center">Tabel Harga Buah</h1>
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
					{listDataBuah !== null && listDataBuah.map((item, index)=>{
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

			<form onSubmit={handleSubmit} style={{marginTop: '10px'}} className='form-container'>
				<div className="form-group">
					<div className="form-label">
						<label htmlFor="inputNamaBuah">Nama Buah</label>
					</div>
					<input
						value={inputNamaBuah}
						onChange={handleChangeNamaBuah}
						className="form-input" type="text" name='inputNamaBuah' />
				</div>
				<div className="form-group">
					<div className="form-label">
						<label htmlFor="inputHargaBuah">Harga</label>
					</div>
					<input
						value={inputHargaBuah}
						onChange={handleChangeHargaBuah}
						className="form-input" type="text" name='inputHargaBuah' />
				</div>
				<div className="form-group">
					<div className="form-label">
						<label htmlFor="inputBeratBuah">Berat(mg)</label>
					</div>
					<input
						value={inputBeratBuah}
						onChange={handleChangeBeratBuah}
						className="form-input" type="text" name='inputBeratBuah' />
				</div>
				<div className="form-group">
					<button
						type="submit"
						className="btn btn-white btn-rounded">Kirim</button>
				</div>
			</form>
		</div>
	)
}
export default ListForm
