import React from 'react';
import styles from '../styles/hasherUIStyles.module.css'
import {useDropzone} from 'react-dropzone';

const FileHasherUI = (props) => {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div >
    <section className={styles.container}>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>

    <table>
      <thead>
        <tr>
    <td>File Name</td>
    <td>File Size</td>
    <td>SHA-1</td>
    <td>MD5</td>
    <td>Some Other Hash</td>
    </tr>
      </thead>
      <tbody>
        <tr>
        <td>hola</td>
    <td>1 million billion trillion dollars</td>
    <td>aeg4ea56g4ea564687ea</td>
    <td>aeg156ea4g56ae4g</td>
    <td>aeg5456ae4g56ae4</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default FileHasherUI;