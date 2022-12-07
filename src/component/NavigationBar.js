import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import swal from 'sweetalert';
import { Modal, Form, InputGroup } from "react-bootstrap";


function NavigationBar() {
  const [show, setShow] = useState(false);
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [pengarang, setPengarang] = useState("");
  const [tahunterbit, setTahunterbit] = useState("");
// ini untuk tombol
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
// ini untuk menthod memabahkan

  const addUser = async (e) => {
    e.preventDefault();
   
    const data = {
      judul: judul,
      deskripsi: deskripsi,
      pengarang: pengarang,
      tahunterbit: tahunterbit,
    };
    await axios
   
      .post("http://localhost:8000/daftarBuku", data)
     
      .then(() => {
         swal ( " Ini judulnya! " , " ...dan berhasil! " );
        window.location.reload();
      })
      .catch((eror) => {
        alert("terjadi kesalahan" + eror);
      });
  };
// end
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            
              
              {/* ini untuk tombol add */}
              <li className="nav-item dropdown">
                <button className="btn" onClick={handleShow}>
                  tambah buku
                </button>
                <ul className="dropdown-menu">
                  <li>
                    
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              
            </ul>
           
          </div>
          <img 
                  src="https://www.photofunky.net/output/image/b/0/a/8/b0a8cd/photofunky.gif"
                  alt=""
                  style={{width:80}}
                />
        </div>
      </nav>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addUser}>
            <Form.Group className="mb-3" controlId="formBasictext">
              <Form.Label>Judul</Form.Label>
              <Form.Control type="text" placeholder="Masukkan Judul" onChange={(e) => setJudul(e.target.value)}required />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control type="text" placeholder="Deskripsi" onChange={(e) => setDeskripsi(e.target.value)}required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Tahun Terbit</Form.Label>
              <Form.Control type="date" placeholder="" onChange={(e) => setTahunterbit(e.target.value)}required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Pengarang</Form.Label>
              <Form.Control type="text" placeholder="Pengarang" onChange={(e) => setPengarang(e.target.value)}required />
            </Form.Group>
            {/* jika di close maka akan keluar */}
            <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* jika di save maka akan menyimpan */}
          <Button variant="primary" type="submit"  >
            Save Changes
          </Button>
          </Form>
        </Modal.Body>
      
      </Modal>
    </div>
  );
}
    {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">update</Button> */}
export default NavigationBar;
