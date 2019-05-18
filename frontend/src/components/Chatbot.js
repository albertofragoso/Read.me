import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot'
import { Mycontext } from '../context'
import CarouselBooks from './CarouselBooks'

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
              //message: `¡Hola, ${user.name}! 😎`,
              message: 'Hi, there!',
              trigger: '2',
            },
            {
              id: '2',
              user: true,
              trigger: 'search',
            },
            {
              id: 'search',
              message: '¿Qué libro estás buscando?',
              trigger: 'book',
            },
            {
              id: 'book',
              user: true,
              trigger: '5'
              
            },
            {
              id: '5',
              delay: 4000,
              component: <CarouselBooks />,
              trigger: '6'
            },
            {
              id: '6',
              message: '¡Listo! He encontrado todos estos libros para tí. ¿Te gustaría buscar algún otro?',
              trigger: '7'
            },
            {
              id: '7',
              options: [
                { value: 'Yes', label: '¡Claro!', trigger: 'search'},
                { value: 'No', label: 'Nope. Muchas gracias.', trigger: 'end' }
              ]
            },
            {
              id: 'end',
              message: '¡Súper! Happy Reading. 📖🚀'
            }
          ]}
          floating={true}
          opened={opened}
          toggleFloating={this.toggleFloating}
          //userAvatar={user.photo}
        />
      )}
      </Mycontext.Consumer>
    )
  }
}

export default Chatbot