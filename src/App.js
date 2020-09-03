import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
          //Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
          //Learn React
        //</a>
      //</header>
    //</div>
		<div className="card-container">
			<h1 className="text-center">Form Pembelian Buah</h1>
			<form action="#" className="form-container">
				<div className="form-group">
					<div className="form-label">
						<label for="nama-pelanggan" for="nama-pelanggan">Nama Pelanggan</label>
					</div>
					<div>
						<input className="form-input" name="nama-pelanggan" />
					</div>
				</div>
				<div className="form-group">
					<div className="form-label vertical-align-end">
						<label className="position-bottom" for="daftar-item">Daftar Item</label>
					</div>
					<div>
						<div className="checkbox-group" id="daftar-item">
							<input type="checkbox" className="form-input" id="item1" name="item1" value="semangka" />
							<label for="item1">Semangka</label>
						</div>
						<div className="checkbox-group">
							<input type="checkbox" className="form-input" id="item2" name="item2" value="jeruk" />
							<label for="item2">Jeruk</label>
						</div>
						<div className="checkbox-group">
							<input type="checkbox" className="form-input" id="item3" name="item3" value="nanas" />
							<label for="item3">Nanas</label>
						</div>
						<div className="checkbox-group">
							<input type="checkbox" className="form-input" id="item4" name="item4" value="salak" />
							<label for="item4">Salak</label>
						</div>
						<div className="checkbox-group">
							<input type="checkbox" className="form-input" id="item5" name="item5" value="anggur" />
							<label for="item5">Anggur</label>
						</div>
					</div>
				</div>
				<div className="form-group">
					<button type="submit" className="btn btn-white btn-rounded">Kirim</button>
				</div>
			</form>

		</div>
  );
}

export default App;
