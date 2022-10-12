import styled from 'styled-components' 

const HeaderWrapper = styled.div`
.header-container {
    padding: 15px 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #E7E7E7;
    @media screen and (max-width: 900px) {
        border-bottom: none;
    }
    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        @media screen and (max-width: 900px) {
            display: none;
        }
        .navbar-search {
            width: 45%;
            .ant-input-wrapper {
                display: flex;
                align-items: center;
                .ant-input-affix-wrapper {
                    position: relative;
                    width: 100%;
                    padding: 0;
                    border: solid 1px #fdd700;
                    width: 100%;
                    box-sizing: border-box;
                    height: 40px;
                    border-radius: 50px 0 0 50px;
                    padding: 0 20px;
                    input {
                        &:focus-visible {
                            outline: none;
                        }
                    }
                    .ant-input-suffix {
                        position: absolute;
                        right: 20px;
                        top: 0;
                        bottom: 0;
                        margin: auto;
                        height: fit-content;
                        .ant-dropdown-trigger {
                            .ant-space-horizontal {
                                display: flex;
                                div {
                                    font-size: 14px;
                                    color: #6b6b6b;
                                }
                            }
                        }
                    }
                }
                .ant-input-group-addon {
                    button {
                        background: #fdd700;
                        border: solid 1px #fdd700;
                        height: 40px;
                        box-shadow: none;
                        border-radius: 0 50px 50px 0;
                        padding: 10px 20px;
                        svg {
                            width: 20px;
                            height: 20px;
                            color: #000;
                        }
                    }
                }                
            }
        }
        ul {
            display: flex;
            list-style: none;
            margin-bottom: 0;
            li {
                font-size: 14px;
                font-family: Regular;
                margin-right: 30px;
                color: #333e48;
                position: relative;
                .shopping {
                    span.shopping-num {
                        line-height: 10px;
                        background: #fdd700;
                        padding: 2px 4px;
                        font-size: 10px;
                        border-radius: 50%;
                        position: absolute;
                        bottom: -2px;
                        right: -7px;
                    }
                }
            }
        }
    }
    .navbar-mobile {
        display: none;
        @media screen and (max-width: 900px) {
            display: block;
        }
        ul {
            display: flex;
            list-style: none;
            margin-bottom: 0;
            li {
                font-size: 14px;
                font-family: Regular;
                margin-right: 30px;
                color: #333e48;
                position: relative;
                .shopping {
                    span.shopping-num {
                        line-height: 10px;
                        background: #fdd700;
                        padding: 2px 4px;
                        font-size: 10px;
                        border-radius: 50%;
                        position: absolute;
                        bottom: -2px;
                        right: -7px;
                    }
                }
            }
        }
    }
    
    }
}
.navbar-search-mobile {
    display: none;
    position: relative;
    padding: 10px 5%;
    @media screen and (max-width: 900px) {
        display: block;
    }
    .ant-input-wrapper {
        display: flex;
        align-items: center;
        .ant-input-affix-wrapper {
            position: relative;
            width: 100%;
            padding: 0;
            border: solid 1px #fdd700;
            width: 100%;
            box-sizing: border-box;
            height: 40px;
            border-radius: 50px;
            padding: 0 20px 0 40px;
            input {
                &:focus-visible {
                    outline: none;
                }
            }
            .ant-input-suffix {
                position: absolute;
                right: 20px;
                top: 0;
                bottom: 0;
                margin: auto;
                height: fit-content;
                color: #707070;
                .ant-dropdown-trigger {
                    .ant-space-horizontal {
                        display: flex;
                        div {
                            font-size: 14px;
                            color: #6b6b6b;
                        }
                    }
                }
            }
        }
        .ant-input-group-addon {
                display: none;
        }              
    }
    .anticon-search {
        position: absolute;
        z-index: 999999999999;
        left: 7%;;
        top: 23px;
    } 
}
`

export {
    HeaderWrapper
}