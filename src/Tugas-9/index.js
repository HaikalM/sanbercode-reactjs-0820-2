import React from 'react'

function FormComponent(){
	return(
		<div className="card-container">
			<h1 className="text-center">Form Pembelian Buah</h1>
			<form action="#" className="form-container">
				<div className="form-group">
					<div className="form-label">
						<label htmlFor="nama-pelanggan" htmlFor="nama-pelanggan">Nama Pelanggan</label>
					</div>
					<div>
						<input className="form-input" name="nama-pelanggan" />
					</div>
				</div>
				<div className="form-group">
					<div className="form-label vertical-align-end">
						<label className="position-bottom" htmlFor="daftar-item">Daftar Item</label>
					</div>
					<div>
						<div className="checkbox-group" id="daftar-item">
							<input type="checkbox" className="form-input" id="item1" name="item1" value="semangka" />
							<label htmlFor="item1">Semangka</label>
						</div>
						<div className="checkbox-group">
							<input type="checkbox" className="form-input" id="item2" name="item2" value="jeruk" />
							<label htmlFor="item2">Jeruk</label>
						</div>
						<div className="checkbox-group">
							<input type="checkbox" className="form-input" id="item3" name="item3" value="nanas" />
							<label htmlFor="item3">Nanas</label>
						</div>
						<div className="checkbox-group">
							<input type="checkbox" className="form-input" id="item4" name="item4" value="salak" />
							<label htmlFor="item4">Salak</label>
						</div>
						<div className="checkbox-group">
							<input type="checkbox" className="form-input" id="item5" name="item5" value="anggur" />
							<label htmlFor="item5">Anggur</label>
						</div>
					</div>
				</div>
				<div className="form-group">
					<button type="submit" className="btn btn-white btn-rounded">Kirim</button>
				</div>
			</form>

		</div>
	)
}

export default FormComponent
