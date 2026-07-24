async function loadProducts() {

    const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("id", { ascending: false });

    if (error) {
        console.error(error);
        return;
    }

    const table = document.getElementById("productTable");

    table.innerHTML = "";

    data.forEach(product => {

        table.innerHTML += `
        <tr>
            <td>${product.name}</td>
            <td>${product.code}</td>
            <td>${product.category}</td>
            <td>${product.price}</td>
            <td>
                <button class="action-btn delete"
                onclick="deleteProduct(${product.id})">
                Hapus
                </button>
            </td>
        </tr>
        `;

    });

}

async function addProduct() {

    const name = document.getElementById("name").value;
    const code = document.getElementById("code").value;
    const category = document.getElementById("category").value;
    const price = document.getElementById("price").value;
    const image = document.getElementById("image").value;

    if (!name || !price) {
        alert("Nama dan harga wajib diisi!");
        return;
    }

    const { error } = await supabase
        .from("products")
        .insert([
            {
                name,
                code,
                category,
                price,
                image
            }
        ]);

    if (error) {
        console.error(error);
        alert(error.message);
        return;
    }

    alert("Produk berhasil ditambahkan!");

    document.getElementById("name").value = "";
    document.getElementById("code").value = "";
    document.getElementById("category").value = "";
    document.getElementById("price").value = "";
    document.getElementById("image").value = "";

    loadProducts();

}

async function deleteProduct(id) {

    if (!confirm("Hapus produk ini?")) return;

    const { error } = await supabase
        .from("products")
        .delete()
        .eq("id", id);

    if (error) {
        console.error(error);
        alert(error.message);
        return;
    }

    loadProducts();

}

loadProducts();
