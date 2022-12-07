import axios from 'axios';
import React ,{useState}from 'react'
import"../style/form.css"

export default function Form() {
    const [judul,setJudul]= useState("");
    const [deskripsi,setDeskripsi]= useState("");
    const [pengarang,setPengarang]= useState("");
    const [tahunterbit,setTahunterbit]= useState("");
    const addBuku = async(e)=>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/daftarBuku",{
                judul: judul,
                deskripsi: deskripsi,
                pengarang: pengarang,
                tahunterbit: tahunterbit,
            })
            window.location.reload();
        }catch (eror){
            console.log(eror);
        }
    }
  return (
    <div>
        <h1>Form Tambah Buku</h1>
        <form onSubmit={addBuku}>
          <div className="input">
            <label htmlFor="judul">judul:</label>
        <input type="text" name="judul" id="judul" onChange={(e) => setJudul(e.target.value)} />
          </div>
          <div className="input">
            <label htmlFor="deskripsi">deskripsi:</label>
        <input type="text" name="deskripsi" id="deskripsi"  onChange={(e) => setDeskripsi(e.target.value)}/>
          </div>
          <div className="input">
            <label htmlFor="pengarang">pengarang:</label>
        <input type="text" name="pengarang" id="pengarang"  onChange={(e) => setPengarang(e.target.value)}/>
          </div>
          <div className="input">
            <label htmlFor="tahunterbit">tahun terbit:</label>
        <input type="date" name="tahunterbit" id="tahunterbit"  onChange={(e) => setTahunterbit(e.target.value)}/>
          </div>
          <br />
          <button type='submit'>Tambahkan</button>
        </form>
    </div>
  )
}

