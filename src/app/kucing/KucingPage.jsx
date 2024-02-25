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
import FormPesanan from "../components/FormPesanan"

function KucingPage() {

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
        <FormPesanan />
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

export default KucingPage;
