"use client";

import React, { useState, useRef } from "react";
import Diveder from "../components/Devider";
import Image from "next/image";
import heroImg from "../../../public/hero.png";
import heroImg2 from "../../../public/hero_2.png";
import kc1 from "../../../public/kc_1.png";
import kc2 from "../../../public/kc_2.png";
import kc3 from "../../../public/kc_3.png";
import mini from "../../../public/mini.png";
import cod from "../../../public/cod.png";
import tiktok from "../../../public/tiktok.png";
import Link from "next/link";
import Script from "next/script";

function page() {
  const selectRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    rtrw: "",
    kelurahan: "",
    kecamatan: "",
    provinsi: "",
    city: "",
    kodepos: "",
    phone: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function HandleSubmit() {
    // console.log(encodeURI(formData.name));
    // console.log(
    //   "https://wa.me/6289503651196?text=Halo+saya+ingin+memesan+Paket+Sticker+Kucing+dengan+HARGA+PROMO%0D%0A%0D%0ABerikut+Data+Pengiriman+Saya%3A+%0D%0ANama%3A+" +
    //     encodeURI(formData.name) +
    //     "%0D%0AEmail%3A+" +
    //     encodeURI(formData.email) +
    //     "%0D%0AAlamat%3A+" +
    //     "%0D%0ANo.HP/WA%3A+" +
    //     encodeURI(formData.phone) +
    //     "+RT%2FRW+" +
    //     encodeURI(formData.address) +
    //     encodeURI(formData.rtrw) +
    //     "%2C+" +
    //     encodeURI(formData.kelurahan) +
    //     "%2C+" +
    //     encodeURI(formData.kecamatan) +
    //     "%2C+" +
    //     encodeURI(formData.city) +
    //     "%2C+" +
    //     encodeURI(formData.provinsi) +
    //     "+" +
    //     encodeURI(formData.kodepos) +
    //     "%0D%0A%0D%0AMetode+Pembayaran%3A+" +
    //     encodeURI(selectRef.current.value) +
    //     ""
    // );
    window.location.href =
    "https://wa.me/6289503651196?text=Halo+saya+ingin+memesan+Paket+Sticker+Kucing+dengan+HARGA+PROMO%0D%0A%0D%0ABerikut+Data+Pengiriman+Saya%3A+%0D%0ANama%3A+" +
    encodeURI(formData.name) +
    "%0D%0AEmail%3A+" +
    encodeURI(formData.email) +
    "%0D%0ANo.HP/WA%3A+" +
    encodeURI(formData.phone) +
    "%0D%0AAlamat%3A+" +
    encodeURI(formData.address) +
    "+RT%2FRW+" +
    encodeURI(formData.rtrw) +
    "%2C+" +
    encodeURI(formData.kelurahan) +
    "%2C+" +
    encodeURI(formData.kecamatan) +
    "%2C+" +
    encodeURI(formData.city) +
    "%2C+" +
    encodeURI(formData.provinsi) +
    "+" +
    encodeURI(formData.kodepos) +
    "%0D%0A%0D%0AMetode+Pembayaran%3A+" +
    encodeURI(selectRef.current.value) +
    ""
  }

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[600px] border w-full flex flex-col items-center">
        <div className="w-full mt-4">
          <Diveder />
          <h1 className="py-3 px-4 text-3xl font-bold text-center text-[#FF0000] text-shadow shadow-slate-400">
            PROMO DISKON TERBATAS CUMA HARI INI!
          </h1>
          <Diveder />
        </div>
        <div className="">
          <Image src={heroImg} alt="hero" />
        </div>
        <div className="m-4">
          <p className="px-3 text-2xl font-bold text-center">
            Mudah diaplikasikan diberbagai tempat
          </p>
        </div>
        <div className="">
          <Image src={kc1} alt="kc1" />
          <Image src={kc2} alt="kc2" />
          <Image src={kc3} alt="kc3" />
        </div>
        <div className="w-full my-4">
          <p className="px-3 text-3xl font-bold text-center text-[#072F75]">
            KENAPA KAMU BUTUH STICKER INI?
          </p>
          <div className="py-3 px-2 mx-3 border-2 border-[#FDB300] mt-2 rounded ">
            <ul className="list-disc">
              <li className="my-2 ms-5">
                Desain unik dengan efek 3D dan kreatif
              </li>
              <li className="my-2 ms-5">
                Pilihan tepat untuk menghiasi rumah kamu
              </li>
              <li className="my-2 ms-5">Gambar kucing yang gemoy</li>
              <li className="my-2 ms-5">
                Membuatmu menjadi pecinta hewan sejati
              </li>
              <li className="my-2 ms-5">
                Cocok untuk dipakai sendiri maupun hadiah{" "}
              </li>
            </ul>
          </div>
          <div className="m-4">
            <button className="shadow-md shadow-slate-400 p-3 w-full text-center bg-[#FF0000] text-4xl font-bold text-white rounded-md">
              PESAN SEKARANG
            </button>
          </div>
          <Diveder />
          <div className="w-full my-4">
            <p className="px-3 text-xl font-bold text-center text-[#FF0000]">
              DAPATKAN PROMO TERBATAS HANYA UNTUK HARI INI!
            </p>
          </div>
          <div className="flex flex-col items-center w-full">
            <Image src={heroImg2} alt="hero2" />
            <Image src={mini} alt="mini" />
          </div>
          <div className="w-full my-4">
            <p className="px-3 text-xl font-bold text-center text-[#FF0000]">
              SEGERA ISI FORMULIR DIBAWAH INI <br />
              <span className="text-4xl">&darr; &darr; &darr;</span>
            </p>
          </div>
        </div>
        <div className="p-3 mx-3 border rounded border-[#FF6766]">
          <form action={HandleSubmit}>
            <div className="space-y-12">
              <div className="">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Detail Penerima
                </h2>
                <p className="mt-1 text-xs leading-6 text-gray-600">
                  Berikan informasi yang tepat dan jelas agar pesanan dapat
                  diproses lebih cepat
                </p>

                <div className="grid grid-cols-1 mt-8 gap-x-3 gap-y-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Nama Penerima
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Masukan Nama Anda"
                        className="block w-full p-3 text-xs text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Alamat Email
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Masukan Email Anda"
                        className="block w-full p-3 text-xs text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Nomor HP/Whatsapp
                    </label>
                    <div className="mt-2">
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Masukan Email Anda"
                        className="block w-full p-3 text-xs text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Alamat Pengiriman
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Masukan Alamat Anda"
                        className="block w-full p-3 text-xs text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="rtrw"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      RT/RW
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="rtrw"
                        id="rtrw"
                        value={formData.rtrw}
                        onChange={handleChange}
                        placeholder="Masukan RT/RW Anda (contoh: 001/002)"
                        className="block w-full p-3 text-xs text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="kelurahan"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Kelurahan
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="kelurahan"
                        id="kelurahan"
                        value={formData.kelurahan}
                        onChange={handleChange}
                        placeholder="Masukan Kelurahan Anda"
                        className="block w-full p-3 text-xs text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="kecamatan"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Kecamatan
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="kecamatan"
                        id="kecamatan"
                        value={formData.kecamatan}
                        onChange={handleChange}
                        placeholder="Masukan Kecamatan Anda"
                        className="block w-full p-3 text-xs text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Kota/Kabupaten
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Masukan Kota/Kabupaten Anda"
                        className="block w-full p-3 text-xs text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="provinsi"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Provinsi
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="provinsi"
                        id="provinsi"
                        value={formData.provinsi}
                        onChange={handleChange}
                        placeholder="Masukan Provinsi Anda"
                        className="block w-full p-3 text-xs text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="kodepos"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Kode Pos
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="kodepos"
                        id="kodepos"
                        value={formData.kodepos}
                        onChange={handleChange}
                        placeholder="Masukan Kode Pos"
                        className="block w-full p-3 text-xs text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="payment"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Metode Pembayaran
                    </label>
                    <div className="mt-2">
                      <select
                        className="block w-full p-3 text-sm font-medium leading-6 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300"
                        ref={selectRef}
                      >
                        <option value="transfer">Transfer Bank</option>
                        <option value="cod">Bayar di Tempat (COD)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="rounded-md w-full bg-[#499066] px-3 py-2 font-semibold text-white shadow-sm text-4xl"
              >
                KIRIM
              </button>
            </div>
          </form>
        </div>
        <div className="mt-6">
          <Image src={cod} alt="cod" />
        </div>
        <div className="w-full">
          <Diveder />
        </div>
        <div className="flex my-4 items-center-justify-center">
          <Link
            href={
              "https://www.tiktok.com/@kemudadecor?is_from_webapp=1&sender_device=pc"
            }
          >
            <Image src={tiktok} alt={"Find Kemudadecor on Tiktok"} />
          </Link>
        </div>
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@kemudadecor"
          data-unique-id="kemudadecor"
          data-embed-type="creator"
          style={{ maxWidth: "780px", minWidth: "288px" }}
        >
          <section>
            <a
              target="_blank"
              href="https://www.tiktok.com/@kemudadecor?refer=creator_embed"
            >
              @kemudadecor
            </a>
          </section>
        </blockquote>
        <Script src="https://www.tiktok.com/embed.js" />
      </div>
    </div>
  );
}

export default page;
