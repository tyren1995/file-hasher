import FileHasherUI from "./hasher/ui/hasherUI";

function App() {
  const styles= {
   container:{ textAlign:'center',display:'flex',flexDirection:'column',alignItems:'stretch',minHeight:'100vh',minWidth:'100%'},
    headers : {backgroundColor:'lightgrey',padding:'3%', flexShrink:0},
    main :{flexGrow:1, flexShrink:0}
  }
  return (
    <div style={styles.container}>
      <header style={styles.headers}><h2>Tyren's File Hasher</h2></header>
     <div style={styles.main}>
      <FileHasherUI />
      </div>
      <footer  style={styles.headers}><h2>Tyren's File Hasher</h2></footer>
    </div>
  );
}

export default App;
