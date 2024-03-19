const categorylist = document.getElementById("categorylist")


let categoryProduct = async() =>{
    let res = await fetch(`https://fakestoreapi.com/products/category/jewelery`)
    let data = await res.json();
    categoryDisplay(data)
    return data
}

function categoryDisplay(data){

  categorylist.innerHTML = ""
   
    data.forEach((ele) =>{
      let div = document.createElement("div")

      let image = document.createElement("img")
      image.src = ele.image;

      let title = document.createElement("h3")
      title.innerHTML = ele.title;

    

      div.append(image , title)

      categorylist.append(div)
    })
}
categoryProduct()












