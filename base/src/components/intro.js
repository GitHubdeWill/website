import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const JumboIntro = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">"If I have learned anything in this long life of mine, it is this: in love we find out who we want to be; in war we find out who we are."  -  Kristin Hannah, The Nightingale</p>
        <hr className="my-2" />
        <p>"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle."  –  Albert Einstein</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default JumboIntro;