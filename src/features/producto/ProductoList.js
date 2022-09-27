import React from 'react'
import Producto from './Producto'
import { Row, Col } from 'antd'
import './ProductoList.css'

const basedatos = [
    { key: "1", avatar: "https://laverdadnoticias.com/export/sites/laverdad/img/2022/01/14/lana_rhoades_dio_la_bienvenida_a_un_bebe_en_2022.jpg_1748350297.jpg", detalle: "Detalle 2", titulo: "Lana Rhoades" },
    { key: "2", avatar: "https://d32dm0rphc51dk.cloudfront.net/rN3j-P2E9e9BJRNfazWNEQ/large.jpg", detalle: "Detalle 1", titulo: "La Sirena 67+2" },
    { key: "3", avatar: "https://www.educacionchile.cl/wp-content/uploads/2020/02/javier-miles.jpg", detalle: "Detalle 21", titulo: "Rey Follador" },
    { key: "4", avatar: "https://viapais.com.ar/resizer/O_X_VdCWm25NygQHoM0_LCcY8vg=/1023x1279/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/ZPUAPFEFOBFSBFU6GS2MCJVJLY.jpg", detalle: "Detalle 22", titulo: "Mia Malkova" },
    { key: "5", avatar: "http://custom-gwent.com/cardsBg/efab2023e9bea2c8bcb84fab70cbd156.jpeg", detalle: "Detalle 23", titulo: "Mia Khalifa" },
    { key: "6", avatar: "https://i.pinimg.com/736x/21/38/b1/2138b1e78528d37af6754a8d1d2f4c4d--pell-mell-jasmine.jpg", detalle: "Detalle 24", titulo: "Jasmine James" },
    { key: "7", avatar: "https://lastfm.freetls.fastly.net/i/u/300x300/d9a48a4fbf9bb693c842d3064a872f11.jpg", detalle: "Detalle 25", titulo: "Abella Danger" },
    { key: "8", avatar: "http://k31.kn3.net/3/C/D/8/0/9/A55.jpg", detalle: "Detalle 27", titulo: "Asiatica Horny" },
    { key: "9", avatar: "https://c1.staticflickr.com/3/2889/12127921595_5c0f7596cb_b.jpg", detalle: "Detalle 28", titulo: "Vale Gut" },
    { key: "10", avatar: "https://i1.sndcdn.com/artworks-000816291811-eeekhy-t500x500.jpg", detalle: "Detalle 29", titulo: "Riley Reid" },
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
