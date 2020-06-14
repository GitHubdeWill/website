import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DescriptionIcon from '@material-ui/icons/Description';


class PostDrawer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      drawer_opened: false,
      items: []
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  componentDidMount () {
    fetch('/api/list_posts')
      .then(response => response.json())
      .then(data => this.setState({ items: data }));
  }

  toggleDrawer (open) {
    this.setState({drawer_opened : open });
  }

  handleChange(item) {
    this.props.onPostChange(item);
  }
  
  render () {
    let list = this.state.items.map((item) => {
      return (
        <ListItem button key={item.filename} onClick={() => {this.handleChange(item)}}>
          <ListItemIcon><DescriptionIcon/></ListItemIcon>
          <ListItemText primary={item.title + item.date} />
        </ListItem>
      );
    });
    const fab_style = {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
      zIndex: 999
    };
    const drawer_style = {
      width: 300
    };
    return (
      <div>
        <Fab style={fab_style} variant="extended" onClick={() => {this.toggleDrawer(true)}}>
          All Posts
        </Fab>
        <React.Fragment>
            <SwipeableDrawer
              anchor='right'
              open={this.state.drawer_opened}
              onClose={() => {this.toggleDrawer(false)}}
              onOpen={() => {this.toggleDrawer(true)}}
            >
              <div
                style={drawer_style}
                role="presentation"
                onClick={() => {this.toggleDrawer(false)}}
                onKeyDown={() => {this.toggleDrawer(false)}}
              >
                <List>
                  {list}
                </List>
              </div>
            </SwipeableDrawer>
          </React.Fragment>
      </div>
    );
  }
}

export default PostDrawer;