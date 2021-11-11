import React from 'react';
import styles from '../styles/hasherUIStyles.module.css';
import FileHasherLogic from '../logic/hasherLogic';
import {useDropzone} from 'react-dropzone';
import ClipLoader from "react-spinners/ClipLoader";

const FileHasherUI = (props) => {
  const { hashFiles, deleteFile, hashedFiles, isLoading } = FileHasherLogic();
  const {getRootProps, getInputProps} = useDropzone({onDrop:hashFiles});
  
  
  const files =  hashedFiles.map((hashedFile,index) => (
    <tr key={index} >
      <td >{hashedFile['file_name']}</td>
      <td align="right">{hashedFile['file_size'] ? (hashedFile['file_size']+' mb') : ('NA')}</td>
      <td align="right">{hashedFile['file_type'] ? (hashedFile['file_type']) : ('NA')}</td>
      <td align="right">{hashedFile['md5_hash'] ? (hashedFile['md5_hash']) : ('NA')}</td>
      <td align="right">{hashedFile['sha1-base16'] ? (hashedFile['sha1-base16']) : ('NA')}</td>
      <td align="right">{hashedFile['sha2'] ? (hashedFile['sha2']) : ('NA')}</td>
      <td align="right" className={styles.buttonCell}><button onClick={(e)=> {e.stopPropagation(); deleteFile(hashedFile)}}><b>Delete</b></button></td>
    </tr>
  ));

  const table = () => (
    <table>
      <thead>
        <tr>
    <th>File Name</th>
    <th>File Size</th>
    <th>File Type</th>
    <th>MD5</th>
    <th>SHA-1</th>
    <th>SHA-2</th>
    <th>Actions</th>
    
    </tr>
      </thead>
      <tbody>
        {files}
      </tbody>
    </table>
  );

  return (
    <div className={styles.container}>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      
      <section>
        {isLoading? (<ClipLoader/>) : (table())}
      </section>
      </div>
    </div>
  );
}

export default FileHasherUI;