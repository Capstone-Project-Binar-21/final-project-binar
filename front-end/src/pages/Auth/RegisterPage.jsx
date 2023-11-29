import { useState } from "react";
import { Link } from "react-router-dom";
import { toastNotify } from "../../libs/utils";

const RegisterPage = () => {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    nomorTelepon: "",
    password: "",
    konfirmasiPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.konfirmasiPassword) {
      return toastNotify({
        type: "error",
        message: "Password tidak sama",
      });
    }

    console.log(form);
    toastNotify({
      type: "success",
      message: "Berhasil mendaftar",
    });
  };

  return (
    <section className="h-[100vh] w-full grid lg:grid-cols-2 grid-cols-1 ">
      <div className="flex items-start flex-col justify-center w-full lg:px-32 md:px-16 px-5 lg:py-0 py-10 lg:bg-transparent bg-darkBlue03/10">
        <h1 className="font-bold lg:text-4xl text-3xl text-darkBlue05 ">
          Daftar
        </h1>
        <form
          className="w-full flex flex-col gap-4 my-6"
          onSubmit={handleSubmit}
        >
          <label className="form-control w-full">
            <div className="label">
              <span className="lg:text-lg text-base font-medium">Nama</span>
            </div>
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="input input-bordered w-full"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              required
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="lg:text-lg text-base font-medium">Email</span>
            </div>
            <input
              type="email"
              placeholder="Contoh: johndee@gmail.com"
              className="input input-bordered w-full"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="lg:text-lg text-base font-medium">
                Nomor Telepon
              </span>
            </div>
            <input
              type="text"
              placeholder="Contoh: +62.."
              className="input input-bordered w-full"
              name="nomorTelepon"
              value={form.nomorTelepon}
              onChange={handleChange}
              required
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="lg:text-lg text-base font-medium">Password</span>
            </div>
            <input
              type="password"
              placeholder="Masukkan Password"
              className="input input-bordered w-full"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="lg:text-lg text-base font-medium">
                Konfirmasi Password
              </span>
            </div>
            <input
              type="password"
              placeholder="Konfirmasi Password"
              className="input input-bordered w-full"
              name="konfirmasiPassword"
              value={form.konfirmasiPassword}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="btn btn-primary self-center w-full">
            Daftar
          </button>
        </form>
        <p className="font-medium text-center w-full">
          Sudah punya akun?{" "}
          <span className="font-bold text-darkBlue05">
            <Link to="/auth/login">Masuk di sini</Link>
          </span>
        </p>
      </div>

      <div className="bg-darkBlue05 h-full w-full relative lg:block hidden">
        <img
          src="/belajar_logo.png"
          alt="Logo_belajar"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[452px] w-[452px]"
        />
      </div>
    </section>
  );
};

export default RegisterPage;
