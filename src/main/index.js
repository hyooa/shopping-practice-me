import React from 'react';
import '../main/index.scss';

const MainPage = () => {
    return (
        <div>
            <div id='main'>
                <div id='banner'>
                    <img src='images/banners/banner1.png' alt=''></img>
                </div>
                <div id='product-list' className='inner'>
                    <h2>그린 조명 최신 상품</h2>
                    <div id='product-items'>
                        {/* 나중에 map 돌리기 */}
                        <div className='product-card'>
                            {/* 링크 전달 */}
                                <div className='product-img'>
                                    <img src='images/products/product1.jpg' alt=''></img>
                                </div>
                                <div className='product-contents'>
                                    <span className='product-name'>이름</span>
                                    <span className='product-price'>가격</span>
                                    <div className='product-seller'>
                                        <img src='images/icons/avatar.png' alt=''></img>
                                        판매자
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;