import React, {Component} from 'react'
import './index.css'

function TableDataRow(props){
	return(
		<tr>
			<td>{props.data.nama}</td>
			<td>{props.data.harga}</td>
			<td>{props.data.berat/1000} Kg</td>
		</tr>
	)
}

let daftarHargaBuah = [
	{nama: 'Semangka', harga: 10000, berat: 1000},
	{nama: 'Anggur', harga: 40000, berat: 500},
	{nama: 'Strawberry', harga: 30000, berat: 400},
	{nama: 'Jeruk', harga: 30000, berat: 1000},
	{nama: 'Mangga', harga: 30000, berat: 500},
]

class TableComponent extends Component {
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
						</tr>
					</thead>
					<tbody style={{background: '#ff7f50'}}>
						{daftarHargaBuah.map(el=>{
							return(
								<TableDataRow data={el}/>
							)
						})}
					</tbody>
				</table>
			</div>
		)
	}
}

export default TableComponent
