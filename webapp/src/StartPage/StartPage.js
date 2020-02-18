import React from 'react';

export default class StartPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: 'Trainisar',
            clicked: false
        }

        this.toggleText = this.toggleText.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);

    }

    onButtonClick() {
        this.setState({ user: 'Ellinor', clicked: !this.state.clicked })
    }

    toggleText() {
        if(this.state.clicked) {
            return <div>Knappen är klickad!</div>
        } else {
            return null
        }
    }

    render() {
        return (
            <div>
                <h3>Välkommen till test-appen!</h3>
                {
                    this.state.clicked && " Knappen är på"
                }
            </div>
        )
    }
}