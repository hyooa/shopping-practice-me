import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div id='header'>
                <div className='inner'>
                    <h1>램프쇼핑</h1>
                    <ul>
                        <li>product 상품등록하기</li>
                        <li>upload 상품보기</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;