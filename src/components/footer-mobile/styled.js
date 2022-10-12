import styled from "styled-components";

const FooterWrapper = styled.div`
    .footer-container {
        background-color: #F2F2F2;
        padding: 150px 20px 20px 20px;
        .ant-collapse {
            background-color: unset;
            border: none;
            .ant-collapse-item {
                border: 1px solid #d9d9d9;
                margin-bottom: 10px;
                border-radius: 5px;
                background-color: #fff;
                .ant-collapse-header {
                    flex-direction: row-reverse;
                    .ant-collapse-arrow {
                        transform: rotate(90deg);
                    }
                    .ant-collapse-header-text {
                        font-size: 16px;
                        font-family: SemiBold;
                        color: #333E48;
                    }
                }
                &.ant-collapse-item-active {
                    .ant-collapse-arrow {
                        transform: rotate(180deg);
                    }
                }
                .ant-collapse-content-box {
                    ul {
                        list-style: none;
                        li {
                            font-size: 13px;
                            line-height: 24px;
                            padding: 10px 0;
                            border-bottom: solid 1px #DDDDDD;
                        }
                    }
                }
            }
        }
        .footer-social-media-section {
            padding: 10px 30px;
            display: flex;
            justify-content: space-between;
            .anticon {
                font-size: 24px;
                width: 24px;
                height: 24px;
                &.anticon-facebook {
                    color: #3C5A99;
                }
                &.anticon-linkedin {
                    color: #0178B6;
                }
                &.anticon-instagram {
                    color: #F29156;
                }
                &.anticon-youtube {
                    color: #BF171D;
                }
                &.anticon-heart {
                    color: #F25A00;
                }
            }
            .fa-pinterest {
                font-size: 24px;
                width: 24px;
                height: 24px;
                color: #BD081C;
            }
        }
    }
    .footer-bottom {
        background-color: #333E48;
        padding: 20px;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        p {
            color: #fff;
            font-size: 13px;
            line-height: 20px;
            span {
                color: #FED700;
            }
        }
        h4 {
            color: #fff;
            font-size: 20px;
            line-height: 20px;
            font-family: 'Regular', 'Open Sans';
        }
    }
`

export {
    FooterWrapper
}