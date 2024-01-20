import useApi from "./useApi";

export default function App() {
  const { loading, dataApi } = useApi();

  if (dataApi.length) {
    console.log("App", dataApi);
  }

  return (
    <>
      <div>Hello React!!!</div>
      {loading && <div>Loading...</div>}
      {!loading && dataApi.length && (<div>{dataApi.map((post) => (<div key={post.id}>{post.title}</div>))}</div>)}
    </>
  );
}
