import styled from "styled-components";

const HomeMobileWrapper = styled.div`
    .ant-row {
        background-color: #F7F7F7;
        padding: 30px;
        margin: 0 !important;
        p {
            color: #34BCEC;
            font-size: 11px;
            line-height: 22px;
            font-family: 'Regular', 'Open Sans';
        }
        h1 {
            font-size: 20px;
            line-height: 22px;
            font-family: 'Light';
            width: 55%;
            strong {
                font-family: 'Bold';
            }
        }
        &.promos-section-mobile {
            flex-flow: row;
            padding: 10px;
            margin: 0 !important;
            background-color: unset;
            justify-content: space-between;
            .ant-col {
                margin: 0 !important;
                background-color: #F7F7F7;
                padding: 20px;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                width: 49%;
                flex: unset;
                max-width: 49%;
                div {
                    width: 50%;
                    p {
                        color: #333E48;
                        font-size: 10.94px;
                        line-height: 13.82px;
                        text-transform: uppercase;
                    }
                    .first-section-button {
                        color: #333E48;
                        font-size: 9.94px !important;
                        line-height: 18.03px !important;
                        .anticon {
                            svg {
                                color: #FED700;
                            }
                        }
                    }
                    .second-section-button {
                        color: #333E48;
                        font-size: 8px !important;
                        span {
                            white-space: break-spaces;
                            width: 20px;
                            line-height: 7.31px !important;
                        }
                        strong {
                            font-size: 18px !important;
                            line-height: 13.15px;
                        }
                        .anticon {
                            svg {
                                color: #FED700;
                            }
                        }
                    }
                }
                
            }
        }
    }
    .carousel-promos-block {
        margin-top: 15px;
        .slick-slide {
            img {
                margin: auto;
            }
            h2 {
                font-size: 11.91px;
                line-height: 21.49px;
                font-family: 'Regular', 'Open Sans';
                text-align : center;
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
            border-bottom: solid 2px #DDDDDD;
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
                        color: #0062BD;
                        font-size: 15px;
                        line-height: 18px;
                        height: 60px;
                    }
                    .footer-card {
                        display: flex;
                        align-items: center;
                        padding: 20px 0;
                        .price-product {
                            font-size: 20px;
                            line-height: 18px;
                            font-family: 'Regular', 'Open Sans';
                            margin-bottom: 0;
                            margin-right: 20px;
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
        .footer-carousel {
            > span {
                color: #878787;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 13px;
                line-height: 18px;
                font-family: 'Regular', 'Open Sans';
                margin-top: 10px;
            }
        }
        .bottom-promos-block {
            background-color: #F5F5F5;
            padding: 30px;
            margin: 50px auto;
            p {
                margin-bottom: 0;
                font-family: 'Open Sans';
                font-size: 17px;
                line-height: 21.9px;
            }
            span {
                display: flex;
                align-items: center;
                line-height: 20px;
                text-align: initial;
                margin-top: 10px;
                text-transform: lowercase;
                strong {
                    background-color: #FED700;
                    border-radius: 5px;
                    font-size: 36px;
                    line-height: 40px;
                    margin-left: 20px;
                    padding: 10px;
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
                top: 13px;
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
    HomeMobileWrapper,
    PromosWrapper,
    HeaderPromos
}