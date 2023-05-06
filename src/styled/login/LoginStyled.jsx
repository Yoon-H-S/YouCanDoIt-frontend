import styled from "styled-components";

// 기본 틀
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`; 

// 로그인 텍스트
export const Title = styled.div`
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
    cursor: default;
`; 

// 정보 입력 영역
export const StyledInput = styled.div`
    width: 381px;
    height: 42px;
    margin: 8px 0;
    padding: 0 15px;
    border: 1px solid #B1B1B1;
    border-radius: 5px;
    display: flex;
    align-items: center;

    & > img {
        width: 15px;
        height: 15px;
        margin-right: 20px;
    }

    & > input {
        border: none;
        font-size: 12px;
        width: 100%;
        height: 100%;
    }
`;

// 회원가입, 아이디찾기, 비밀번호찾기
export const Linklist = styled.ul`
    list-style-type: none;
    width: 381px;
    display: flex;
    font-size: 12px;
    margin: 10px 0;

    & > li {
        width: 100%;
        text-align: center;
        color: #5C5C5C;
        cursor: default;
        :not(:last-child) {
            border-right: 1px solid #5C5C5C;
        }
    }
`;

// 로그인 버튼
export const LoginButton = styled.button`
    width: 381px;
    height: 42px;
    background-color: #FFF066;
    border:1px solid #B1B1B1;
    border-radius: 10px;
    margin: 10px 0;
    cursor: pointer;
`;

//sns 로그인 라인
export const Line = styled.div`
    width: 407px;
    display: flex;
    align-items: center;
    color: #AEAEAE;
    font-size: 12px;
    margin: 8px 0;
    cursor: default;

    ::before, ::after {
        content: "";
        flex-grow: 1;
        border-top: 1px dashed #B1B1B1;
        height: 0;
        font-size: 0;
        line-height: 0;
        margin: 0 8px;
    }
`;

//SNS 로그인 영역
export const SNSWrap = styled.div`
    margin-top: 10px;
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

// 각 SNS로그인 개체
export const SNSLogin = styled.img`
    width: 40px;
    height: 40px;
    border: 1px solid #B1B1B1;
    border-radius: 10px;
`;
