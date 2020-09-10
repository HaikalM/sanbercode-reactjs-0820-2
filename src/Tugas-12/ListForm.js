import React, {Component} from 'react'

var daftarHargaBuah = [
	{nama: 'Semangka', harga: 10000, berat: 1000},
	{nama: 'Anggur', harga: 40000, berat: 500},
	{nama: 'Strawberry', harga: 30000, berat: 400},
	{nama: 'Jeruk', harga: 30000, berat: 1000},
	{nama: 'Mangga', harga: 30000, berat: 500},
]

class ListForm extends Component{
	constructor(props){
		super(props)
		this.state = {
			listDataBuah: daftarHargaBuah,
			inputNamaBuah: '',
			inputHargaBuah: '',
			inputBeratBuah: '',
			index: -1
		}
		//this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChangeNamaBuah = (event) => {
		let value = event.target.value
		this.setState({
			inputNamaBuah: value
		})
	}

	handleChangeHargaBuah = (event) => {
		let value = event.target.value
		this.setState({
			inputHargaBuah: value
		})
	}

	handleChangeBeratBuah = (event) => {
		let value = event.target.value
		this.setState({
			inputBeratBuah: value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		let index = this.state.index
		let inputNama = this.state.inputNamaBuah
		let inputHarga = this.state.inputHargaBuah
		let inputBerat = this.state.inputBeratBuah
		if(index === -1){
			if(inputNama != '' && inputHarga != '' && inputBerat != ''){
				this.setState({
					listDataBuah: [...this.state.listDataBuah, {nama: inputNama, harga: inputHarga, berat: inputBerat}],
					inputNamaBuah: '',
					inputHargaBuah: '',
					inputBeratBuah: ''
				})
			}
		}else{
			let dataBuah = this.state.listDataBuah
			let selectedBuah = dataBuah[index]
			if(inputNama !== ''){
				selectedBuah.nama = inputNama
			}
			if(inputHarga !== ''){
				selectedBuah.harga = inputHarga
			}
			if(inputBerat !== ''){
				selectedBuah.berat = inputBerat
			}

			this.setState({
				listDataBuah: [...dataBuah],
				inputNamaBuah: '',
				inputHargaBuah: '',
				inputBeratBuah: '',
				index: -1
			})
		}

	}

	handleEdit = (event) => {
		let index = event.target.value
		let selectedBuah = this.state.listDataBuah[index]
		this.setState({
			inputNamaBuah: selectedBuah.nama,
			inputHargaBuah: selectedBuah.harga,
			inputBeratBuah: selectedBuah.berat,
			index,
		})
	}

	handleDestroy = (event) => {
		let index = event.target.value
		let dataBuah = this.state.listDataBuah
		dataBuah.splice(index, 1)
		this.setState({
			listDataBuah: [...dataBuah]
		})

	}

	render(){
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
						{this.state.listDataBuah.map((data, index)=>{
							return(
								<tr key={index}>
									<td>{data.nama}</td>
									<td>{data.harga}</td>
									<td>{data.berat/1000} Kg</td>
									<td>
										<button value={index} onClick={this.handleEdit} style={{marginRight: '5px'}}>Edit</button>
										<button value={index} onClick={this.handleDestroy}>Delete</button>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>

				<form onSubmit={this.handleSubmit} style={{marginTop: '10px'}} className='form-container'>
					<div className="form-group">
						<div className="form-label">
							<label htmlFor="inputNamaBuah">Nama Buah</label>
						</div>
						<input
							value={this.state.inputNamaBuah}
							onChange={this.handleChangeNamaBuah}
							className="form-input" type="text" name='inputNamaBuah' />
					</div>
					<div className="form-group">
						<div className="form-label">
							<label htmlFor="inputHargaBuah">Harga</label>
						</div>
						<input
							value={this.state.inputHargaBuah}
							onChange={this.handleChangeHargaBuah}
							className="form-input" type="text" name='inputHargaBuah' />
					</div>
					<div className="form-group">
						<div className="form-label">
							<label htmlFor="inputBeratBuah">Berat(mg)</label>
						</div>
						<input
							value={this.state.inputBeratBuah}
							onChange={this.handleChangeBeratBuah}
							className="form-input" type="text" name='inputBeratBuah' />
					</div>
					<div className="form-group">
						<button
							type="submit"
							value={this.state.teksTombol}
							className="btn btn-white btn-rounded">Kirim</button>
					</div>
				</form>
			</div>
		)

	}

}

export default ListForm
