import React, {useState,useEffect} from 'react';
import {Form,InputGroup} from "react-bootstrap"
import { useHistory,useParams} from "react-router-dom";
import axios from "axios";
// import  "../style/pages.css" 

function Edit() {
    const param = useParams();
    const [judul,setJudul] = useState("");
    const [deskripsi,setDeskripsi] = useState("");
    const [pengarang,setPengarang] = useState("");
    const [tahunterbit,setTahunterbit] = useState("");

const history = useHistory();
useEffect(() =>{
    axios
    .get("http://localhost:8000/daftarBuku/"+ param.id)
    .then((response) => {
        const newBook = response.data;
        setJudul(newBook.judul);
        setDeskripsi(newBook.deskripsi);
        setPengarang(newBook.pengarang);
        setTahunterbit(newBook.tahunterbit);
    })
    .catch((eror)=>{
        alert("terjadi kesalahan sir!" + eror);
    });
},[]);

const submitActionHandler = async (event) =>{
    event.preventDefault();
    await axios.put("http://localhost:8000/daftarBuku/" +param.id,{
        judul:judul,
        deskripsi:deskripsi,
        pengarang:pengarang,
        tahunterbit:tahunterbit,
    })
    .then(()=>{
        alert("Berhasil mengubah data user ygy");
        history.push("/");
        window.location.reload();
    })
    .catch((eror)=>{
        alert("terjadi kesalahan:" + eror);
    });
};
  return (
    <div className='edit mx-5'>
        <div className="container my-5">
            <Form onSubmit={submitActionHandler}>
                <div className="name mb-3">
                    <Form.Label>
                        <strong>judul</strong>
                    </Form.Label>
                    <InputGroup className="d-flex gap-3">
                        <Form.Control
                        placeholder="Judul"
                        value={judul}
                        onChange={(e) => setJudul (e.target.value)}
                        />
                    </InputGroup>
                </div>
                <div className="place-of-birth mb-3">
                    <Form.Label>
                        <strong>deskripsi</strong>
                    </Form.Label>
                    <InputGroup className="d-flex gap-3">
                        <Form.Control
                        placeholder="Deskripsi"
                        value={deskripsi}
                        onChange={(e) => setDeskripsi (e.target.value)}
                        />
                    </InputGroup>
                </div>
                <div className="place-of-birth mb-3">
                    <Form.Label>
                        <strong>tahunterbit</strong>
                    </Form.Label>
                    <InputGroup className="d-flex gap-3">
                        <Form.Control
                        type='date'
                        placeholder="Tahunterbit"
                        value={tahunterbit}
                        onChange={(e) => setTahunterbit (e.target.value)}
                        />
                    </InputGroup>
                </div>
                <div className="birth-date mb-3">
                    <Form.Label>
                        <strong>pengarang</strong>
                    </Form.Label>
                    <div className="d-flex gap-3">
                    <InputGroup className="d-flex gap-3">
                        <Form.Control
                        type="text"
                        placeholder="Pengarang"
                        value={pengarang}
                        onChange={(e) => setPengarang (e.target.value)}
                        />
                    </InputGroup>
                </div>
                </div>
                <div className="d-flex justify-content-end align-items-center mt-2">
                    <button className='buton btn' type="submit">
                        Save
                    </button>
                </div>
            </Form>
        </div>
    </div>
  );
}

export default Edit