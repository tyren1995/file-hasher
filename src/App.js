import FileHasherUI from "./hasher/ui/hasherUI";

function App() {
  const styles= {
   container:{ textAlign:'center'}
  }
  return (
    <div style={styles.container}>
      <h1 >Tyren's Github File Hasher</h1>
      <FileHasherUI />
    </div>
  );
}

export default App;
