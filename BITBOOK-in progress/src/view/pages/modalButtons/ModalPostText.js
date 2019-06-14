import React from 'react'

class ModalPostText extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        };
    }

    onValueChange = (event) => {
        this.setState({ value: event.target.value })
    }

    onCreate = () => {
        this.props.onCreateButton(this.state.value, "text")
    }


    render() {
        return (
            <div className="modal" id="text-post" >
                <div className="modal-content">
                    <input type="text" onChange={this.onValueChange} />
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={this.onCreate}>Agree</a>
                </div>
            </div>

        )
    }
}
export { ModalPostText }