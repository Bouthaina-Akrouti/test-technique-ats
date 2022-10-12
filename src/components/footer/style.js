import styled from "styled-components";

const FooterWrapper = styled.div`
    .footer-container {
        .footer-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 5%;
            background-color: #FED700;
            p {
                margin-bottom: 0;
                font-size: 20px;
                line-height: 34px;
            }
            span {
                font-size: 15px;
                line-height: 21px;
            }
            .footer-search {
                width: 30%;
                span {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    input {
                        border-radius: 50px 0 0 50px;
                        &:focus-visible {
                            outline: none;
                        }
                    }
                    button {
                        border-radius: 0 50px 50px 0;
                        background-color: #333E48;
                        border: solid 1px #333E48;
                    }
                }
            }
        }
        .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            padding: 30px 5%;
            @media screen and (max-width: 1600px) {
                padding: 30px 5%;
            }
            .contact-section {
                margin-bottom: 2em;
                .contact-call-section {
                    display: flex;
                    margin-bottom
                    align-items: center;
                    margin-bottom: 30px;
                    img {
                        margin-right: 20px;
                    }
                    p {
                        margin-bottom: 0;
                        span {
                            &:first-child {
                                font-size: 13px;
                                line-height: 34px;
                            }
                            font-size: 20px;
                            line-height: 34px;
                            font-family: 'Regular', 'Open Sans';
                        }
                    }
                }
                .contact-adress-section {
                    span {
                        font-size: 14px;
                        line-height: 30px;
                    }
                    p {
                        font-size: 14px;
                        line-height: 30px;
                    }
                }
                .social-media-section {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    span {
                        color: #7C7C7C;
                        font-size: 20px;
                        width: 20px;
                        height: 20px;
                    }
                }
            }
            .title-block {
                font-size: 15px;
                line-height: 70px;;
            }
            ul {
                padding: 0;
                max-height: 300px;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                list-style: none;
                li {
                    font-size: 14px;
                    width: 200px;
                    font-family: 'Regular', 'Open Sans';
                    text-decoration: underline;
                    &:not(:last-child) {
                        line-height: 40px;
                    }
                }
            }
        }
    }
    .navbar-container {
        padding: 10px 5%;
        background-color: #EAEAEA;
        display: flex;
        justify-content: flex-end;
    }
   
`

const NavBottom = styled.div`
    .navbar-container' {
        
    }
`

export {
    FooterWrapper,
    NavBottom
}