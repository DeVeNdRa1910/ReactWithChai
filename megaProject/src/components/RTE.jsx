import React from 'react'
import { Editor } from '@tinymce/tinymce-react'



//RTE -> real time editor
export default function RTE({name, controls, label, defaultValue=""}) {
    return (
        <div></div>
    )
}






// If you want to return only Editor

/* function RTE() {
  return (
    <Editor 
        initialValue='default value'
        init={
            {
                branding: false,
                height : 500,
                menubar: true,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar: 'undo redo | formatselect | bold italic backcolor | \ alignleft aligncenter alignright alignjustify|\ bullist numlist outdent indent | removeformat | help' ,
                

            }
        }
    />
  )
} 

export default RTE
*/