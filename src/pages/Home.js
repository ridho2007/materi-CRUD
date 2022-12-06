import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
// import "../style/page.css";
function Home() {
  const [buku, setBuku] = useState([]);

  const getAll = () => {
    axios
      .get("http://localhost:8000/daftarBuku")
      .then((res) => {
        setBuku(res.data);
      })
      .catch((eror) => {
        alert("terjadi kesalahan " + eror);
      });
  };
  useEffect(() => {
    getAll();
  }, []);

  const deleteUser = async (id) => {
    axios.delete("http://localhost:8000/daftarBuku/" + id);
    alert("user berhasil di hapus ges.");
    getAll();
  };
  return (
    <div className="container my-5">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Deskripsi</th>
            <th>Pengarang</th>
            <th>Tahun Terbit</th>
            <th>Action</th>
          </tr>
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
                <td className="action">
                  <Button
                    variant="danger"
                    className="mx-1"
                    onClick={() => deleteUser(book.id)}
                  >
                    Hapus
                  </Button>
                  <a href={"/edit/" + book.id}>
                    <Button variant="warning" className="mx-1">
                      ubah
                    </Button>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
