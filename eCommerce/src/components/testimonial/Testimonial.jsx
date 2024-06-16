import React from "react";

function Testimonial() {
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        {/* main  */}
        <div className="container px-5 py-10 mx-auto">
          {/* Heading  */}
          <h1 className=" text-center text-3xl font-bold text-black">
            Testimonial
          </h1>
          {/* para  */}
          <h2 className=" text-center text-2xl font-semibold mb-10">
            What our <span className=" text-brown-700">customers</span> are
            saying
          </h2>
          <div className="flex flex-wrap -m-4">
            {/* Testimonial 1 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://ecommerce-sk.vercel.app/img/kamal.png"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-brown-700 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Jaybant
                </h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://lh3.googleusercontent.com/pw/AP1GczOrKQsJFsX3sWoEhKk0hd00URceHpFFErj_VJWm10cQUDApHOouCqGNdsJSnCBAovbBCxHSobwQcgKMZkdTUtHJiYVdJXrFFDL6Je98XX__PjSBxp0Hd7xDZQtD0WaRnPvDbLRJ0ZoHd4bStuikfXDCKizm9KqOlA_lMpQHohNxOKJZHqLhjzLoVH9p9WEZTCfNcaKl3VlHMEimz5Ho0uqENRajxWyO0tYxf4feyd4n7guKYrYNYPNScC3u49K1eKRPLXuLSGKVjxcf4W_pavuekxUiEeDREip1j0Ma9SNFmzFvsTFaY4t6LdNlXjErPr0aVTZhtcYdxM4WoKOUffQoICH17LSjpB2nyPa76D-253JDLk4cusD7m9ZJefm3_4Dz-FRIwBZSv-kqQBamHcdXSlX5hjvJ-5Kuv_Ry4aiDq-ZD5L8-RTUw0BX375_bi-_InL2EE-C1Xavuz5ix3eW3bjH92Utz4AVGkUi7UGHHzmQmqpxXbZ6OsxNm4r5qFx_Op5uMFM_MGnv0o0v2FoVkyg0i14zyyAgpRYe_OvLhEEG5N2fFIYYkPGfXMSd5BOpUlISHlihkROeAvlg4NDROpnBQiIBq7de7uiq_lj4MBWGGbjuzmaxwRybxmoIQfbGwU-LiRvw2Ac3KRhXFBAXowkJCD37P5zJLhgfl9obTwtkxpcWDlMSYF_7VmW2a5LA1Y9c2RlJwoBv7tJH-bIeLXjWNomucwp1aDFgpt5EQtkMJ4oaPAK5HiHnqkCUCQuWE84M5l9hKVmKlegqb1jgF7uzKvYkSeCdIPz7q4FrTcdi2onfeeRx6uIlJnN_gD2QDhpKlPAW6ziPXeYCzatbUWXlIPnBLByRsrgaznpu8iQJS9lxjocO3ag2VvQ_RD1gepcnczPaUdlAIOypetpy2JQB6lIedu6pMQ-ofr4K7LfsvuyJV6Ks1Wvu7D2RZJaxGES7Q2GXYuDRM0qeCCu9u_w=w475-h633-s-no-gm?authuser=0"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-brown-700 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Prachi Vishwakarma
                </h2>
                <p className="text-gray-500">UI Develeoper</p>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://lh3.googleusercontent.com/pw/AP1GczMHGPk7Pk1ljaQvooWL7RHbgkvB2jUtzwGW3YtFPSysKTs_NhTC0mcGIk_MtVV9sayLuT81FgATyqCkci0eYnhog0XjUiE0DY12L0GxWuoGPfdOoGHY4pdUQNLP4NiM-RnEPRhXkpLo8_B-fVmQKRmQhw5x0cVLC9v8Uq-jNZlqfaYP8mB5v_KTFc3XflRtt0taocZnjsj41iaUtQPTBQBFkUaau8ehAQCRXj_rCwyA7yOVrJYkMe9jcqeYKnigAK12-mk_lZw5EEYy23PiSozCicUuRRzCOxDjNaeJVadDw7pENmVpi-IFD8rRtZxDvNOpiNWjmr1MVmNwDNSbai_BTq9kHTqVyCOqJ7M1BPBwyrKkUucErQX0Apn8iDPvz1DhZtaQJDMbZJtXmRc_ngMurVjqmAOPjNu8-W4koakmARSv5dn6IQ8_xbhkR0JgAZNn0nmFIZyrMuhA_P-tK23lDkJKYU9cn_vVIjSgm8eeRiYzJJqGU7PLQ7PnoicjBopf61GuV1WFYv6S8w5BYSo8N6NVCGS0WlRznktybC4zEDekTEuv-1FJbzVgqBWViTd1ONmnpYcP1YF55ZQD09BNchszY_f_a4k5_jkWHd-IaN1zdVs9S694fYL9fnenXEsRfOs8CLwQNqdVbulyRPfpUrw99ufoCV0sZVY2p9xVYjhw1uX-jFzypuPvVRyUPkg5YBjw3VXfMHUxaRrsaMItXzjd0_txUd5U4Lzz3NAnJBL4stv-eTrOVsamkVdaE5qB-RzA35HxOH5LVVhQPsBrffuqQ7EqGmqXN0s8Wf3jeTdb0rDxlyXHTlGZx8DAhj7nPOq2spNbTM3PUE7hbtF71g9mb_JlaECJzB5oBWYF8EZJUEcWiH1GcpApaUIYUroYnnJjIfVkWePUl0m8mlvYw2MoplcHDp_Ae_dRP7Lkvkgj4jXyFUc3QTu1JJ6wtoLTHGtzgJtUoJGfpV9IGeR35pU=w668-h633-s-no-gm?authuser=0"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-brown-700 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  DEVENDRA VISHWAKARMA{" "}
                </h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
