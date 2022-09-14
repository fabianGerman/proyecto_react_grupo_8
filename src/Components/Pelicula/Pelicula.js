import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function Pelicula(props){
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={props.img}/>
            <Card.Body>
                <Card.Title>{props.titulo}</Card.Title>
                <Card.Text>
                    {props.descripcion}
                </Card.Text>
                <Button variant="primary">ver mas...</Button>
            </Card.Body>      
        </Card>
    );
}
export default Pelicula;