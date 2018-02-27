# react-imodal 💬
A modal component flexible and customizable with great smoothness transition.

## Description
This modal component will help you to create an application with great User Experience by applying the presentational component, also it is very easy to use in your projects.

## Installation

Can install using both npm or yarn package manager:
```CLI
$ npm install --save react-imodal
$ yarn add react-imodal
```

## Simple Usage Example
```JS
    class Component extends React.Component {
        constructor() {
            super()
            
            this.state = {
                open: false
            }
        }
        render() {
            return(
                <button onClick={() => this.setState({open: true})}>open modal</button>
                
                <IModal
                    open{this.state.open}
                    onClose={() => this.setState({open: false})}
                    title={'Title Name'}
                    content={'Content Text'}
                />
            )
        }
    }
```
## Draggable Modal
By default the draggable modal works only on desktop screens size, it will be changed in nexts commits.


## Props Available
Follow right below availables properties of component: 
- open - (**Boolean**) Set the existence of modal component, if it should appear or not.
- onClose - (**Callback**) Load a callback when close action is made with the modal.
- onConfirm - (**Callback**) Triggers when users click on the confirm button.
- onDecline - (**Callback**) Triggers when users click on the decline button.
- title - (**String**) The type of the value of header's modal is a String.
- content - (**Node**) The content type can be either HTML, Numbers or Strings.
- confirmText - (**String**) The confirm text must Receive String.
- declineText - (**String**) The decline text must Receive String.
- alertMode - (**Boolean**) When set to true, the modal becomes an alert with only confirmText visible.

## Todos
- [ ] Unit Tests
- [ ] Make the whole component modular


## License
MIT. The license for commercial use or personal is forever free.