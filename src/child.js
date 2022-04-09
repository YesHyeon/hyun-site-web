function ChildComponent(props) {
  const { name, age } = props;
  return (
    <h1>
      안녕하세요 저는{name}이고 나이는{age}살입니다!
    </h1>
  );
}

export default ChildComponent;
