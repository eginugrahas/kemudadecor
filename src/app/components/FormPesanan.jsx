import React, {useRef, useState, useEffect} from 'react'

function FormPesanan() {
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

  const [isDisabled, setDisabled] = useState(true)

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function handleSubmit() {
    window.location.href =
    "https://wa.me/6283834867516?text=Halo+saya+ingin+memesan+Paket+Sticker+Kucing+dengan+HARGA+PROMO%0D%0A%0D%0ABerikut+Data+Pengiriman+Saya%3A+%0D%0ANama%3A+" +
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

  useEffect(()=>{
    const allValuesNotEmpty = Object.values(formData).every((val) => val !== "");

    setDisabled(!allValuesNotEmpty);
  }, [formData])
  return (
    <div className="p-3 mx-3 border rounded border-[#FF6766]">
          <form action={handleSubmit}>
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

                  <div className={`sm:col-span-3 ${formData.name ===  "" ? "hidden" : ""}`}>
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

                  <div className={`sm:col-span-3 ${formData.email ===  "" ? "hidden" : ""}`}>
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
                  <div className={`${formData.phone ===  "" ? "hidden" : ""}`}>
                  <div className={`col-span-full`}>
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
                disabled={isDisabled}
                className="disabled:bg-gray-500 rounded-md w-full bg-[#499066] px-3 py-2 font-semibold text-white shadow-sm text-4xl"
              >
                KIRIM
              </button>
            </div>
          </form>
        </div>
  )
}

export default FormPesanan