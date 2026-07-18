import React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DescriptionIcon from '@mui/icons-material/Description';


class PostDrawer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      drawer_opened: false,
      items: []
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);

  }

  toggleDrawer () {
    this.setState({
      drawer_opened: !this.state.drawer_opened
    });
  }

  componentDidMount () {
    fetch('/api/list_posts')
      .then(response => response.json())
      .then(data => this.setState({ items: data }));
  }

  render(){
    const fab_style = {
        margin: 0,
        top: 'auto',
        right: 80,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
        zIndex: 999
    };

    return (
        <div>
            <SwipeableDrawer
                anchor="right"
                open={this.state.drawer_opened}
                onClose={this.toggleDrawer}
                onOpen={this.toggleDrawer}
            >
                <List style={{minWidth: 400}}>
                    {this.state.items.map((item) => (
                    <div key={item.filename}>
                        <ListItem button onClick={
                          () => {
                            this.props.handlePostChange(item.filename, item.title, item.date);
                            this.toggleDrawer();
                          }
                        }>
                        <ListItemIcon>
                          <DescriptionIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={item.title}
                            secondary={item.date}
                        />
                        </ListItem>
                    </div>
                    ))}
                </List>
            </SwipeableDrawer>
            <Fab style={fab_style} variant="extended" onClick={this.toggleDrawer}>
              <span style={{ marginLeft: 10}}>
                Posts
              </span>
            </Fab>
        </div>
    );
  }
}

export default PostDrawer;
