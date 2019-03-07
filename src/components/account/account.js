import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import PurchaseHistory from './purchaseHistory';
import AccountInformation from './accountInformation';

class Account extends Component {

    componentDidMount() {

        const navbarLinks = [
            {
                _id: 0,
                title: 'Purchase History',
                active: false,
                component: <PurchaseHistory/>
            },
            {
                _id: 1,
                title: 'Account Information',
                active: true,
                component: <AccountInformation/>
            }
        ]

        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks(navbarLinks);
    }

    renderContent() {
        let jsx;
        if(this.props.navbarLinks) {
            this.props.navbarLinks.forEach(link => {
                if(link.active) {
                    jsx = link.component;
                }
            })
        }
        return jsx;
    }

    render() {
        return (
            <div>
           { this.renderContent() }
           </div>
        )
    }
}

function mapStateToProps(state) {
    const { navbarLinks, headerLinks } = state.headerNavbar;
    return { navbarLinks, headerLinks }
}

Account = connect(mapStateToProps, actions)(Account);

export default Account;