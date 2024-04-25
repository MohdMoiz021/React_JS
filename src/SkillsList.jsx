function SkillsList() {
    const items=[
        {id:1,brand:'Redmi',model:'Redmi A6',Price:6000,image:'https://5.imimg.com/data5/NO/PS/HZ/SELLER-53877097/used-xiaomi-redmi-6a-500x500.jpg'},
        {id:1,brand:'Realme',model:'Realme C3',Price:8000,image:'https://m.media-amazon.com/images/I/41-cJsLnJTL._AC_UF1000,1000_QL80_.jpg'},
        {id:1,brand:'Vivo',model:'Vivo V25 5g',Price:25000,image:'https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/c/q/w/-original-imagg4kcj82gwpzx.jpeg?q=90&crop=false'},
    ]
    return ( 
        <div>
        <h1> Products</h1>
        <table width="100%" border={1}> 
        <thead>
        <tr>
        <th>id</th>
        <th>Brand</th>
        <th>Model</th>
        <th>Price</th>
        <th>Image</th>
        </tr>
        </thead>
        <tbody>
        {
            items.map(item=><tr>
                <td>{item.id}</td>
                <td>{item.brand}</td>
                <td>{item.model}</td>
                <td>{item.Price}</td>
                <td>
                <img src={item.image} width='100' height='100'/>
                </td>
            </tr>)
        }
        </tbody>
        </table>
        </div>
     );
}

export default SkillsList;