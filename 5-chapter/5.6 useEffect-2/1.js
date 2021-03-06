

function Profile({ userId }) {
    const [user, setUser] = useState(); 
    async function fetchAndSetUser(needDetail) {
        const data = await fetchUser(userId, needDetail); 
        setUser(data);
    }
    useEffect(() => { 
        if (!user || user.id !== userId) {
            // 의존성 배열을 입력하지 않는 대신 부수효과 함수 내에서 실행 시점을 조정할 수 있음
            // 이렇게 함수의 실행 시점을 의존성 배열로 관리하지 않고 
            // 부수 효과 함수 내에서 처리하면 부수효과 함수 안에서 사용하는 모든 변수는 최신화된 값을 참조함
            fetchAndSetUser(false);
        }
    });
    /// ...
}
    