import React, { Component } from 'react';
import Header from './Header'
class About extends Component {
    render() {
        return (
            <div>
                <Header
                    title="About Us"
                    subtitle="Let Us Know About Ourselves"
                    about="Tell Me More"
                    link="/service"
                    showButton={false}
                /> </div>
        )
    }
}

export default About