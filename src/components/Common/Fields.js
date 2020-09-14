
import React, { Component } from 'react';

class Fields extends Component {
    render() {
        return (

            <div class="form-group">
                {this.props.elementName === 'input' ?
                    <input class="form-control" id="name" type={this.props.type} placeholder={this.props.placeholder}
                        required="required"
                         data-validation-required-message="Please enter your name." 
                        value={this.props.value}
                        onChange={e=> this.props.onChange(e)}
                        />
                    :
                    <div className="form-group form-group-textarea mb-md-0">
                        <textarea className="form-control" id="message" placeholder="Your Message *"
                         required="required" data-validation-required-message="Please enter a message."
                         value={this.props.value}
                        onChange={e=> this.props.onChange(e)}
                         ></textarea>
                        
                    </div>
                }

            </div>


        )
    }
}

export default Fields