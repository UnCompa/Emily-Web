import React, { useState } from "react";
import { uploadFile } from "../firebase/storage";
import { createImg } from "../utils/apiImagenes";

export default function SubmitImg() {
  const [file, setFile] = useState()
  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [loading, setLoading] = useState(false)
  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(file);
    console.log(name);
    console.log(description);
    setLoading(true)
    const url = await uploadFile(file,file.name)
    console.log(url);
    const newImagen = {
      url,
      name,
      description
    }

    const img = await createImg(newImagen)
    setName("")
    setDescription("")
    window.location.href = "/galeria";
  }
  return (
    <>
      <form onSubmit={e => handleSubmit(e)} className="flex flex-col container mx-auto px-8">
        <label className="py-2 font-bold" for="">Nombre</label>
        <input onChange={(e) => setName(e.target.value)} className="bg-zinc-900 border-Turquesa border rounded outline-none p-2 font-light shadow-xl focus:shadow-Turquesa/30" type="text" required />
        <label className="py-2 font-bold" for="">Descripcion</label>
        <input onChange={(e) => setDescription(e.target.value)} className="bg-zinc-900 border-Turquesa border rounded outline-none p-2 font-light shadow-xl focus:shadow-Turquesa/30" type="text" required />
        <label className="py-2 font-bold" for="">Archivo</label>
        <div className="flex items-center gap-x-2">
        <label htmlFor="file" className="cursor-pointer bg-Turquesa text-black px-4 py-2 rounded-xl">Cargar Imagen</label>
        {file && <p>{file.name}</p>}
        </div>
        <button disabled={loading} className="bg-Turquesa disabled:bg-sky-600 my-4 py-2 rounded-xl text-black font-bold shadow-lg hover:shadow-Turquesa/30 transition-all">Subir</button>
        <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} required hidden/>
      </form>
    </>
  );
}
