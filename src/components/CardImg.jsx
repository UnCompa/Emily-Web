export default function CardImg({ id,url, name, description, date = {} }) {
  const { create, update } = date;
  return (
    <a
      href={`/galeria/${id}`}
      className="hover:brightness-90 active:brightness-75 transition-all"
    >
      <div class="bg-zinc-900 p-4 border-2 border-purple-800 shadow-xl shadow-purple-500/20 h-full">
        <img
          src={url}
          alt=""
          class="saturate-[110%] object-cover h-[25em] w-full rounded"
        />
        <div className="flex text-white italic gap-x-2 py-1">
          <span>{create}</span>
          <span>{update}</span>
        </div>
        <h3 className="text-white font-Anta text-2xl md:text-3xl py-1">
          {name}
        </h3>
        <p className="text-white text-xl md:text-2xl">{description}</p>
      </div>
    </a>
  );
}
