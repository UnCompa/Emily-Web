import { useEffect, useState } from "react";
import { deleteImg, findImg } from "../utils/apiImagenes";

export default function DetailsImg({ id }) {
  const [data, setData] = useState({});
  console.log(data);

  const handleDelete = async (id) => {
    const res = await deleteImg(id);
    console.log(res);
  };
  useEffect(() => {
    const loadImg = async () => {
      const data = await findImg(id);
      console.log(data);
      setData(data);
    };
    loadImg();
  }, []);
  return (
    <>
      <main className="text-white bg-zinc-950 min-h-screen py-4">
        <h1 className="font-Anta text-3xl text-center">Detalles</h1>
        <section className="bg-zinc-900 w-full h-full container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 my-4 rounded">
          <div className="flex flex-col p-4">
            <h2 className="font-bold font-Anta text-4xl">{data.name}</h2>
            <p className="font-light text-lg font-Anta">{data.description}</p>
            <div className="flex flex-col justify-end">
              <button
                onClick={() => handleDelete(data.id)}
                className="bg-red-700 py-1 rounded-lg my-4 hover:bg-red-800 transition-all"
              >
                Borrar
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:col-span-2">
            <a href={data.url} className="hover:brightness-75 transition-all">
            <img
              src={data.url}
              alt=""
              className="min-h-96 h-max max-h-[40em] border-2 border-MoradoPastel p-2"
            />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
