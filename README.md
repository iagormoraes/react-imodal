# react-imodal 💬  
[![npm](https://img.shields.io/badge/npm-v1.0.6-blue.svg)](https://www.npmjs.com/package/react-imodal) [![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)](https://github.com/iagorm/react-imodal/blob/master/LICENSE) [![npm](https://img.shields.io/badge/download-5.97kb-green.svg)](https://www.npmjs.com/package/react-imodal)

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
See an example of component usage:
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
                <div>
                    <button onClick={() => this.setState({open: true})}>open modal</button>
                    
                    <IModal
                        open{this.state.open}
                        onClose={() => this.setState({open: false})}
                        title={'Title Name'}
                        content={'Content Text'}
                    />
                </div>                
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
Here we need you:
- [ ] Unit Tests
- [ ] Make the whole component modular


## License
MIT. The [license](https://github.com/iagorm/react-imodal/blob/master/LICENSE) for commercial use or personal is forever free.