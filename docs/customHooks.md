# hooks

### useDebounce

input 태그에서 마지막 입력을 체크, 설정한 지연 시간 후 결과값을 리턴하는 hook
보통 검색창 등에서 입력 후 아무런 동작하지 않아도 검색이 진행될 수 있도록 할 때 사용

```javascript
const [value, setValue] = useState('')
const debounceInput = useDebounce(value, 400)
useEffect(() => {
    // 마지막 input 입력 후 0.4초 이후에 실행됨
}, [debounceInput])
return (
    <input 
        value={value}
        onChange={(e) => {
            setValue(e.target.value)
        }} 
    />
)
```

### useInterval

시간을 초단위 혹은 분단위 등으로 체크할 때 사용

```javascript
const [time, setTime] = useState(60) // 60초 시작
useInterval(() => {
    // 1000ms, 즉 1초마다 실행되는 함수
    setTime(prev => prev - 1)
}, 1000)
```