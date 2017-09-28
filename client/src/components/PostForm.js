import React from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';
import { addPost } from '../actions/posts';

class PostForm extends React.Component {
  state= { body: '' }

  handleChange = (e) => {
    let { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    e.preventDefault();
    this.dispatch(addPost(this.state))

  }
 
  render() {
    return(
       <Form onSubmit={this.handleSubmit}>
        <Form.Field>
         <label>First Name</label>
          <input 
            name='body'
            placeholder='Body' 
            required
            value={this.state.body}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button type='submit'>Submit</Button>
       </Form>
    )
  }
}

export default connect()(PostForm);