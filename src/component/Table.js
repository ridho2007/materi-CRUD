import React,{useEffect,useState}from 'react' 
import "../style/tabel.css";
import axios from 'axios';

export default function Table() {
  const [buku, setBuku] = useState([]); //state berfungisi untuk menyimpan data sederhana
const [judul,setJudul]=useState("");
const [deskripsi,setDeskripsi]=useState("");
const [pengarang,setPengarang]=useState("");
const [tahunterbit,setTahunterbit]=useState("");
const [bookid,setBookId]=useState(0);
 
const getAllBuku = async () => {
    await axios.get("http://localhost:8000/daftarBuku")
      .then((response) => {
        setBuku(response.data);
      })
      .catch((eror) => {
        console.log(eror);
      });
  }
  const getBukuById = (book) => {
    setBookId(book.id);
    setJudul(book.judul);
    setDeskripsi(book.deskripsi);
    setPengarang(book.pengarang);
    setTahunterbit(book.tahunterbit);
  }
const updateBuku = async(e)=> {
    e.preventDefault();
    await axios.put("http://localhost:8000/daftarBuku/"+ bookid,{
        judul:judul,
        deskripsi:deskripsi,
        pengarang:pengarang,
        tahunterbit:tahunterbit,
    }).then(()=>{
        alert("sukses mengedit")
        window.location.reload();
    }).catch((err) => {
    alert(err)
    console.log(err);
})
}
  const deleteBuku = async(id)=> {
    await axios.delete("http://localhost:8000/daftarBuku/"+ id).then(() =>{
        alert("sukses hapus!")
    })
    window.location.reload();
  }
  useEffect(()=>{
    getAllBuku();
   
  }, [])
  return (
    <div>
    <div>
      <div><h1>form edit </h1>
      <form onSubmit={updateBuku}>
        <div className='input'>
            <label htmlFor="judul">judul:</label>
            <input type="text" name="judul" id="judul" value={judul} onChange={(e) => setJudul(e.target.value)}required/>
        </div>
        <div className='input'>
            <label htmlFor="deskripsi">Deskripsi:</label>
            <input type="text" name="deskripsi" id="deskripsi" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}required/>
        </div>
        <div className='input'>
            <label htmlFor="pengarang">pengarang:</label>
            <input type="text" name="pengarang" id="pengarang" value={pengarang} onChange={(e) => setPengarang(e.target.value)}required/>
        </div>
        <div className="input">
            <label htmlFor="tahunterbit">tahun terbit:</label>
        <input type="date" name="tahunterbit" id="tahunterbit" value={tahunterbit}  onChange={(e) => setTahunterbit(e.target.value)}/>
          </div>
        <br />
        <button type='submit'>update</button>
      </form>
      </div>
    </div>
    <div className="daftar">
      <h1>Daftar Buku</h1>
      <table>
        <thead>
          <th>No</th>
          <th>Nama</th>
          <th>Deskripsi</th>
          <th>Pengarang</th>
          <th>Tahun Terbit</th>
          <th>Action</th>
        </thead>
        <tbody>
          {buku.map((book, index) => {
            return (
            <tr key={book.id}>
              <td>{index + 1}</td>
              <td>{book.judul}</td>
              <td>{book.deskripsi}</td>
              <td>{book.pengarang}</td>
              <td>{book.tahunterbit}</td>
              <td className='action'  >
                <button className='edit' onClick={()=>getBukuById(book)}>edit</button>
              <button className='delete' onClick={()=>deleteBuku(book.id)}>delete</button></td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
    </div>
  );
}
