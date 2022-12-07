import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
// import "../style/page.css";
function Home() {
  const [buku, setBuku] = useState([]);
  // ini untuk memunculkan table db
  const getAll = () => {
    axios
      .get("http://localhost:8000/daftarBuku")
      .then((res) => {
        setBuku(res.data);
      })
      .catch((eror) => {
        Swal.fire({
          icon: 'error',
          title: 'memunculkan data',
          showConfirmButton: false,
          timer: 1500
        })
      });
  };
  useEffect(() => {
    getAll();
  }, []);
  // method mendelet
  const deleteUser = async (id) => {
    axios.delete("http://localhost:8000/daftarBuku/" + id);
    Swal.fire({
      icon: 'success',
      title: 'Berhasil di delete',
      showConfirmButton: false,
      timer: 1500
    })
    getAll();
  };
  return (
    <div className="container my-5">
      {buku.length !== 0 ? (
        <>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Deskripsi</th>
                <th>Pengarang</th>
                <th>Tahun Terbit</th>

                {localStorage.getItem("id") !== null ? <th>Action</th> : <></>}
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
                    {localStorage.getItem("id") !== null ? (
                      <td className="action">
                        <Button
                          variant="danger"
                          className="mx-1"
                          onClick={() => deleteUser(book.id)}
                        >
                          Hapus
                        </Button>
                        {/* tombol ini akan mengarah ke page lain */}
                        <a href={"/edit/" + book.id}>
                          <Button variant="warning" className="mx-1">
                            ubah
                          </Button>
                        </a>
                      </td>
                    ) : (
                      <></>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <>
          <div>TIDAK ADA DATA</div>
        </>
      )}
    </div>
  );
}

export default Home;
