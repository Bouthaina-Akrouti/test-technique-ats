import styled from "styled-components";

const TitleMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 10px 24px;
    span {
        font-family: 'Regular', 'Open Sans';
        font-size: 14px;
        line-height: 35px;
    }
`
const CarouselWrapper = styled.div`
.carousel-container {
    padding: 0 5% 20px;
    background-color: #F5F5F5;
    display: flex;
    .ant-layout-sider {
        height: 100%;
        .ant-menu {
            height: 90.4% !important;
            li {
                height: unset;
                margin: 0;
                font-family: 'Regular', 'Open Sans';
                font-size: 14px;
                line-height: 35px;
                div {
                    margin: 0;
                }
                &:not(:last-child) {
                    border-bottom: solid 1px #DDDDDD;
                }
                &.ant-menu-item-only-child {
                    font-family: "Bold";
                    &:not(:last-child) {
                        border-bottom: solid 2px #DDDDDD;
                    }
                }
            }
        }
    }
    .carousel-content {
        width: calc(100% - 500px);
        .slick-slide {
            background-color: #F5F8F8;
            padding: 70px 50px 88px;
            .carousel-item-title {
                font-size: 36px;
                line-height: 36px;
            }
            .carousel-item-subtitle {
                font-size: 28px;
                line-height: 36px;
            }
            div {
                span {
                    font-size: 15px;
                    line-height: 36px;
                    padding: 0 15px;
                    &:not(:last-child) {
                        border-right: solid 1px #BCBCBC;
                    }
                    &:first-child {
                        padding-left: 0;
                    }
                }
                p {
                    font-size: 18px;
                    line-height: 36px;
                    font-family: 'Regular', 'Open Sans';
                    margin-top: 15px;
                    strong {
                        font-size: 42px;
                    }
                }
            }
        }
        .ant-carousel {
            ul.slick-dots.slick-dots-bottom {
                justify-content: unset;
                margin-left: 50px;
                align-items: center;
                li {
                    width: unset;
                    height: unset;
                    margin-right: 10px;
                    button {
                        width: 8px;
                        height: 8px;
                        border-radius: 50px;
                        background: #BCBCBC;
                        ::before {
                            content: unset;
                        }
                    }
                    &.slick-active {
                        button {
                            background: #FED700;
                            height: 3px;
                            width: 16px;
                        }
                    }
                }
            }
        }
    }
    .cards-block {
        display: flex;
        .ant-card {
            width: 20%;
            height: 200px;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            .ant-card-body {
                padding: 15px;
                p {
                    font-size: 14px;
                    margin-bottom: 0;
                    text-align: center;
                }
            }
        }
    }
    .card-content-block-right {
        height: calc(100% / 3);
        h3 {
            font-size: 17px;
            line-height: 21px;
            font-family: "Open sans";
            font-weight: 300;
            span {
                font-weight: bold;
            }
        }
        .ant-btn {
            text-align: initial;
            color: #333E48;
            font-weight: bold;
            font-family: "Open sans";
            font-size: 14px;
            line-height: 30px;
            .anticon {
                svg {
                    color: #FED700;
                }
            }
        }
    }
}

`

const PromosWrapper = styled.div`
    .promos-container {
        padding: 0 5%;
        height: 100vh;
        min-height: 1000px;
        .carousel-promos-block {
            .slick-slider {
                button {
                    ::before {
                        color: #333E48;
                    }
                }
            }
            .ant-card {
                padding: 0;
                border: none;
                .ant-card-head {
                    padding: 0;
                    border-bottom: unset;
                    min-height: unset;
                    .ant-card-head-title {
                        color: #878787;
                        font-size: 12px;
                        line-height: 18px;
                        font-family: 'Regular', 'Open Sans';
                    }
                }
                .ant-card-body {
                    padding: 0;
                    display: flex;
                    h3 {
                        padding: 10px 10px 0;
                        color: #0062BD;
                        font-size: 15px;
                        line-height: 18px;
                        height: 60px;
                    }
                    .product-promos {
                        background-color: #44B81B;
                        padding: 5px;
                        border-radius: 5px;
                        color: #0062BD;
                        font-size: 12px;
                        line-height: 24px;
                        color: #fff;
                        position: relative;
                        top: -15px;
                        left: 5px;
                    }
                    .footer-card {
                        display: flex;
                        justify-content: space-between;
                        align-items: baseline;
                        .price-product {
                            font-size: 20px;
                            line-height: 18px;
                            font-family: 'Regular', 'Open Sans';
                            margin-bottom: 10px;
                        }
                        .old-price-product {
                            font-size: 12px;
                            line-height: 18px;
                            font-family: 'Regular', 'Open Sans';
                            color: #848484;
                            text-decoration: line-through;
                        }
                        .ant-btn {
                            border: none;
                            width: 35px;
                            height: 35px;
                            border-radius: 50%;
                            background-color: #E6E6E6;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    }
                    .ant-divider {
                        height: 18em;
                        border-left: 2px solid #EAEAEA;
                    }
                }
            }
            .slick-dots {
                li {
                    width: unset;
                    height: unset;
                    margin-right: 10px;
                    button {
                        width: 8px;
                        height: 8px;
                        border-radius: 50px;
                        background: #BCBCBC;
                        padding: 0;
                        ::before {
                            content: unset;
                        }
                    }
                    &.slick-active {
                        button {
                            background: #FED700;
                            height: 3px;
                            width: 16px;
                        }
                    }
                }
            }
            .slick-slide {
                &:not(:last-child) {
                    :after {
                        content: '';
                        display: block;
                    }
                }
            }
        }
        .bottom-promos-block {
            background-color: #F5F5F5;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 30px;
            width: 80%;
            margin: 50px auto;
            p {
                margin-bottom: 0;
                font-family: 'Open Sans';
                font-size: 24px;
                line-height: 44px;
            }
            span {
                margin-left: 20px;
                display: flex;
                flex-direction: column;
                background-color: #FED700;
                padding: 5px;
                border-radius: 5px;
                line-height: 20px;
                text-align: initial;
                strong {
                    font-size: 36px;

                }
            }
        }  
    }

`
const HeaderPromos = styled.div`
    display: flex;
    padding: 20px 0 10px;
    justify-content: space-between;
    border-bottom: solid 2px #DDDDDD;
    div {
        display: flex;
        align-items: center;
        p {
            margin-bottom: 0;
            font-size: 22px;
            font-family: 'Regular', 'Open Sans';
            line-height: 18px;
            ::after {
                content: '';
                display: block;
                width: 100%;
                height: 3px;
                background-color: #FED700;
                position: relative;
                top: 15px;
            }
        }
        .date {
            background-color: #FED700;
            color: #000;
            padding: 4px 20px;
            border-radius: 50px;
            margin-left: 30px;
            font-size: 14.5px;
            font-weight: bold;
        }
        span {
            color: #606060;
            font-size: 14px;
            line-height: 18px;
            font-family: 'Regular', 'Open Sans';
        }
    }
`
export {
    TitleMenu,
    CarouselWrapper,
    PromosWrapper,
    HeaderPromos
}