  import React from 'react';
  import 'semantic-ui-css/semantic.min.css';
  import {Card, Segment, Container, Label} from 'semantic-ui-react';
  import data from './my.json';


  const Prices = (props) =>  {
    return (
      props.prices.map((item, index) => {
      
        return (
        <Card href="#">
          <Card.Content>
          <Card.Meta>{data[index].category_name}</Card.Meta>
            <Card.Header>{data[index].model}</Card.Header>
            <Card.Description><Label color={'green'} size={'large'}>₹{item}</Label></Card.Description>
          </Card.Content>
        </Card>
    );
    }));
  }

  function Getprices(props) {
    return (
      <Container>
      <Segment>
      <Card.Group centered itemsPerRow={3} fluid={false}>
      <Prices {...props} />
      </Card.Group>
      </Segment>
      </Container>
      )
  }

  export default Getprices;