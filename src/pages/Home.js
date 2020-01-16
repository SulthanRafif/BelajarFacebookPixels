import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div>
                Ini Home Page
                <div class="aks-btn">
                    <Link to="/menu">
                        <button type="button">
                            Menu
                        </button>
                    </Link>
                </div>
            </div>
        )
        ;
    }
}

const style = {
    
}