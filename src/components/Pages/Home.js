import React, { Component } from 'react';
import Header from './Header'
class Home extends Component {
    render() {
        return (
            <div>
                <Header
                    title="Welcome To Online Food!"
                    subtitle="It's Nice To Meet You"
                    about="Sign Up"
                    link="/signup"
                    showButton={true}
                />
                
                 </div>
        )
    }
}

export default Home