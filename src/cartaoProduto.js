//Estrutura de repição do cataálogo
import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class=' rounded-lg shadow-md shadow-slate-400 border-solid  w-72 m-2 flex flex-col p-2 justify-between group' id="card-produto-${produtoCatalogo.id}">
      <img class="group-hover:scale-105 duration-300 my-4 rounded-lg " src="./assets/${produtoCatalogo.imagem}" 
      alt="Camiseta Frágil como uma Bomba"
      style="height: 420px;"
      />
      <p class='text-sm'>${produtoCatalogo.marca}</p>
      <p class='text-sm'>${produtoCatalogo.nome}</p>
      <p class='text-sm'>R$: ${produtoCatalogo.preco},00</p>
      <button id='adicionar-${produtoCatalogo.id}' class="bg-orange-700 text-orange-200 hover:bg-orange-400" ><i class="fa-solid fa-cart-plus"></i></button>
      </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }

  for (const produtoCatalogo of catalogo) {
    document.
    getElementById(`adicionar-${produtoCatalogo.id}`)
    .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
  }

}
