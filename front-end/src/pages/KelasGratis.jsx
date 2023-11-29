export default function KelasGratis() {
  return (
    <>
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        <figure>
          <img src="" alt="card image" className="aspect-video w-1/2" />
        </figure>

        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-blue-700">Course</h3>
            <p className=" text-black"> Materi</p>
            <p className=" text-black"> by...</p>
          </header>
          <p>Title</p>
        </div>

        <div className="flex  p-6 pt-0">
          <button className="inline-flex h-10 w-1/2 items-center justify-center gap-2 whitespace-nowrap rounded bg-blue-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-emerald-300 disabled:shadow-none">
            <span>Mulai Kelas</span>
          </button>
        </div>
      </div>
    </>
  );
}
