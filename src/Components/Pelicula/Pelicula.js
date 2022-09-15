import Card from 'react-bootstrap/Card';
import Img from 'react-bootstrap/Image'
import peliculas from '../../pelicula.json';
const Pelicula =(props) =>{
    
    return (
        
        <Card style={{width: '100%'}}>
            <Card.Img variant="top" style={{width: '20%'}} src={props.img}/>
            <Card.Body>
                <Card.Title>{props.titulo}</Card.Title>
                <Card.Text>
                    {props.descripcion}
                </Card.Text>
                <Card.Text>
                    {props.sinopsis}
                </Card.Text>
                <Card.Text>
                    {props.reparto}
                </Card.Text>
            </Card.Body>      
        </Card>
    );
}
export default Pelicula;