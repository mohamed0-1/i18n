import React, { Component } from 'react'

export default class Header extends Component {
     change(option){
         localStorage.setItem('lang', option.target.value);
         window.location.reload();
     }
    
    
    
    render() {
        const lang=localStorage.getItem('lang') || 'en;'
        return (
            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col-10"></div>
                    <div className="col-2">
                        <select className="custom-select pull-right" onChange={this.change} value={lang}>
                            <option value="en">English</option>
                            <option value="de">deutsch</option>
                            <option value="ar">عريى</option>
                        </select>
                    </div>
                     
                </div>
            </div>
        )
    }
}
