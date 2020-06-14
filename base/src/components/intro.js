import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const JumboIntro = (props) => {
  return (
    <div>
      <Jumbotron>
        <h3 className="display-4">Discovery</h3>
        <p className="lead">Life isn't about finding yourself. Life is about creating yourself. --George Bernard Shaw</p>
        <hr className="my-2" />
        <p>"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle."  –  Albert Einstein</p>
      </Jumbotron>
    </div>
  );
};

export default JumboIntro;