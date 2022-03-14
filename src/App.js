import FileHasherUI from "./hasher/ui/hasherUI";

function App() {
  const styles= {
   container:{ textAlign:'center',display:'flex',flexDirection:'column',alignItems:'stretch',minHeight:'100vh',minWidth:'100%'},
    headers : {backgroundColor:'lightgrey',height:'47px', flexShrink:0},
    main :{flexGrow:1, flexShrink:0},
    mainBox : {height:'75vh',border:'1px solid grey',margin:'6%'},
    font : {color:'grey'}
  }
  return (
    <div style={styles.container}>
      <header style={styles.headers}/>
     <div style={styles.main}>
       <div style={styles.mainBox}>
         <h1 style={styles.font}>Basic File Hasher</h1>
        <FileHasherUI />
      </div>
      </div>
      <footer  style={styles.headers}><h2>Tyren's File Hasher</h2></footer>
    </div>
  );
}

export default App;
