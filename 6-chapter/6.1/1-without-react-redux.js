import React, { useContext, createContext, useReducer } from 'react';

const AppContext = createContext({});
const DispatchContext = createContext(() => {});

export default function App() {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    return (
        <div>
            <AppContext.Provider value={state}>
                <DispatchContext.Provider   Provider value={dispatch}>
                    <User />
                    <Product />
                </DispatchContext.Provider>
            </AppContext.Provider>
        </div>
    );
}

const INITIAL_STATE = {
    user: { name: 'mike' },
    product: { name: 'iphone' },
};
// 사용자의 이름만 변경하는 코드
function reducer(state, action) {
    switch (action.type) {
        case 'setUserName':
            return {
                ...state,
                user: { ...state.user, name: action.name },
            };
    }
}
// 버튼을 클릭하면 dispatch를 이용해서 사용자의 이름을 변경하는 컴포넌트
function User() {
    console.log('User render');
    const { user } = useContext(AppContext);
    const dispatch = useContext(DispatchContext);
    return (
        <div>
            <p>{`${user.name}님 안녕하세요`}</p>
            <button onClick={() => dispatch({ type: 'setUserName', name: 'john' })}>
                사용자 이름 수정
            </button>
        </div>
    );
}
    
function Product() {
    console.log('Product render'); 
    const { product } = useContext(AppContext);
    return <p>{`제품 이름: ${product.name}`}</p>;
}