let products = [];
let currentCategory = "Semua";

async function loadProducts() {

    const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("id", { ascending: false });

    if (error) {
        console.error(error);
        return;
    }

    products = data;

    render();

}

function render() {

    const keyword = document.getElementById("q").value.toLowerCase();

    const container = document.getElementById("products");

    container.innerHTML = "";

    let hasil = products;

    if (currentCategory !== "Semua") {

        hasil = hasil.filter(product =>
            product.category === currentCategory
        );

    }

    hasil = hasil.filter(product =>
        product.name.toLowerCase().includes(keyword)
    );

    hasil.forEach(product => {

        container.innerHTML += `

        <div class="card">

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>Kode : ${product.code}</p>

            <h4>${product.price}</h4>

            <a href="https://wa.me/6285260100455?text=Halo RIZKI KACA, saya ingin bertanya tentang produk ${encodeURIComponent(product.name)}" target="_blank">

                <button>Pesan via WhatsApp</button>

            </a>

        </div>

        `;

    });

}

function filterProduk(kategori){

    currentCategory = kategori;

    render();

}

loadProducts();
