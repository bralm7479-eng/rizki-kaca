function render() {
    const keyword = document.getElementById("q").value.toLowerCase();
    const container = document.getElementById("products");

    container.innerHTML = "";

    const hasil = products.filter(product =>
        product.name.toLowerCase().includes(keyword)
    );

    hasil.forEach(product => {

        container.innerHTML += `

        <div class="card">

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>Kode : ${product.code}</p>

            <h4>${product.price}</h4>

            <a href="https://wa.me/6285260100455?text=Halo%20RIZKI%20KACA,%20saya%20ingin%20bertanya%20tentang%20produk%20${encodeURIComponent(product.name)}" target="_blank">

                <button>Pesan via WhatsApp</button>

            </a>

        </div>

        `;

    });

}

render();
function filterProduk(kategori){

const container=document.getElementById("products");

container.innerHTML="";

const hasil=
kategori==="Semua"
?
products
:
products.filter(
p=>p.category===kategori
);

hasil.forEach(product=>{

container.innerHTML+=`

<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>Kode : ${product.code}</p>

<h4>${product.price}</h4>

<a href="https://wa.me/6285260100455?text=Saya ingin membeli ${encodeURIComponent(product.name)}" target="_blank">

<button>Pesan via WhatsApp</button>

</a>

</div>

`;

});

}