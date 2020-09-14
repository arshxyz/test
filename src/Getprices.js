  import React from 'react';
  import _ from 'lodash';
  import 'semantic-ui-css/semantic.min.css';
  import {Card, Segment, Container, Label} from 'semantic-ui-react';
  import data from './my.json';



  function Getprices(props) {

    function Prices(props) {
      return (
        props.prices.map((item, index) => {
        
          return (
          <Card href="#" as="a">
            <Card.Content>
            <Card.Meta>{data[index].category_name}</Card.Meta>
              <Card.Header>{data[index].model}</Card.Header>
              <Card.Description><Label color={'green'} size={'large'}>₹{item}</Label></Card.Description>
            </Card.Content>
          </Card>
      );
      }));
    }

    return (
      <Container inverted>
      <div className="result_segment">
      <Card.Group stackable centered>
      <Prices {...props} />
      </Card.Group>

      </div>
      </Container>
      )
  }

  export default Getprices;