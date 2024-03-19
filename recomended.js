let productList = document.getElementById("productlist")


let allProduct = async() =>{
    let res = await fetch(`https://fakestoreapi.com/products`)
    let data = await res.json();
    displayData(data)
    return data
}

let data;

let controller = async () => {

  data = await allProduct()
  displayData(data)
  console.log(data)

}

controller()

function displayData(data){

  productList.innerHTML = ""
   
    data.forEach((ele) =>{
      let div = document.createElement("div")

      let image = document.createElement("img")
      image.src = ele.image;

      let title = document.createElement("h3")
      title.innerHTML = ele.title;

      div.append(image , title )

      productList.append(div)
    })
}
allProduct()
