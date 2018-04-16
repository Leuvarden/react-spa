import React, { PureComponent } from 'react';
import Logo from './Logo';

export default class Footer extends PureComponent {
    render () {
        return (
            <footer>
                <div className="footer-container">
                    {Logo}
                </div>
            </footer>
        );
    }
}