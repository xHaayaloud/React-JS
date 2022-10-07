import React from 'react'
import Producto from './Producto'
import { Row, Col } from 'antd'
import './ProductoList.css'

const basedatos = [
    { key: "1", avatar: "https://www.somosbringo.cl/wp-content/uploads/2021/09/PT-695-arroz-grano-despensa-gran-seleccion-tucapel-500-gramos--600x600.jpg", detalle: "Detalle 2", titulo: "Arroz" },
    { key: "2", avatar: "https://santaisabel.vtexassets.com/arquivos/ids/182053-360-360?width=360&height=360&aspect=true", detalle: "Detalle 1", titulo: "Tallarines" },
    { key: "3", avatar: "https://jumbo.vtexassets.com/arquivos/ids/453094-360-360?width=360&height=360&aspect=true", detalle: "Detalle 21", titulo: "Harina" },
    { key: "4", avatar: "https://jumbo.vtexassets.com/arquivos/ids/448790-360-360?width=360&height=360&aspect=true", detalle: "Detalle 22", titulo: "Carne Vacuno" },
    { key: "5", avatar: "https://jumbo.vtexassets.com/arquivos/ids/470718-360-360?width=360&height=360&aspect=true", detalle: "Detalle 23", titulo: "Azucar" },
    { key: "6", avatar: "https://images.cdn2.buscalibre.com/fit-in/360x360/c0/f1/c0f1ba9c7bd6954a38e209194b54499b.jpg", detalle: "Detalle 24", titulo: "Cafe" },
    { key: "7", avatar: "https://jumbo.vtexassets.com/arquivos/ids/429713-360-360?width=360&height=360&aspect=true", detalle: "Detalle 25", titulo: "Sal" },
    { key: "8", avatar: "https://santaisabel.vtexassets.com/arquivos/ids/171586-360-360?width=360&height=360&aspect=true", detalle: "Detalle 27", titulo: "Te" },
    { key: "9", avatar: "https://santaisabel.vtexassets.com/arquivos/ids/197658-360-360?width=360&height=360&aspect=true", detalle: "Detalle 28", titulo: "Aceite" },
    { key: "10", avatar: "https://jumbo.vteximg.com.br/arquivos/ids/459009-360-360?width=360&height=360&aspect=true", detalle: "Detalle 29", titulo: "Lentejas" },
]
const ProductoList = () => {
    return (
        <Row gutter={16}>
            {
                // indicates very long content
                // Array.from(
                //     {
                //         length: 100,
                //     },
                //     (_, index) => (
                //         <Col className="gutter-box" >
                //             <Producto />
                //         </Col>
                //     ),
                // )
                basedatos.map(elemento => {
                    return(
                    <Col className="gutter-box" >
                        <Producto valor={elemento} />
                    </Col>
                    )
                    
                })
            }
        </Row>
    )
}
export default ProductoList;
