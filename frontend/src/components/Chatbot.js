import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot'
import { Mycontext } from '../context'

class Chatbot extends Component {
  state = {
    loading: true,
    opened: false
  }

  toggleFloating = ({ opened }) => {
    this.setState({ opened })
  } 

  render() {
    const { opened } = this.state
    
    return (
      <Mycontext.Consumer>
      {({ user }) => (
        <ChatBot
          steps={[
            {
              delay: 5000,
              id: '1',
              message: `¡Hola, ${user.name}! 😎`,
              trigger: '2',
            },
            {
              id: '2',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: '¿Qué libro estás buscando?',
              //trigger: '4'
              end: true
            },
            /*{
              id: '4',
              user: true,
              trigger: '5'
            },
            {
              id: '5',
              message: '¡!',
              end: true
            },*/
          ]}
          floating={true}
          opened={opened}
          toggleFloating={this.toggleFloating}
          userAvatar={user.photo}
        />
      )}
      </Mycontext.Consumer>
    )
  }
}

export default Chatbot