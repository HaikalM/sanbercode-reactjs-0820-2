import React, {Component, useState, useEffect} from 'react'

var daftarHargaBuah = [
	{nama: 'Semangka', harga: 10000, berat: 1000},
	{nama: 'Anggur', harga: 40000, berat: 500},
	{nama: 'Strawberry', harga: 30000, berat: 400},
	{nama: 'Jeruk', harga: 30000, berat: 1000},
	{nama: 'Mangga', harga: 30000, berat: 500},
]

const ListForm = () => {
	const [listDataBuah, setListDataBuah] = useState(daftarHargaBuah)
	const [inputNamaBuah, setInputNamaBuah] = useState('')
	const [inputHargaBuah, setInputHargaBuah] = useState('')
	const [inputBeratBuah, setInputBeratBuah] = useState('')

	const [indeksBuah, setIndeksBuah] = useState(-1)

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
		let indeksBuah = event.target.value
		let selectedBuah = listDataBuah[indeksBuah]

		setInputNamaBuah(selectedBuah.nama)
		setInputHargaBuah(selectedBuah.harga)
		setInputBeratBuah(selectedBuah.berat)
		setIndeksBuah(indeksBuah)
	}

	const handleDestroy = (event) => {
		let indeksBuah = event.target.value
		let dataBuah = listDataBuah
		dataBuah.splice(indeksBuah, 1)

		setListDataBuah([...dataBuah])
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		let inputNama = inputNamaBuah
		let inputHarga = inputHargaBuah
		let inputBerat = inputBeratBuah
		if(indeksBuah === -1){
			if(inputNama != '' && inputHarga != '' && inputBerat != ''){
				setListDataBuah([...listDataBuah, {nama: inputNama, harga: inputHarga, berat: inputBerat}])
				setInputNamaBuah('')
				setInputHargaBuah('')
				setInputBeratBuah('')
			}
		}else{
			let dataBuah = listDataBuah
			let selectedBuah = dataBuah[indeksBuah]
			if(inputNama !== ''){
				selectedBuah.nama = inputNama
			}
			if(inputHarga !== ''){
				selectedBuah.harga = inputHarga
			}
			if(inputBerat !== ''){
				selectedBuah.berat = inputBerat
			}

			setListDataBuah([...dataBuah])
			setInputNamaBuah('')
			setInputHargaBuah('')
			setInputBeratBuah('')
			setIndeksBuah(-1)
		}
	}

	return(
		<div className="card-container">
			<h1 className="text-center">Tabel Harga Buah</h1>
			<table border="1" width="100%" className="table-custom">
				<thead style={{background: '#aaa'}}>
					<tr>
						<th>Nama</th>
						<th>Harga</th>
						<th>Berat</th>
						<th>Aksi</th>
					</tr>
				</thead>
				<tbody style={{background: '#ff7f50'}}>
					{listDataBuah.map((data, indeksBuah)=>{
						return(
							<tr key={indeksBuah}>
								<td>{data.nama}</td>
								<td>{data.harga}</td>
								<td>{data.berat/1000} Kg</td>
								<td>
									<button value={indeksBuah} onClick={handleEdit} style={{marginRight: '5px'}}>Edit</button>
									<button value={indeksBuah} onClick={handleDestroy}>Delete</button>
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
